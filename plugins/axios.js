import axios from 'axios'
import { useAuthStore } from '~/stores/AuthStore'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  // Set base URL
  axios.defaults.baseURL = config.public.API_URL
  
  //interceptors--(heders Modification)
  axios.interceptors.request.use(
    (config) => {
      const authStore = useAuthStore()

      // First try token from Pinia
      let token = authStore.token

      // If token not found, fallback to cookie
      if (!token && process.client) {
        const tokenFromCookie = document.cookie
          .split('; ')
          .find(row => row.startsWith('token='))
          ?.split('=')[1]

        if (tokenFromCookie) {
          token = tokenFromCookie
          // authStore.token = token // Sync back to Pinia if needed
        }
      }

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    (error) => Promise.reject(error)
  )

  // ✅ RESPONSE INTERCEPTOR (TOKEN EXPIRED HANDLING)
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const authStore = useAuthStore()

      if (error.response?.status === 401) {
        console.warn('Token expired or unauthorized')

        // 🔥 Clear Pinia store
        authStore.$reset()

        // 🔥 Remove cookie
        if (process.client) {
          document.cookie = 'token=; path=/; max-age=0'
        }

        // 🔥 Redirect to login
        navigateTo('/user/login')
      }

      return Promise.reject(error)
    }
  )

  return {
    provide: {
      axios
    }
  }
})
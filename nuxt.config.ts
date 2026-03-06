// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  runtimeConfig: {
    public: {
      API_URL: 'https://localhost:7049/api'  // fallback (will be overridden by env)
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  alias: {
    '~store': '/store' 
  },

  plugins: [
    { src: '@/plugins/axios.js' },
    { src: '@/plugins/message.js' },
    { src: '@/plugins/pinia.client.js' },
  ],

  devtools: { enabled: true },

})

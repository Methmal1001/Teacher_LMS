<template>
  <header class=" ">
    <!-- Left side: Logo + Hamburger (mobile only) -->
    <div class="flex items-center space-x-4">
      <!-- Hamburger - visible only on mobile -->
      <button
        class="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 "
        @click="toggleSidebar" aria-label="Toggle navigation menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
          stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Logo -->
      <div class="text-2xl font-bold">
        <NuxtLink to="/student">My Academy</NuxtLink>
      </div>
    </div>

    <!-- Right side: Notifications, Messages, User -->
    <div class="flex items-center space-x-4">
      <!-- Notifications -->
      <div class="relative">
        <div class="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
        <span class="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-1.5 py-0.5 min-w-[18px]">3</span>
      </div>

      <!-- Messages -->
      <div class="relative">
        <div class="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M7 8h10M7 12h6m-6 4h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <span class="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-1.5 py-0.5 min-w-[18px]">5</span>
      </div>

      <!-- User Avatar & Dropdown -->
      <div class="relative" @click="toggleDropdown">
        <div class="flex items-center space-x-2 cursor-pointer">
          <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            {{ userInitials }}
          </div>
          <span class="font-medium text-gray-100 hidden sm:inline">{{ displayName }}</span>
        </div>

        <transition name="fade">
          <div v-if="dropdownOpen"
            class="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl overflow-hidden z-50">
            <NuxtLink to="/profile" class="block px-4 py-3 hover:bg-gray-100 text-sm">Profile</NuxtLink>
            <button @click="logout" class="w-full text-left px-4 py-3 hover:bg-gray-100 text-sm">Logout</button>
          </div>
        </transition>
      </div>

      <div>
        <button
          @click="$emit('toggle-dark')"
          class="p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition"
        >
          {{ isDark ? '☀️ Light' : '🌙 Dark' }}
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { useAuthStore } from '~/stores/AuthStore'

export default {
  props: {
    isDark: Boolean,
  },
  data() {
    return {
      dropdownOpen: false,
      authStore: null,
    }
  },

  computed: {
    userInitials() {
      const name = this.authStore?.loggedUser?.fullName || 'User'
      return name.charAt(0).toUpperCase()
    },

    displayName() {
      return this.authStore?.loggedUser?.fullName || 'User'
    }
  },

  created() {
    this.authStore = useAuthStore()
  },

  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    },

    toggleSidebar() {
      this.$emit('toggle-sidebar')
    },

    logout() {
      localStorage.removeItem('authToken')
      this.authStore.$reset()
      this.$router.push('/auth/login')
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
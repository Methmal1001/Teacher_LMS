<template>
  <div class="min-h-screen bg-gray-100 p-6 sm:p-10">

    <!-- Header -->
    <div class="mb-8 text-center">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-900">Admin Dashboard</h1>
      <p class="mt-2 text-gray-600">Manage your courses, students, marks, and settings</p>
    </div>

    <!-- Dashboard Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      <!-- Course Management -->
      <div
        class="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition cursor-pointer"
        @click="navigateTo('admincoursemgt')"
      >
        <div class="bg-blue-100 p-4 rounded-full mb-4">
          <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
          </svg>
        </div>
        <h2 class="text-lg font-semibold text-gray-800">Course Management</h2>
        <p class="text-gray-500 text-sm text-center mt-2">Add, edit, or delete courses</p>
      </div>

      <!-- Student Management -->
      <div
        class="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition cursor-pointer"
        @click="navigateTo('adminstudentmgt')"
      >
        <div class="bg-green-100 p-4 rounded-full mb-4">
          <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M16 7a4 4 0 01-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h2 class="text-lg font-semibold text-gray-800">Student Management</h2>
        <p class="text-gray-500 text-sm text-center mt-2">View, add, or update student info</p>
      </div>

      <!-- Marks Management -->
      <div
        class="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition cursor-pointer"
        @click="navigateTo('adminmarksmgt')"
      >
        <div class="bg-yellow-100 p-4 rounded-full mb-4">
          <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M11 17h2M12 11v6m0 0l-3-3m3 3l3-3M4 7h16M4 7v12a2 2 0 002 2h12a2 2 0 002-2V7M4 7l8-4 8 4" />
          </svg>
        </div>
        <h2 class="text-lg font-semibold text-gray-800">Marks Management</h2>
        <p class="text-gray-500 text-sm text-center mt-2">Manage student marks and grades</p>
      </div>

      <!-- Settings -->
      <div
        class="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition cursor-pointer"
        @click="navigateTo('adminsettings')"
      >
        <div class="bg-red-100 p-4 rounded-full mb-4">
          <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V8c0-2.21 3.582-4 8-4s8 1.79 8 4v6c0 2.21-3.582 4-8 4z" />
          </svg>
        </div>
        <h2 class="text-lg font-semibold text-gray-800">Settings</h2>
        <p class="text-gray-500 text-sm text-center mt-2">Configure system preferences</p>
      </div>

    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const navigateTo = (page) => {
      router.push(`/admin/${page}`)
    }
    return { navigateTo }
  }
}
</script>

<style scoped>
/* Optional: smooth shadow effect */
</style>

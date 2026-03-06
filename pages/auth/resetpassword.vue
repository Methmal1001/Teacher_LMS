<template>
  <div class="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="w-full max-w-md bg-white rounded-xl shadow-md p-8">
      <!-- Header -->
      <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Reset Password</h1>
      <p class="text-center text-gray-500 mb-6 text-sm">
        Enter your email/username and your new password
      </p>

      <!-- Form -->
      <form class="space-y-5">
        <!-- Email or Username -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Email or Username
          </label>
          <input
            type="text"
            placeholder="Enter email or username"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- New Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Confirm Password -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Reset Button -->
        <button
          type="submit"
          class="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
        >
          Reset Password
        </button>
      </form>

      <!-- Login Link -->
      <p class="text-center text-sm text-gray-500 mt-6">
        Remembered your password?
        <a href="/auth/login" class="text-blue-600 font-medium hover:underline">
          Login
        </a>
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'auth'
})
</script>

<style>
input:focus {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}
</style>

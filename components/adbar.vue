<template>
  <div class="w-full bg-gray-200 p-2 flex justify-center">
    <!-- Card -->
    <div
      class="bg-white rounded-xl shadow-md hover:shadow-lg transition
             w-full max-w-3xl p-4
             flex flex-col sm:flex-row gap-4"
    >
      <!-- Image -->

      <!-- Content -->
      <div class="flex-1">
        <!-- Contact & Social Links -->
        <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">

        <!-- Email -->
        <a
            href="mailto:example@email.com"
            class="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V6a2 2 0 00-2-2H3a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>Email</span>
        </a>

        <!-- WhatsApp -->
        <a
            href="#"
            class="flex items-center gap-2 text-gray-600 hover:text-green-600 transition"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16.02 3A13 13 0 003 16a12.8 12.8 0 002 7L3 29l6.2-1.9A13 13 0 1016.02 3zm7.6 18.4c-.3.9-1.6 1.6-2.6 1.8-.7.1-1.6.2-4.8-1.1-4.1-1.7-6.7-5.8-6.9-6.1-.2-.3-1.7-2.3-1.7-4.3 0-2.1 1.1-3.1 1.5-3.5.4-.4.9-.5 1.2-.5h.9c.3 0 .7-.1 1 .7.3.8 1.1 2.7 1.2 2.9.1.2.2.5 0 .8-.2.3-.3.5-.5.7-.2.2-.4.4-.6.6-.2.2-.4.4-.2.8.2.4 1 1.6 2.1 2.6 1.5 1.4 2.7 1.8 3.1 2 .4.2.6.2.9-.1.3-.3 1-1.1 1.3-1.5.3-.4.6-.3 1-.2.4.1 2.6 1.2 3 1.4.4.2.7.3.8.5.1.2.1.9-.2 1.8z"/>
            </svg>
            <span>WhatsApp</span>
        </a>

        <!-- YouTube -->
        <a
            href="#"
            class="flex items-center gap-2 text-gray-600 hover:text-red-600 transition"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.5 6.2s-.2-1.7-.9-2.4c-.8-.9-1.8-.9-2.2-1C17.3 2.5 12 2.5 12 2.5h-.1s-5.3 0-8.4.3c-.4.1-1.4.1-2.2 1-.7.7-.9 2.4-.9 2.4S0 8.1 0 10v2c0 1.9.5 3.8.5 3.8s.2 1.7.9 2.4c.8.9 1.9.8 2.4.9 1.7.2 7.2.3 7.2.3s5.3 0 8.4-.3c.4-.1 1.4-.1 2.2-1 .7-.7.9-2.4.9-2.4s.5-1.9.5-3.8v-2c0-1.9-.5-3.8-.5-3.8zM9.5 14.5v-5l5.2 2.5-5.2 2.5z"/>
            </svg>
            <span>YouTube</span>
        </a>

        <!-- Facebook -->
        <a
            href="#"
            class="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691V11.01h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.716-1.796 1.764v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z"/>
            </svg>
            <span>Facebook</span>
        </a>

        <!-- Instagram -->
        <a
            href="#"
            class="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition"
        >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-.9 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 .9-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 3.6a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zm6.4-10.8a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z"/>
            </svg>
            <span>Instagram</span>
        </a>

        </div>

      </div>
    </div>
  </div>
</template>

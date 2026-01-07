<template>
  <header class="bg-gray-900 text-white flex justify-between items-center px-6 py-4 shadow-md">
    <!-- Left side -->
    <div class="text-2xl font-bold">
      My Academy
    </div>

    <!-- Right side -->
    <div class="flex items-center space-x-4">

      <!-- Notifications -->
      <div class="relative">
        <div class="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
          <!-- Bell SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </div>
        <span class="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-1">3</span>
      </div>

      <!-- Messages -->
      <div class="relative">
        <div class="bg-gray-700 p-2 rounded-full hover:bg-gray-600 cursor-pointer">
          <!-- Message SVG -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h6m-6 4h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <span class="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full px-1">5</span>
      </div>

      <!-- User Avatar -->
      <div class="flex items-center space-x-2">
        <div class="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          JD
        </div>
        <span class="font-medium text-gray-100">John Doe</span>
      </div>

    </div>

  </header>
</template>

<style>
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  direction: ltr;
}
</style>

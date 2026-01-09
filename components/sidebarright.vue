<template>
  <aside
    class="w-full lg:w-64
           bg-gray-800 text-gray-100
           p-3 sm:p-4
           flex flex-col space-y-4"
  >

    <!-- Card -->
    <div class="bg-gray-200 p-4 sm:p-5 text-gray-700 rounded-lg">

      <!-- Titles -->
      <div class="font-bold text-lg mb-1">
        Upcoming Events
      </div>
      <div class="text-sm font-medium mb-3">
        Nearly Due Activities
      </div>

      <!-- Event List -->
      <div class="space-y-2">

        <button
          class="w-full
                 bg-gray-300
                 px-3 py-2
                 rounded
                 text-left text-sm
                 break-words
                 hover:text-white hover:bg-gray-700
                 transition duration-200"
        >
          ABC-1019 – Assignment
        </button>

        <button
          class="w-full
                 bg-gray-300
                 px-3 py-2
                 rounded
                 text-left text-sm
                 break-words
                 hover:text-white hover:bg-gray-700
                 transition duration-200"
        >
          EEI-1909 – Introduction to Java LAB Report
        </button>

        <button
          class="w-full
                 bg-gray-300
                 px-3 py-2
                 rounded
                 text-left text-sm
                 break-words
                 hover:text-white hover:bg-gray-700
                 transition duration-200"
        >
          AMD-5680 – Introduction to Python
        </button>

        <button
          class="w-full
                 bg-gray-300
                 px-3 py-2
                 rounded
                 text-left text-sm
                 break-words
                 hover:text-white hover:bg-gray-700
                 transition duration-200"
        >
          DDK-0097 – Mathematical Operations
        </button>

      </div>
    </div>

  </aside>
</template>

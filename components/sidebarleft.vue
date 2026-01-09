<template>
  <aside
    class="w-full lg:w-64
           bg-gray-800 text-gray-100
           p-3 sm:p-4
           flex flex-col space-y-4"
  >

    <!-- Card -->
    <div class="bg-gray-200 p-4 sm:p-5 text-gray-700 rounded-lg">

      <!-- Title -->
      <div class="font-bold text-lg mb-2">
        Dashboard
      </div>

      <div class="text-sm font-medium mb-3">
        My Courses
      </div>

      <!-- Course List -->
      <div class="space-y-2">

        <button
          class="w-full
                 bg-blue-300
                 px-3 py-2
                 rounded
                 text-left text-sm
                 break-words
                 hover:text-white hover:bg-blue-700
                 transition duration-200"
        >
          ABC-1019 – Introduction to ABC
        </button>

        <button
          class="w-full
                 bg-blue-300
                 px-3 py-2
                 rounded
                 text-left text-sm
                 break-words
                 hover:text-white hover:bg-blue-700
                 transition duration-200"
        >
          EEI-1909 – Introduction to Java
        </button>

        <button
          class="w-full
                 bg-blue-300
                 px-3 py-2
                 rounded
                 text-left text-sm
                 break-words
                 hover:text-white hover:bg-blue-700
                 transition duration-200"
        >
          AMD-5680 – Introduction to Python
        </button>

        <button
          class="w-full
                 bg-blue-300
                 px-3 py-2
                 rounded
                 text-left text-sm
                 break-words
                 hover:text-white hover:bg-blue-700
                 transition duration-200"
        >
          DDK-0097 – Mathematical Operations
        </button>

      </div>
    </div>

  </aside>
</template>

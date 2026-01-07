<template>
  <div class="bg-white shadow-md rounded-lg p-4 w-full flex flex-col sm:flex-row items-center gap-4 hover:shadow-lg transition-shadow">
    <!-- Course Image -->
    <img :src="course.image" alt="Course Image" class="w-full sm:w-32 h-24 object-cover rounded-lg" />

    <!-- Course Details -->
    <div class="flex-1 w-full">
      <h3 class="font-semibold text-lg mb-1">{{ course.name }}</h3>
      <p class="text-sm text-gray-500 mb-2">Course ID: {{ course.id }}</p>

      <!-- Progress Bar -->
      <div class="w-full bg-gray-200 h-3 rounded-full">
        <div class="bg-blue-500 h-3 rounded-full" :style="{ width: course.progress + '%' }"></div>
      </div>
      <p class="text-sm mt-1 text-gray-600">{{ course.progress }}% completed</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  course: {
    type: Object,
    required: true
  }
})
</script>

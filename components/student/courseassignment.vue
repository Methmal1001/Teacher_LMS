<template>
  <div class="p-6 space-y-4 bg-gray-50 rounded-lg shadow-md border border-gray-200">
    
    <!-- Course Description Card -->
    <div class="bg-white p-4 rounded-xl shadow-sm border-l-4 border-blue-500 hover:shadow-md transition">
      <p class="text-gray-700 text-base leading-relaxed">
        <span class="font-bold">Assignments</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, culpa. 
        Ullam aut, provident accusantium voluptatibus nam vel? Maiores quidem tempora sunt, 
        odit nulla error beatae iusto autem quasi illum vero!
      </p>
    </div>

    <!-- Course Info -->
    <div class="bg-blue-50 border border-blue-200 rounded-lg p-3 flex justify-between items-center">
      <span class="text-blue-700 font-semibold text-lg">{{ coursecode }}</span>
      <span class="text-blue-900 font-medium text-lg">{{ coursename }}</span>
    </div>

  </div>
</template>

<script>
export default {
  props: ['coursecode','coursename']
}
</script>

<style scoped>
/* Optional: Smooth hover for description card */
div:hover {
  transition: all 0.3s ease;
}
</style>

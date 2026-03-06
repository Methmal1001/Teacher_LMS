<template>
  <div
    class="bg-white rounded-2xl shadow-md p-3 flex flex-col items-center justify-center hover:shadow-xl transition cursor-pointer"
    @click="$emit('click')"
  >
    <div :class="`${iconBg} p-4 rounded-full mb-4`">
      <svg
        class="w-8 h-8"
        :class="iconColor"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" :d="iconSvg" />
      </svg>
    </div>
    <h2 class="text-lg font-semibold text-gray-800">{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps({
  iconBg: { type: String, default: 'bg-gray-100' },
  iconColor: { type: String, default: 'text-gray-600' },
  iconSvg: { type: String, required: true },
  title: { type: String, required: true },
})
</script>

<style scoped>
/* Smooth hover effect */
div:hover {
  transform: scale(1.02);
  transition: transform 0.2s ease;
}
</style>

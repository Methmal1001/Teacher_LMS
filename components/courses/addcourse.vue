<template>
  <transition name="modal" appear>
    <div
      v-if="show"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-3 sm:px-6"
      @click.self="closeModal"
    >
      <!-- Modal Box -->
      <div
        class="bg-white rounded-3xl shadow-2xl w-full max-w-lg sm:max-w-xl lg:max-w-3xl overflow-hidden"
      >
        <!-- Header -->
        <div
          class="px-6 py-5 border-b bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50"
        >
          <div class="flex items-center justify-between">
            <div>
              <h2 class="text-xl sm:text-2xl font-bold text-gray-800">
                Add New Course
              </h2>
              <p class="text-sm text-gray-500 mt-1">
                Fill course information carefully
              </p>
            </div>

            <button
              @click="closeModal"
              class="p-2 rounded-full hover:bg-white/70 transition"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        <!-- Form -->
        <form @submit.prevent="handleSubmit" class="p-6 sm:p-8 space-y-7">
          <!-- Code & Name -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                Course Code *
              </label>
              <input
                v-model.trim="form.course_code"
                type="text"
                required
                placeholder="CS101"
                class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                Course Name *
              </label>
              <input
                v-model.trim="form.name"
                type="text"
                required
                placeholder="Introduction to Web Development"
                class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <!-- Grade -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">
              Grade
            </label>
            <select
              v-model="form.grade"
              class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option value="">Select grade</option>
              <option v-for="g in grades" :key="g" :value="g">
                {{ g }}
              </option>
            </select>
          </div>

          <!-- Description -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">
              Course Description
            </label>
            <textarea
              v-model.trim="form.description"
              rows="4"
              placeholder="Brief description..."
              class="w-full px-4 py-2.5 border rounded-xl resize-y focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <!-- Image Upload -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">
              Course Image
            </label>

            <div class="flex flex-col sm:flex-row gap-5">
              <img
                v-if="imagePreview"
                :src="imagePreview"
                alt="Preview"
                class="w-full sm:w-40 h-40 object-cover rounded-xl border"
              />

              <label
                class="flex-1 cursor-pointer border-2 border-dashed rounded-xl px-5 py-6 text-center hover:border-blue-500 hover:bg-blue-50 transition"
              >
                <input
                  type="file"
                  accept="image/*"
                  class="hidden"
                  @change="handleImageChange"
                />
                <p class="text-sm text-gray-600">
                  <span class="text-blue-600 font-medium">Upload image</span>
                </p>
                <p class="text-xs text-gray-400 mt-1">
                  PNG / JPG (max 5MB)
                </p>
              </label>
            </div>
          </div>

          <!-- Checkbox -->
          <div class="flex gap-3 items-start bg-gray-50 p-4 rounded-xl border">
            <input
              type="checkbox"
              v-model="form.enable_progress_bar"
              class="mt-1 w-5 h-5 text-blue-600 rounded"
            />
            <p class="text-sm text-gray-700">
              Enable subscription / progress tracking bar
            </p>
          </div>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t">
            <button
              type="button"
              @click="closeModal"
              class="px-6 py-2.5 rounded-xl border hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              class="px-6 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'

defineProps({ show: Boolean })
const emit = defineEmits(['close', 'add'])

const grades = ['Grade 1','Grade 2','Grade 3','Grade 4','Grade 5','Grade 6']

const form = ref({
  course_code: '',
  name: '',
  description: '',
  grade: '',
  enable_progress_bar: false
})

const imagePreview = ref(null)
let imageFile = null

function handleImageChange(e) {
  const file = e.target.files?.[0]
  if (!file || file.size > 5 * 1024 * 1024) return
  imageFile = file
  imagePreview.value = URL.createObjectURL(file)
}

function closeModal() {
  emit('close')
}

function handleSubmit() {
  emit('add', {
    ...form.value,
    image: imageFile
  })
  closeModal()
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>

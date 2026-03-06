<template>
  <transition name="modal" appear>
    <div>
      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="p-6 sm:p-8 space-y-7">
        <!-- Course -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label for="type" class="block text-sm font-medium text-gray-700 mb-1">Course</label>
            <input v-model.trim="form.name" type="text" required placeholder="Introduction to Web Development"
              class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
          </div>
          <!-- Grade -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">
              Grade
            </label>
            <select v-model="form.grade"
              class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="">Select grade</option>
              <Dropdown :selections="grades" />
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">
              Lecturer
            </label>
            <select
              class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option value="">Select lecturer</option>
              <Dropdown :selections="lecturers" />
            </select>
          </div>
        </div>



        <!-- Description -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">
            Course Description
          </label>
          <textarea v-model.trim="form.description" rows="4" placeholder="Brief description..."
            class="w-full px-4 py-2.5 border rounded-xl resize-y focus:ring-2 focus:ring-blue-500 focus:outline-none" />
        </div>

        <!-- Image Upload -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">
            Course Image
          </label>

          <div class="flex flex-col sm:flex-row gap-5">
            <img v-if="imagePreview" :src="imagePreview" alt="Preview"
              class="w-full sm:w-40 h-40 object-cover rounded-xl border" />

            <label
              class="flex-1 cursor-pointer border-2 border-dashed rounded-xl px-5 py-6 text-center hover:border-blue-500 hover:bg-blue-50 transition">
              <input type="file" accept="image/*" class="hidden" @change="handleImageChange" />
              <p class="text-sm text-gray-600">
                <span class="text-blue-600 font-medium">Upload image</span>
              </p>
              <p class="text-xs text-gray-400 mt-1">
                PNG / JPG (max 5MB)
              </p>
            </label>
          </div>
        </div>

        <!-- Modules -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1.5">
            Modules
          </label>
          <div class=" grid grid-cols-1 md:grid-cols-3 gap-4 border border-1 p-2 mb-1">
            <div class="col-md-4">
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                Module Name
              </label>
              <input v-model.trim="form.name" type="text" required placeholder="Introduction to Web Development"
                class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div class="col-md-4">
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                Description
              </label>
              <input v-model.trim="form.name" type="text" required placeholder="Introduction to Web Development"
                class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div class="col-md-4">
              <label class=" text-sm font-medium text-gray-700 mb-1.5">
                Term
              </label>
              <select v-model="form.grade"
                class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option value="">Select grade</option>
                <Dropdown :selections="terms" />
              </select>
            </div>
          </div>
          <div class=" grid grid-cols-1 md:grid-cols-3 gap-4 border border-1 p-2 mb-1">
            <div class="col-md-4">
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                Module Name
              </label>
              <input v-model.trim="form.name" type="text" required placeholder="Introduction to Web Development"
                class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div class="col-md-4">
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                Description
              </label>
              <input v-model.trim="form.name" type="text" required placeholder="Introduction to Web Development"
                class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
            <div class="col-md-4">
              <label class=" text-sm font-medium text-gray-700 mb-1.5">
                Term
              </label>
              <select v-model="form.grade"
                class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option value="">Select grade</option>
                <Dropdown :selections="terms" />
              </select>
            </div>
          </div>
        </div>

        <!-- Checkbox -->
        <div class="flex gap-3 items-start bg-gray-50 p-4 rounded-xl border">
          <input type="checkbox" v-model="form.enable_progress_bar" class="mt-1 w-5 h-5 text-blue-600 rounded" />
          <p class="text-sm text-gray-700">
            Enable subscription / progress tracking bar
          </p>
        </div>

        <!-- Actions -->
        <div class="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t">
          <button type="button" @click="closeModal" class="px-6 py-2.5 rounded-xl border hover:bg-gray-50">
            Cancel
          </button>

          <button type="submit" class="px-6 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
            Add Course
          </button>
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
import Dropdown from '~/components/custom/Dropdown.vue'

export default {
  components: {
    Dropdown,
  },

  props: {

  },

  data() {
    return {
      grades: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'],
      terms: ['1st Term', '2nd Term', '3rd Term'],
      lecturers: ['Janitha Pushpakumara', 'Gayathri Perera', 'Mangali Cooray'],
      form: {
        course_code: '',
        name: '',
        description: '',
        grade: '',
        enable_progress_bar: false
      },
      imagePreview: null,
      imageFile: null,

    }
  },

  methods: {
    handleImageChange(e) {
      const file = e.target.files?.[0]
      if (!file || file.size > 5 * 1024 * 1024) return
      imageFile = file
      imagePreview.value = URL.createObjectURL(file)
    },
    closeModal() {
      emit('close')
    },
    handleSubmit() {
      emit('add', {
        ...form.value,
        image: imageFile
      })
      closeModal()
    }
  }
}

</script>

<style scoped>
/* .modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
} */
</style>

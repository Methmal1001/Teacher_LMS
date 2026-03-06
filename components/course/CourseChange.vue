<template>
  <section>
    <div>
      <!-- Form -->
        <form class="p-6 sm:p-8 space-y-7">
          <!-- Code & Name -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                Course Name *
              </label>
              <input v-model.trim="form.name" type="text" required placeholder="Introduction to Web Development"
                class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
            </div>
          </div>

          <!-- Grade -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1.5">
              Grade
            </label>
            <select v-model="form.grade"
              class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
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
            <button type="submit" class="px-3 py-1 rounded-xl bg-green-600 text-sm text-white hover:bg-green-700 mb-2">
              Add new +
            </button>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 border border-1 p-2 mb-1">
              <div class="col-md-4">
                <label class="block text-sm font-medium text-gray-700 mb-1.5">
                  Module Name *
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
                  <option v-for="g in terms" :key="g" :value="g">
                    {{ g }}
                  </option>
                </select>
              </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 border border-1 p-2 mb-1">
              <div class="col-md-4">
                <label class="block text-sm font-medium text-gray-700 mb-1.5">
                  Module Name *
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
                  <option v-for="g in terms" :key="g" :value="g">
                    {{ g }}
                  </option>
                </select>
              </div>
            </div>
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
  </section>
</template>

<script>
export default {
  props: {
    
  },

  data() {
    return {
      changeCourse: { ...this.course },
      form:{
        course_code: '',
        name: '',
        description: '',
        grade: '',
        enable_progress_bar: false
      },
      grades: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'],
      terms: ['1st Term', '2nd Term', '3rd Term']
    }
  },

  async created(){
    
  },
  
  methods:{
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

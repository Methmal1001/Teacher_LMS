<template>
  <!-- Overlay -->
  <div
    class="fixed inset-0 bg-black/40 z-50 flex justify-center items-start sm:items-center overflow-y-auto"
    @click.self="$emit('close')"
  >
    <!-- Modal Content -->
    <div
      class="bg-white rounded-xl shadow-xl w-full sm:max-w-3xl mx-4 my-8 sm:my-16 p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
    >
      <!-- Header -->
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl sm:text-2xl font-bold">Edit Course</h2>
        <button
          class="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          @click="$emit('close')"
        >
          &times;
        </button>
      </div>

      <!-- Empty State -->
      <div v-if="!course.course_code" class="bg-gray-50 rounded-xl p-10 text-center">
        <h3 class="text-lg font-medium text-gray-800 mb-4">Course not found</h3>
        <button
          @click="$emit('close')"
          class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Close
        </button>
      </div>

      <!-- Form -->
      <form v-else class="space-y-4">
        <!-- Course Code -->
        <div>
          <label class="form-label">Course Code</label>
          <input v-model="course.course_code" readonly class="form-input bg-gray-100" />
        </div>

        <!-- Course Name -->
        <div>
          <label class="form-label">Course Name *</label>
          <input v-model="course.name" class="form-input" placeholder="Enter course name" />
        </div>

        <!-- Course Description -->
        <div>
          <label class="form-label">Course Description</label>
          <textarea v-model="course.description" rows="3" class="form-input" placeholder="Optional description"></textarea>
        </div>

        <!-- Grade -->
        <div>
          <label class="form-label">Grade *</label>
          <select v-model="course.grade" class="form-input">
            <option disabled value="">Select grade</option>
            <option v-for="n in 12" :key="n" :value="n">Grade {{ n }}</option>
          </select>
        </div>

        <!-- Course Image -->
        <div>
          <label class="form-label">Course Image</label>
          <input type="file" accept="image/*" @change="handleImage" />
          <img
            v-if="previewImage"
            :src="previewImage"
            class="mt-2 w-40 h-24 object-cover rounded-lg border"
          />
        </div>

        <!-- Uploads -->
        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <label class="form-label">Assignment</label>
            <input type="file" @change="e => handleFile(e, 'assignment')" />
          </div>
          <div>
            <label class="form-label">Notes</label>
            <input type="file" @change="e => handleFile(e, 'notes')" />
          </div>
          <div>
            <label class="form-label">Paper</label>
            <input type="file" @change="e => handleFile(e, 'paper')" />
          </div>
          <div>
            <label class="form-label">Video</label>
            <input type="file" accept="video/*" @change="e => handleFile(e, 'video')" />
          </div>
        </div>

        <!-- Due Date -->
        <div>
          <label class="form-label">Course Due Date</label>
          <input type="date" v-model="course.dueDate" class="form-input" />
        </div>

        <!-- Subscription -->
        <div class="flex items-center gap-2 mt-2">
          <input type="checkbox" v-model="course.enableSubscription" id="subscr" class="w-4 h-4" />
          <label for="subscr" class="text-sm text-gray-700">Enable subscription for this course</label>
        </div>

        <!-- Actions -->
        <div class="flex flex-col sm:flex-row justify-end gap-4 pt-4">
          <button
            type="button"
            @click="$emit('close')"
            class="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Cancel
          </button>

          <button
            type="button"
            @click="saveCourse"
            :disabled="saving"
            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-60"
          >
            {{ saving ? 'Saving...' : 'Save Changes' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    coursecode: { type: String, required: true },
    name: { type: String, required: true }
  },
  data() {
    return {
      saving: false,
      previewImage: null,
      files: {},
      course: {
        course_code: '',
        name: '',
        description: '',
        grade: '',
        dueDate: '',
        enableSubscription: false
      }
    }
  },
  mounted() {
    this.course.course_code = this.coursecode
    this.course.name = this.name
  },
  watch: {
    coursecode(val) { this.course.course_code = val },
    name(val) { this.course.name = val }
  },
  methods: {
    handleImage(e) {
      const file = e.target.files?.[0]
      if (!file) return
      this.previewImage = URL.createObjectURL(file)
      this.files.image = file
    },
    handleFile(e, type) {
      const file = e.target.files?.[0]
      if (file) this.files[type] = file
    },
    async saveCourse() {
      if (!this.course.name || !this.course.grade) {
        alert('Course name and grade are required')
        return
      }

      this.saving = true

      const formData = new FormData()
      Object.entries(this.course).forEach(([k, v]) => formData.append(k, v ?? ''))
      Object.entries(this.files).forEach(([k, v]) => formData.append(k, v))

      // Demo delay
      await new Promise(r => setTimeout(r, 1200))

      this.saving = false
      alert('Course updated successfully!')
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.form-label {
  @apply block text-sm font-medium text-gray-700 mb-1;
}
.form-input {
  @apply w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400;
}
</style>

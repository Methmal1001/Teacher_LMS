<template>
  <div
    class="fixed inset-0 bg-black/40 z-50 flex items-start sm:items-center justify-center overflow-y-auto p-4"
    @click.self="$emit('close')"
  >
    <div
      class="bg-white p-6 sm:p-10 rounded-xl shadow-xl w-full max-w-5xl h-[90vh] sm:h-[80vh] overflow-y-auto"
    >
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl sm:text-2xl font-bold">Edit Note</h2>
        <button
          class="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          @click="$emit('close')"
        >
          &times;
        </button>
      </div>

      <form class="space-y-6">
        <!-- Note Name -->
        <div>
          <label class="form-label">Note Name</label>
          <input
            type="text"
            v-model="noteNameLocal"
            class="form-input"
            placeholder="Enter note name"
          />
        </div>

        <!-- File Upload -->
        <div class="flex flex-col sm:flex-row gap-6 items-start">
          <!-- Placeholder Left -->
          <div class="flex-1 flex justify-center items-center bg-gray-100 p-6 rounded-lg">
            <div class="text-gray-400 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
              </svg>
              <p class="text-sm">Existing note info</p>
            </div>
          </div>

          <!-- Upload File Right -->
          <div
            class="flex-1 bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center border border-dashed border-gray-300"
          >
            <label
              for="file-upload"
              class="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
            >
              Upload File
            </label>
            <input
              id="file-upload"
              type="file"
              class="hidden"
              @change="handleFileUpload"
            />

            <!-- Preview uploaded file -->
            <div v-if="uploadedFileName" class="mt-4 w-full flex justify-center">
              <p class="text-sm text-gray-700 truncate max-w-full">{{ uploadedFileName }}</p>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex flex-col sm:flex-row justify-end gap-3 mt-6">
          <button
            type="button"
            class="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            @click="$emit('close')"
          >
            Cancel
          </button>
          <button
            type="button"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            @click="saveNote"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    noteId: { type: Number, required: true },
    noteName: { type: String, required: true },
  },

  data() {
    return {
      noteNameLocal: this.noteName,
      uploadedFile: null,
      uploadedFileName: '',
    }
  },

  watch: {
    noteName(newVal) {
      this.noteNameLocal = newVal
    },
  },

  methods: {
    handleFileUpload(e) {
      const file = e.target.files?.[0]
      if (!file) return
      this.uploadedFile = file
      this.uploadedFileName = file.name
    },

    saveNote() {
      this.$emit('update', {
        id: this.noteId,
        name: this.noteNameLocal,
        file: this.uploadedFile
      })
      this.$emit('close')
    },
  }
}
</script>

<style scoped>
.form-label { @apply block text-sm font-medium text-gray-700 mb-1; }
.form-input { @apply w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400; }
</style>

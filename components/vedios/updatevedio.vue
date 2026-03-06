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
        <h2 class="text-xl sm:text-2xl font-bold">Edit Video</h2>
        <button
          class="text-gray-500 hover:text-gray-700 text-2xl font-bold"
          @click="$emit('close')"
        >
          &times;
        </button>
      </div>

      <form class="space-y-6">
        <!-- Video Name -->
        <div>
          <label class="form-label">Video Name</label>
          <input
            type="text"
            v-model="videoNameLocal"
            class="form-input"
            placeholder="Enter video name"
          />
        </div>

        <!-- Video Player + Upload -->
        <div class="flex flex-col sm:flex-row gap-6 items-start">
          <!-- Existing Video -->
          <div class="flex-1 bg-gray-100 p-2 rounded-lg flex justify-center items-center">
            <!-- Direct video file -->
            <video
              v-if="existingVideo && isVideoFile(existingVideo)"
              :src="existingVideo"
              controls
              class="w-full max-w-md h-auto rounded-lg"
            ></video>

            <!-- YouTube link -->
            <iframe
              v-else-if="existingVideo && !isVideoFile(existingVideo)"
              :src="getYoutubeEmbed(existingVideo)"
              frameborder="0"
              allowfullscreen
              class="w-full max-w-md h-64 sm:h-80 rounded-lg"
            ></iframe>

            <!-- No video -->
            <div v-else class="text-gray-400 text-center">
              <p class="text-sm">No existing video</p>
            </div>
          </div>

          <!-- Upload New Video -->
          <div
            class="flex-1 bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center border border-dashed border-gray-300"
          >
            <label
              for="video-upload"
              class="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
            >
              Upload Video
            </label>
            <input
              id="video-upload"
              type="file"
              accept="video/*"
              class="hidden"
              @change="handleVideoUpload"
            />

            <!-- Preview uploaded video name -->
            <div v-if="uploadedVideoName" class="mt-4 w-full flex justify-center">
              <p class="text-sm text-gray-700 truncate max-w-full">{{ uploadedVideoName }}</p>
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
            @click="saveVideo"
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
    videoId: { type: Number, required: true },
    videoName: { type: String, required: true },
    existingVideo: { type: String, default: '' }, // direct video or YouTube URL
  },

  data() {
    return {
      videoNameLocal: this.videoName,
      uploadedVideo: null,
      uploadedVideoName: '',
    }
  },

  watch: {
    videoName(newVal) {
      this.videoNameLocal = newVal
    },
  },

  methods: {
    handleVideoUpload(e) {
      const file = e.target.files?.[0]
      if (!file) return
      this.uploadedVideo = file
      this.uploadedVideoName = file.name
    },

    isVideoFile(url) {
      // Check if URL ends with a direct video file extension
      return /\.(mp4|webm|ogg)$/i.test(url)
    },

    getYoutubeEmbed(url) {
      // Convert standard YouTube URLs to embed URLs
      const match = url.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
      )
      return match ? `https://www.youtube.com/embed/${match[1]}` : ''
    },

    saveVideo() {
      this.$emit('update', {
        id: this.videoId,
        name: this.videoNameLocal,
        video: this.uploadedVideo || this.existingVideo
      })
      this.$emit('close')
    },
  },
}
</script>

<style scoped>
.form-label { @apply block text-sm font-medium text-gray-700 mb-1; }
.form-input { @apply w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400; }
</style>

<template>
    <section>
        <transition name="modal" appear>
            <div class="p-6 sm:p-8 space-y-7">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <!-- Submitted date -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Submitted Date & Time
                        </label>
                        <input type="text" disabled placeholder="10/02/2026 08:30AM"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <!-- Submit Score -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Submit Score
                        </label>
                        <input type="text" disabled placeholder="82%"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <!-- Status -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Status
                        </label>
                        <span
                            class="px-2.5 py-1 font-semibold text-green-700 bg-green-50 rounded-full ring-1 ring-green-600/20">Pass</span>
                        <span
                            class="px-2.5 py-1 font-semibold text-red-700 bg-red-50 rounded-full ring-1 ring-red-600/20">Fail</span>
                    </div>
                    <!-- Answer Paper (Optional, Single File) -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">
                            Submitted Answers
                        </label>
                        <!-- <input type="file" @change="handleAnswerFile"
                        class="w-full border border-gray-300 rounded-lg px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <div v-if="answerFileName" class="flex justify-between items-center mt-1">
                        <span class="text-gray-500 text-sm truncate">Answer</span>
                        <button type="button" @click="removeAnswerFile"
                            class="text-red-500 ml-2 hover:text-red-700 font-bold">
                            ✕
                        </button>
                    </div> -->
                        <input type="file" @change="handleAnswerFile"
                            class="w-full border border-gray-300 rounded-lg px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                            accept="image/*,.pdf,.doc,.docx" />

                        <!-- Preview / Actions area -->
                        <div v-if="answerFile" class="mt-3 border border-gray-200 rounded-lg p-3 bg-gray-50">
                            <div class="flex justify-between items-center mb-2">
                                <span class="text-sm font-medium text-gray-700 truncate max-w-[70%]">
                                    {{ answerFile.name }}
                                </span>
                                <div class="flex gap-2">
                                    <button v-if="canPreview" @click="openPreview"
                                        class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                                        View
                                    </button>
                                    <button @click="downloadFile"
                                        class="text-green-600 hover:text-green-800 text-sm font-medium">
                                        Download
                                    </button>
                                    <button @click="removeAnswerFile"
                                        class="text-red-500 hover:text-red-700 text-sm font-medium">
                                        Remove
                                    </button>
                                </div>
                            </div>

                            <!-- Image preview -->
                            <img v-if="isImage && previewUrl" :src="previewUrl"
                                class="max-h-64 object-contain mx-auto rounded border bg-white" alt="Preview" />

                            <!-- PDF / other preview fallback -->
                            <div v-else-if="canPreview && previewUrl" class="text-center py-4">
                                <p class="text-sm text-gray-600 mb-2">Preview in new tab or embedded below
                                    (browser support varies)</p>
                                <iframe v-if="isPDF" :src="previewUrl" class="w-full h-96 border rounded"
                                    title="PDF Preview"></iframe>
                            </div>

                            <p v-else class="text-sm text-gray-500 text-center py-4">
                                Preview not available for this file type. Use Download.
                            </p>
                        </div>
                    </div>
                    <!-- Score -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Score
                        </label>
                        <span class="font-medium">82%</span>
                    </div>
                </div>

                <!-- Actions -->
                <div class="flex justify-end gap-4 mt-6">
                    <button @click="$emit('close')"
                        class="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition">
                        Cancel
                    </button>

                    <button @click="submitAssignment"
                        class="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                        Submit Score
                    </button>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>

definePageMeta({
    layout: 'adminlayout',
    title: 'Admin Dashboard'
});

export default {
    props: {
    },

    data() {
        return {
            answerFile: null,
            previewUrl: null,
            fileType: '',
            fileName: '',
            isImage: '',
            isPDF: '',
            canPreview: '',
        }
    },

    computed() {
        this.fileType = computed(() => answerFile.value?.type || '');
        this.fileName = computed(() => answerFile.value?.name || '');

        this.isImage = computed(() => fileType.value.startsWith('image/'))
        this.isPDF = computed(() => fileType.value === 'application/pdf')

        this.canPreview = computed(() => isImage.value || isPDF.value)
    },

    methods: {
        closeModal() {
            this.$emit('close');
        },

        handleAnswerFile(e) {
            const file = e.target.files?.[0]
            if (!file) return

            answerFile.value = file
            previewUrl.value = URL.createObjectURL(file)

            // Optional: revoke old URL if changing files multiple times
            // if (oldUrl) URL.revokeObjectURL(oldUrl)
        },

        removeAnswerFile() {
            if (previewUrl.value) {
                URL.revokeObjectURL(previewUrl.value)
            }
            answerFile.value = null
            previewUrl.value = null
        },

        openPreview() {
            if (previewUrl.value) {
                window.open(previewUrl.value, '_blank')
            }
        },

        downloadFile() {
            if (previewUrl.value && answerFile.value) {
                const a = document.createElement('a')
                a.href = previewUrl.value
                a.download = answerFile.value.name
                a.click()
            }
        }
    }
}
</script>
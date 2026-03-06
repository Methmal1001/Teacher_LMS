<template>
    <transition name="modal" appear>
        <div class="p-6 sm:p-8 space-y-7">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <!-- Lecturer name -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Lecturer
                    </label>
                    <select
                        class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                        <option value="" disabled>Select lecturer</option>
                        <option v-for="g in lecturers" :key="g" :value="g">
                            {{ g }}
                        </option>
                    </select>
                </div>
                <!-- Grade -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Grade
                    </label>
                    <select
                        class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                        <option value="" disabled>Select grade</option>
                        <option v-for="g in grades" :key="g" :value="g">
                            {{ g }}
                        </option>
                    </select>
                </div>
                <!-- Course -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Course
                    </label>
                    <select
                        class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                        <option value="" disabled>Select grade</option>
                        <option v-for="g in courses" :key="g" :value="g">
                            {{ g }}
                        </option>
                    </select>
                </div>
                <!-- Module -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Module
                    </label>
                    <select
                        class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                        <option value="" disabled>Select grade</option>
                        <option v-for="g in modules" :key="g" :value="g">
                            {{ g }}
                        </option>
                    </select>
                </div>
                <!-- Assignment Name -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Title
                    </label>
                    <input v-model="assignmentNameLocal" type="text" placeholder="Enter assignment name"
                        class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
                <!-- Description -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Assignment Description
                    </label>
                    <textarea rows="4" placeholder="Brief description..."
                        class="w-full px-4 py-2.5 border rounded-xl resize-y focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
                <!-- Assignment Type -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Assignment Type
                    </label>
                    <select
                        class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                        <option value="">Select type</option>
                        <option v-for="g in types" :key="g" :value="g">
                            {{ g }}
                        </option>
                    </select>
                </div>
                <!-- Passing Score -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Passing Score
                    </label>
                    <input type="text" placeholder="Enter passing score"
                        class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
                <!--  Duration minutes -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Duration minutes
                    </label>
                    <input type="text" placeholder="Enter duration minutes"
                        class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>
                <!-- Due Date -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Assignment Due Date <span class="text-red-500">*</span>
                    </label>
                    <input type="date" v-model="dueDate"
                        class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <!-- Assignment Paper (Mandatory, Multiple) -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Assignment Paper <span class="text-red-500">*</span>
                    </label>
                    <input type="file" multiple @change="handleAssignmentFiles"
                        class="w-full border border-gray-300 rounded-lg px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <ul v-if="assignmentFiles.length"
                        class="text-gray-500 text-sm mt-2 list-disc pl-5 max-h-32 overflow-y-auto">
                        <li v-for="(file, index) in assignmentFiles" :key="index"
                            class="flex justify-between items-center">
                            <span class="truncate">test</span>
                            <button type="button" @click="removeAssignmentFile(index)"
                                class="text-red-500 ml-2 hover:text-red-700 font-bold">
                                ✕
                            </button>
                        </li>
                    </ul>
                </div>

                <!-- Answer Paper (Optional, Single File) -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">
                        Answer Paper (Optional)
                    </label>
                    <input type="file" @change="handleAnswerFile"
                        class="w-full border border-gray-300 rounded-lg px-3 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <div v-if="answerFileName" class="flex justify-between items-center mt-1">
                        <span class="text-gray-500 text-sm truncate">Answer</span>
                        <button type="button" @click="removeAnswerFile"
                            class="text-red-500 ml-2 hover:text-red-700 font-bold">
                            ✕
                        </button>
                    </div>
                </div>
                <!-- Is Published -->
                <div class="flex items-center gap-2 mt-2">
                    <input type="checkbox" id="subscr" class="w-4 h-4" />
                    <label for="subscr" class="text-sm text-gray-700">Want to publish the assignment?</label>
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
                    Upload Assignment
                </button>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            assignmentFiles: [], // multiple files,
            lecturers: ['Janitha Pushpakumara', 'Indrani Perera'],
            grades: [6, 7, 8, 9, 10],
            courses: ['Mathmeatics', 'ICT', 'Sinhala'],
            modules: ['Binary', 'Logic Gates'],
            types: ['MCQ', 'Essay'],
            answerFile: null,
            answerFileName: '',
            dueDate: ''
        }
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },

        // Handle multiple assignment files
        handleAssignmentFiles(event) {
            const files = Array.from(event.target.files)
            if (files.length) {
                this.assignmentFiles = [...this.assignmentFiles, ...files] // append to existing
            }
        },

        // Remove a specific assignment file
        removeAssignmentFile(index) {
            this.assignmentFiles.splice(index, 1)
        },

        // Handle single answer file
        handleAnswerFile(event) {
            const file = event.target.files[0]
            if (file) {
                this.answerFile = file
                this.answerFileName = file.name
            }
        },

        // Remove answer file
        removeAnswerFile() {
            this.answerFile = null
            this.answerFileName = ''
        },

        // Submit assignments
        submitAssignment() {
            if (!this.assignmentFiles.length) {
                alert('Please upload at least one Assignment Paper.')
                return
            }
            if (!this.dueDate) {
                alert('Please select a due date.')
                return
            }

            const formData = new FormData()
            this.assignmentFiles.forEach(file => formData.append('assignmentFiles', file))
            if (this.answerFile) formData.append('answerFile', this.answerFile)
            formData.append('courseCode', this.coursecode)
            formData.append('courseName', this.name)
            formData.append('dueDate', this.dueDate)

            console.log('FormData ready for upload:', formData)
            alert('Assignment submitted successfully!')

            // Reset
            this.assignmentFiles = []
            this.answerFile = null
            this.answerFileName = ''
            this.dueDate = ''
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
input[type="file"]::-webkit-file-upload-button {
    cursor: pointer;
}

ul li button {
    cursor: pointer;
}
</style>

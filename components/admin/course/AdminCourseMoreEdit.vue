<template>
    <section>
        <!-- Overlay -->
        <transition name="modal" appear>
            <div>
                <!-- Form -->
                <form class="space-y-4">
                    <!-- Course Code -->
                    <!-- <div>
              <label class="form-label">Course Code</label>
              <input v-model="course.course_code" class="form-input bg-gray-100" disabled />
          </div> -->

                    <!-- Course Name -->
                    <!-- <div>
              <label class="form-label">Course Name</label>
              <input v-model="course.name" class="form-input" disabled />
          </div> -->

                    <!-- Assignments -->
                    <div class="bg-blue-100 px-5 py-4 rounded-xl space-y-4">
                        <h3 class="font-bold text-gray-800">Assignments</h3>

                        <div v-for="assignment in assignments" :key="assignment.id"
                            class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white rounded-xl p-4 shadow-sm">
                            <!-- Assignment Name -->
                            <div class="text-left font-medium text-gray-800">{{ assignment.name }}</div>

                            <!-- Actions -->
                            <div class="flex flex-wrap items-center gap-3">
                                <!-- EDIT BUTTON opens modal -->
                                <button
                                    class="px-3 py-1.5 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                                    @click.prevent="openUpdateAssignmentModal(assignment)">
                                    Edit
                                </button>

                                <button
                                    class="px-3 py-1.5 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
                                    Delete
                                </button>

                                <div class="flex items-center gap-2">
                                    <span class="text-sm text-gray-500">Due</span>
                                    <input type="date" v-model="assignment.dueDate"
                                        class="px-2 py-1 text-sm border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Notes -->
                    <div class="bg-gray-200 px-5 py-4 rounded-xl space-y-4">
                        <h3 class="font-bold text-gray-800">Notes</h3>

                        <div v-for="note in notes" :key="note.id"
                            class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white rounded-xl p-4 shadow-sm">
                            <!-- Notes Name -->
                            <div class="text-left font-medium text-gray-800">{{ note.name }}</div>

                            <!-- Actions -->
                            <div class="flex flex-wrap items-center gap-3">
                                <!-- EDIT BUTTON opens modal -->
                                <button
                                    class="px-3 py-1.5 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                                    @click.prevent="openUpdateNoteModal(note)">
                                    Edit
                                </button>

                                <button
                                    class="px-3 py-1.5 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Vedios -->
                    <div class="bg-orange-200 px-5 py-4 rounded-xl space-y-4">
                        <h3 class="font-bold text-gray-800">Vedios</h3>

                        <div v-for="vedio in vedios" :key="vedio.id"
                            class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white rounded-xl p-4 shadow-sm">
                            <!-- Vedios Name -->
                            <div class="text-left font-medium text-gray-800">{{ vedio.name }}</div>

                            <!-- Actions -->
                            <div class="flex flex-wrap items-center gap-3">
                                <!-- EDIT BUTTON opens modal -->
                                <button
                                    class="px-3 py-1.5 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                                    @click.prevent="openUpdateVedioModal(vedio)">
                                    Edit
                                </button>

                                <button
                                    class="px-3 py-1.5 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Papers -->
                    <div class="bg-green-200 px-5 py-4 rounded-xl space-y-4">
                        <h3 class="font-bold text-gray-800">Papers</h3>

                        <div v-for="paper in papers" :key="paper.id"
                            class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-white rounded-xl p-4 shadow-sm">
                            <!-- Papers Name -->
                            <div class="text-left font-medium text-gray-800">{{ paper.name }}</div>

                            <!-- Actions -->
                            <div class="flex flex-wrap items-center gap-3">
                                <!-- EDIT BUTTON opens modal -->
                                <button
                                    class="px-3 py-1.5 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                                    @click.prevent="openUpdatePaperModal(paper)">
                                    Edit
                                </button>

                                <button
                                    class="px-3 py-1.5 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Course Due Date -->
                    <div>
                        <label class="form-label">Course Due Date</label>
                        <input type="date" v-model="course.dueDate" class="form-input" />
                    </div>

                    <!-- Subscription -->
                    <div class="flex items-center gap-2 mt-2">
                        <input type="checkbox" v-model="course.enableSubscription" id="subscr" class="w-4 h-4" />
                        <label for="subscr" class="text-sm text-gray-700">Enable subscription for this course's
                            tasks</label>
                    </div>

                    <!-- Actions -->
                    <div class="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                        <button type="button" @click="$emit('close')"
                            class="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300">Cancel</button>
                        <button type="button" @click="saveCourse" :disabled="saving"
                            class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-60">
                            {{ saving ? 'Saving...' : 'Save Changes' }}
                        </button>
                    </div>
                </form>

                <!-- Modal for Editing Assignment -->
                <AssignmentUpdate v-if="selectedAssignmentForEdit" :assignment-id="selectedAssignmentForEdit.id"
                    :assignment-name="selectedAssignmentForEdit.name"
                    :assignment-due="selectedAssignmentForEdit.dueDate" @close="selectedAssignmentForEdit = null"
                    @update="updateAssignmentInList" />

                <!-- Modal for Editing Notes -->
                <UpdateNotes v-if="selectedNoteforEdit" :note-id="selectedNoteforEdit.id"
                    :note-name="selectedNoteforEdit.name" @close="selectedNoteforEdit = null"
                    @update="updateNoteInList" />

                <!-- Modal for Editing Vedios -->
                <UpdateVedios v-if="selectedVedioforEdit" :vedio-id="selectedVedioforEdit.id"
                    :vedio-name="selectedVedioforEdit.name" @close="selectedVedioforEdit = null"
                    @update="updateVedioInList" />

                <!-- Modal for Editing Papers -->
                <UpdatePapers v-if="selectedPaperforEdit" :paper-id="selectedPaperforEdit.id"
                    :paper-name="selectedPaperforEdit.name" @close="selectedPaperforEdit = null"
                    @update="updatePaperInList" />

            </div>
        </transition>
    </section>
</template>

<script>
import AssignmentUpdate from '~/components/assignment/AssignmentEdit.vue'
import UpdateNotes from '~/components/notes/updatenotes.vue'
import UpdateVedios from '~/components/vedios/updatevedio.vue'
import UpdatePapers from '~/components/papers/updatepapers.vue'

export default {
    components: {
        AssignmentUpdate,
        UpdateNotes,
        UpdateVedios,
        UpdatePapers,
    },

    props: {

    },

    data() {
        return {
            saving: false,
            previewImage: null,
            course: {
                course_code: 'C0001',
                name: 'Mathematics',
                description: 'Test',
                grade: '10',
                dueDate: '2026.05.21',
                enableSubscription: false,
            },
            // For assignments
            assignments: [
                { id: 1, name: 'Assignment-1.pdf', dueDate: '2026-01-20', description: 'First assignment' },
                { id: 2, name: 'Tutor Marked Assignment1.pdf', dueDate: '2026-01-25', description: 'Tutor marked assignment' },
            ],
            selectedAssignmentForEdit: null,

            // For Notes
            notes: [
                { id: 1, name: 'Lesson - 01 Introduction' },
                { id: 2, name: 'Lesson - 02 Installation' },
            ],
            selectedNoteforEdit: null,

            // For vedios
            vedios: [
                { id: 1, name: 'Lesson - 01 Introduction Vedio' },
                { id: 2, name: 'Lesson - 02 Installation Vedio' },
            ],
            selectedVedioforEdit: null,

            // For Papers
            papers: [
                { id: 1, name: '2022 A/L Past Paper' },
                { id: 2, name: '2023 A/L Past Paper' },
                { id: 2, name: '2024 A/L Past Paper' },
                { id: 2, name: '2025 A/L Past Paper' },
            ],
            selectedPaperforEdit: null,
        }
    },

    mounted() {

    },

    methods: {
        // Assignemnts
        openUpdateAssignmentModal(assignment) {
            this.selectedAssignmentForEdit = assignment
        },

        updateAssignmentInList(updated) {
            // Find the assignment in the list and update it
            const index = this.assignments.findIndex(a => a.id === updated.id)
            if (index !== -1) {
                this.assignments[index].name = updated.name
                this.assignments[index].dueDate = updated.dueDate
            }
        },

        // Notes
        openUpdateNoteModal(note) {
            this.selectedNoteforEdit = note
        },

        updateNoteInList(updated) {
            // Find the assignment in the list and update it
            const index = this.notes.findIndex(a => a.id === updated.id)
            if (index !== -1) {
                this.notes[index].name = updated.name
            }
        },

        // Vedios
        openUpdateVedioModal(vedio) {
            this.selectedVedioforEdit = vedio
        },

        updateVedioInList(updated) {
            // Find the assignment in the list and update it
            const index = this.vedios.findIndex(a => a.id === updated.id)
            if (index !== -1) {
                this.vedios[index].name = updated.name
            }
        },

        // Papers
        openUpdatePaperModal(paper) {
            this.selectedPaperforEdit = paper
        },

        updatePaperInList(updated) {
            const index = this.papers.findIndex(a => a.id === updated.id)
            if (index !== -1) {
                this.papers[index].name = updated.name
            }
        },

        async saveCourse() {
            this.saving = true
            await new Promise((r) => setTimeout(r, 1000))
            this.saving = false
            alert('Course updated successfully!')
            this.$emit('close')
        },
    },
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

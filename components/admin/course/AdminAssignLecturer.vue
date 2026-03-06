<template>
    <section>
        <transition name="modal" appear>
            <!-- Form -->
            <div>
                <form class="p-6 sm:p-8 space-y-7">
                    <!-- Course -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1.5">
                                Course *
                            </label>
                            <select
                                class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                <option value="">Select course</option>
                                <Dropdown :selections="courses" />
                            </select>
                        </div>
                        <!-- Grade -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1.5">
                                Grade
                            </label>
                            <select
                                class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                <option value="">Select grade</option>
                                <Dropdown :selections="grades" />
                            </select>
                        </div>
                        <!-- Lecturer -->
                        <div>
                            <label for="type" class="block text-sm font-medium text-gray-700 mb-1">Lecturer</label>
                            <select id="type"
                                class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                <option selected>Select lecturer</option>
                                <Dropdown :selections="lecturers" />
                            </select>
                        </div>
                    </div>

                    <!-- Actions -->
                    <div class="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t">
                        <button type="button" @click="closeModal"
                            class="px-6 py-2.5 rounded-xl border hover:bg-gray-50">
                            Cancel
                        </button>

                        <button type="submit" class="px-6 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </transition>
    </section>
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
            lecturers: ['Janitha Pushpakumara', 'Gayathri Perera', 'Mangali Cooray'],
            grades: ['Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6'],
            courses: ['Mathematics', 'ICT', 'Science'],
        }
    },

    async created() {

    },

    methods: {
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>

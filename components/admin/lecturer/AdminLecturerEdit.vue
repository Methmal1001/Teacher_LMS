<template>
    <section>
        <transition name="modal" appear>
            <div class="p-6 sm:p-8 space-y-7">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Full Name
                        </label>
                        <input type="text" required placeholder="Janitha Pushpakumara"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Registration Number
                        </label>
                        <input type="text" required placeholder="Reg0001"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            User Name
                        </label>
                        <input type="text" required placeholder="Reg0001"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Email
                        </label>
                        <input type="text" required placeholder="janitha@abc.com"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Contact No
                        </label>
                        <input type="text" required placeholder="0382230456"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Address
                        </label>
                        <input type="text" required placeholder="Buttala"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Province
                        </label>
                        <select
                            class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                            <option value="">Select grade</option>
                            <option v-for="g in provinces" :key="g" :value="g">
                                {{ g }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            District
                        </label>
                        <select
                            class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                            <option value="">Select grade</option>
                            <option v-for="g in districts" :key="g" :value="g">
                                {{ g }}
                            </option>
                        </select>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            School
                        </label>
                        <input type="text" required placeholder="janitha@abc.com"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Date Of Birth
                        </label>
                        <input type="date" required
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Whatsapp No
                        </label>
                        <input type="text" required placeholder="0767585568"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <!-- Image Upload -->
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Profile Image
                        </label>

                        <div class="flex flex-col sm:flex-row gap-5">
                            <!-- v-if="imagePreview" :src="imagePreview" -->
                            <img alt="Preview" class="w-full sm:w-40 h-40 object-cover rounded-xl border" />
                        </div>
                    </div>
                </div>
                <!-- Registered Courses -->
                <label class="block text-sm font-medium text-gray-700 mb-1.5">
                    Registered Courses
                </label>
                <div class="space-y-6 mt-4">
                    <div
                        v-for="(question, qIndex) in courses"
                        :key="qIndex"
                        class="border rounded-lg p-4 bg-gray-50 space-y-3"
                    >
                        <div class="flex justify-between items-center">
                        <h3 class="font-semibold text-gray-700">Course {{ qIndex + 1 }}</h3>
                        <button
                            class="text-red-500 hover:text-red-700 font-bold"
                            @click="removeCourse(qIndex)"
                        >
                            ✕
                        </button>
                        </div>

                        <!-- Course Text -->
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1.5">
                                    Grade
                                </label>
                                <select
                                    class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                    <option value="">Select grade</option>
                                    <option v-for="g in grades" :key="g" :value="g">
                                        {{ g }}
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-1.5">
                                    Subject
                                </label>
                                <select
                                    class="w-full px-4 py-2.5 border rounded-xl bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none">
                                    <option value="">Select subject</option>
                                    <option v-for="g in subjects" :key="g" :value="g">
                                        {{ g }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Add new course -->
                    <button
                        @click="addCourse"
                        class="px-2 py-1 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                    >
                        + Register Course
                    </button>
                </div>
                <!-- Footer with buttons – RIGHT ALIGNED -->
                <div class="flex justify-end gap-4 mt-6 mb-3">
                    <button
                        @click="$emit('close')"
                        class="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>

                    <button
                        @click="submitAssignment"
                        class="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
import Multipleselectdropdown from '~/components/custom/multipleselectdropdown.vue'

export default {
    props: {
    },

    components: {
        Multipleselectdropdown
    },

    data() {
        return {
            provinces: ["Western", "Northern"],
            districts: ["Colombo", 'Kalutara', 'Gampaha'],
            grades: ["6", '7', '8', '9'],
            subjects: [
                'Mathematics','Sinhala','ICT','Science'
            ],
            courses: []
        }
    },

    methods: {
        closeModal() {
            this.$emit('close');
        },

        addCourse() {
            this.courses.push({

            })
        },
        removeCourse(index) {
            this.courses.splice(index, 1)
        },
    }
}
</script>

<style scoped>
/* Smooth hover effect */
div.cursor-pointer:hover {
    transform: scale(1.01);
    transition: transform 0.2s ease;
}
</style>

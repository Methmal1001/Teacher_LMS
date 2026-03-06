<template>
    <section>
        <transition name="modal" appear>
            <div class="p-6 sm:p-8 space-y-7">

                <!-- Code & Name -->
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
                        <input type="text" required placeholder="Uva"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            District
                        </label>
                        <input type="text" required placeholder="Monaragala"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
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
                            Grade
                        </label>
                        <input type="text" required placeholder="10"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Date Of Birth
                        </label>
                        <input type="text" required placeholder="1995/02/10"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Guardian name
                        </label>
                        <input type="text" required placeholder="janitha@abc.com"
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
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                        Registered Courses
                    </label>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 border border-1 p-2 mb-1">
                        <ul>
                            <li>Grade 10 Maths</li>
                            <li>Grade 10 Sinhala</li>
                            <li>Grade 10 English</li>
                        </ul>
                    </div>
                </div>
            </div>
        </transition>
    </section>
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
            provinces: ["Western", "Northern"],
            districts: ["Colombo", 'Kalutara', 'Gampaha'],
            grades: ["6", '7', '8', '9'],
        }
    },

    methods: {
        closeModal() {
            this.$emit('close');
        }
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

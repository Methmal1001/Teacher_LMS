<template>
    <section>
        <transition name="modal" appear>
            <div class="p-6 sm:p-8 space-y-7">
                
            <!-- Code & Name -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Course Name *
                        </label>
                        <input type="text" required placeholder="Maths"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                    </div>
                </div>

                <!-- Grade -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                    Grade
                    </label>
                    <input type="text" required placeholder="Grade 10"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>

                <!-- Description -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                    Course Description
                    </label>
                    <textarea rows="4" placeholder="Brief description..."
                    class="w-full px-4 py-2.5 border rounded-xl resize-y focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                </div>

                <!-- Image Upload -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                    Course Image
                    </label>

                    <div class="flex flex-col sm:flex-row gap-5">
                        <!-- v-if="imagePreview" :src="imagePreview" -->
                    <img  alt="Preview"
                        class="w-full sm:w-40 h-40 object-cover rounded-xl border" />
                    </div>
                </div>

                <!-- Modules -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                    Modules
                    </label>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 border border-1 p-2 mb-1">
                        <div class="col-md-4">
                            <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Module Name
                            </label>
                            <input type="text" required placeholder="Decimal"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>
                        <div class="col-md-4">
                            <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Description
                            </label>
                            <input type="text" required placeholder="Decimal numbers addition"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>
                        <div class="col-md-4">
                            <label class=" text-sm font-medium text-gray-700 mb-1.5">
                            Term
                            </label>
                            <input type="text" required placeholder="1st Term"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>
                    </div>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1.5">
                    Modules
                    </label>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 border border-1 p-2 mb-1">
                        <div class="col-md-4">
                            <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Module Name
                            </label>
                            <input type="text" required placeholder="Decimal"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>
                        <div class="col-md-4">
                            <label class="block text-sm font-medium text-gray-700 mb-1.5">
                            Description
                            </label>
                            <input type="text" required placeholder="Decimal numbers addition"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>
                        <div class="col-md-4">
                            <label class=" text-sm font-medium text-gray-700 mb-1.5">
                            Term
                            </label>
                            <input type="text" required placeholder="1st Term"
                            class="w-full px-4 py-2.5 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none" />
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </section>
</template>

<script>
export default{
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },

    data(){
        return{

        }
    },

    methods:{
        closeModal() {
            this.$emit('close')
        }
    }
}
</script>
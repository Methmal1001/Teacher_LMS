<template>
    <section>
        <transition name="modal" appear>
            <div class="p-6 sm:p-8 space-y-7">
                <button @click="calculateScore"
                    class="px-5 py-2 rounded-lg bg-yellow-600 text-white hover:bg-yellow-700 transition">
                    Calculate Score
                </button>
                <!-- Desktop / Tablet view - Table-like grid -->
                <div class="hidden sm:block">
                <div
                    class="grid grid-cols-[minmax(100px,auto)_1fr] gap-x-8 gap-y-4 bg-gray-50 p-4 rounded-xl border border-gray-200 font-medium text-gray-700"
                >
                    <div>Question No</div>
                    <div>Answer</div>

                    <!-- Example rows – replace with v-for -->
                    <template v-for="item in items" :key="item.id">
                    <div class="font-medium text-gray-800">{{ item.question }}</div>
                    <div class="text-gray-900">{{ item.answer }}</div>
                    </template>

                    <!-- Sample fallback data if no items -->
                    <div v-if="!items?.length" class="col-span-2 text-center py-6 text-gray-500">
                    No answers submitted yet
                    </div>
                </div>
                </div>

                <!-- Mobile view - Card / List style -->
                <div class="sm:hidden space-y-4">
                <div
                    v-for="item in items"
                    :key="item.id"
                    class="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm"
                >
                    <div class="flex justify-between items-center mb-2">
                    <span class="font-medium text-gray-700">Question</span>
                    <span class="text-gray-900 font-semibold">{{ item.question }}</span>
                    </div>
                    <div class="flex justify-between items-center">
                    <span class="font-medium text-gray-700">Answer</span>
                    <span class="text-blue-700 font-semibold">{{ item.answer }}</span>
                    </div>
                </div>

                <div
                    v-if="!items?.length"
                    class="text-center py-8 text-gray-500 bg-gray-50 rounded-xl border border-gray-200"
                >
                    No answers submitted yet
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

export default{
    props:{
    },

    data(){
        return{
            items: [
            { id: 1, question: 1, answer: 2 },
            { id: 2, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            { id: 3, question: 1, answer: 2 },
            // ... more items
        ]
        }
    },

    methods:{
        closeModal() {
            this.$emit('close');
        },
    }
}
</script>
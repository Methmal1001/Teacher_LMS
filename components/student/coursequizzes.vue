<template>
    <div class="fixed inset-0 z-[99999] bg-black/60 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">

            <!-- Header -->
            <div class="bg-gray-800 px-6 py-4 text-white">
                <p class="text-xs text-gray-400 mb-0.5">{{ courseCode }} · {{ courseName }}</p>
                <h2 class="text-lg font-bold">{{ quizName }}</h2>
            </div>

            <!-- Summary -->
            <div class="px-6 py-5 space-y-4">

                <!-- Time expired banner -->
                <div v-if="timeExpired" class="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <span class="text-xl">⏰</span>
                    <div>
                        <p class="text-red-700 font-semibold text-sm">Time's Up!</p>
                        <p class="text-red-500 text-xs">Your time has expired. Please finish your attempt.</p>
                    </div>
                </div>

                <!-- Manual submit banner -->
                <div v-else class="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
                    <span class="text-xl">📋</span>
                    <div>
                        <p class="text-blue-700 font-semibold text-sm">Review Your Answers</p>
                        <p class="text-blue-500 text-xs">Check your answers before submitting.</p>
                    </div>
                </div>

                <!-- Stats -->
                <div class="grid grid-cols-3 gap-3">
                    <div class="text-center bg-gray-50 rounded-xl py-4 border border-gray-200">
                        <p class="text-2xl font-bold text-gray-700">{{ totalQuestions }}</p>
                        <p class="text-xs text-gray-400 mt-1">Total</p>
                    </div>
                    <div class="text-center bg-green-50 rounded-xl py-4 border border-green-200">
                        <p class="text-2xl font-bold text-green-600">{{ answeredCount }}</p>
                        <p class="text-xs text-green-400 mt-1">Answered</p>
                    </div>
                    <div class="text-center bg-orange-50 rounded-xl py-4 border border-orange-200">
                        <p class="text-2xl font-bold text-orange-500">{{ unansweredCount }}</p>
                        <p class="text-xs text-orange-400 mt-1">Unanswered</p>
                    </div>
                </div>

                <!-- Unanswered warning -->
                <div v-if="unansweredCount > 0" class="flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3">
                    <span class="text-base">⚠️</span>
                    <p class="text-orange-600 text-xs">
                        You have <strong>{{ unansweredCount }}</strong> unanswered question{{ unansweredCount > 1 ? 's' : '' }}.
                        Unanswered questions will be marked as incorrect.
                    </p>
                </div>

                <!-- All answered confirmation -->
                <div v-else class="flex items-center gap-2 bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                    <span class="text-base">✅</span>
                    <p class="text-green-600 text-xs font-medium">All questions answered. You're ready to submit!</p>
                </div>

            </div>

            <!-- Action Buttons -->
            <div class="px-6 pb-6 flex flex-col gap-3">

                <!-- Finish Attempt — always active -->
                <button
                    @click="$emit('finish')"
                    class="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm transition shadow-md"
                >
                    Finish Attempt & Submit
                </button>

                <!-- Go Back — only active if time NOT expired -->
                <button
                    @click="$emit('back')"
                    :disabled="timeExpired"
                    :class="[
                        'w-full py-3 rounded-xl font-semibold text-sm transition border-2',
                        timeExpired
                            ? 'border-gray-200 text-gray-300 bg-gray-50 cursor-not-allowed'
                            : 'border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400'
                    ]"
                >
                    <span v-if="timeExpired" class="flex items-center justify-center gap-2">
                        <span>🔒</span> Return to Quiz (Time Expired)
                    </span>
                    <span v-else>← Return to Quiz</span>
                </button>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        quizName:       { type: String, required: true },
        courseCode:     { type: String, default: '' },
        courseName:     { type: String, default: '' },
        totalQuestions: { type: Number, required: true },
        answeredCount:  { type: Number, required: true },
        timeExpired:    { type: Boolean, default: false }
    },

    emits: ['finish', 'back'],

    computed: {
        unansweredCount() {
            return this.totalQuestions - this.answeredCount
        }
    }
}
</script>
<template>
    <div class="fixed inset-0 z-[9999] bg-gray-100 flex flex-col overflow-hidden">

        <!-- ══════════════════════════════════════
             TOP BAR
        ══════════════════════════════════════ -->
        <div class="bg-gray-800 text-white px-5 py-3 flex items-center justify-between shrink-0 shadow-lg">

            <!-- Back + Title -->
            <div class="flex items-center gap-3 min-w-0">
                <button @click="goBack" class="text-gray-300 hover:text-white text-sm font-semibold shrink-0">
                    ← Back
                </button>
                <div class="hidden sm:block border-l border-gray-600 pl-3 min-w-0">
                    <p class="text-xs text-gray-400 truncate">{{ course_code }} · {{ course_name }}</p>
                    <p class="text-sm font-semibold text-white truncate">{{ quiz_name }}</p>
                </div>
            </div>

            <!-- Timer -->
            <div
                :class="[
                    'px-5 py-1.5 rounded-full font-mono font-bold text-sm shrink-0 transition-colors duration-500',
                    timeLeft > 300 ? 'bg-green-600 text-white' :
                    timeLeft > 60  ? 'bg-yellow-400 text-gray-900' :
                                     'bg-red-600 text-white animate-pulse'
                ]"
            >
                ⏱ {{ formattedTime }}
            </div>

            <!-- Mobile only: View Q button -->
            <button
                v-if="isMobile"
                @click="togglePdfMobile"
                class="ml-3 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 rounded-lg text-xs font-semibold shrink-0 transition"
            >
                {{ showPdfMobile ? 'Hide Q ✕' : 'View Q 📄' }}
            </button>

        </div>

        <!-- ══════════════════════════════════════
             MOBILE: PDF Fullscreen Overlay
        ══════════════════════════════════════ -->
        <transition name="slide-up">
            <div
                v-if="showPdfMobile && isMobile"
                class="fixed inset-0 z-40 bg-white flex flex-col"
                style="top: 52px;"
            >
                <div class="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-300 shrink-0">
                    <p class="font-semibold text-gray-700 text-sm">📄 Question Paper</p>
                    <button
                        @click="togglePdfMobile"
                        class="px-4 py-1.5 bg-red-500 text-white rounded-lg text-xs font-semibold hover:bg-red-600 transition"
                    >
                        Hide Q ✕
                    </button>
                </div>
                <div class="flex-1 overflow-hidden">
                    <iframe :src="pdfUrl" class="w-full h-full border-0" type="application/pdf" />
                </div>
            </div>
        </transition>

        <!-- ══════════════════════════════════════
             SUBMIT MODAL (CourseQuizzes component)
        ══════════════════════════════════════ -->
        <CourseQuizzes
            v-if="showSubmitModal"
            :quiz-name="quiz_name"
            :course-code="course_code"
            :course-name="course_name"
            :total-questions="questions.length"
            :answered-count="answeredCount"
            :time-expired="timeExpired"
            @finish="finishAttempt"
            @back="closeSubmitModal"
        />

        <!-- ══════════════════════════════════════
             RESULT SCREEN
        ══════════════════════════════════════ -->
        <div v-if="submitted" class="flex-1 flex items-center justify-center p-6 overflow-auto">
            <div class="bg-white rounded-2xl shadow-xl p-10 text-center max-w-md w-full">
                <p class="text-5xl mb-4">🎉</p>
                <h2 class="text-2xl font-bold text-gray-800 mb-1">Quiz Submitted!</h2>
                <p class="text-gray-400 text-sm mb-8">{{ quiz_name }}</p>
                <div class="flex justify-center gap-10 mb-8">
                    <div>
                        <p class="text-4xl font-bold text-blue-600">{{ score }}</p>
                        <p class="text-xs text-gray-400 mt-1 uppercase tracking-wide">Correct</p>
                    </div>
                    <div>
                        <p class="text-4xl font-bold text-gray-300">{{ questions.length }}</p>
                        <p class="text-xs text-gray-400 mt-1 uppercase tracking-wide">Total</p>
                    </div>
                    <div>
                        <p class="text-4xl font-bold" :class="percentage >= 50 ? 'text-green-500' : 'text-red-500'">
                            {{ percentage }}%
                        </p>
                        <p class="text-xs text-gray-400 mt-1 uppercase tracking-wide">Score</p>
                    </div>
                </div>
                <div class="w-full bg-gray-100 rounded-full h-3 mb-8 overflow-hidden">
                    <div
                        class="h-3 rounded-full transition-all duration-700"
                        :class="percentage >= 50 ? 'bg-green-500' : 'bg-red-500'"
                        :style="{ width: percentage + '%' }"
                    />
                </div>
                <button @click="resetQuiz"
                    class="px-8 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition font-semibold shadow-md">
                    Try Again
                </button>
            </div>
        </div>

        <!-- ══════════════════════════════════════
             MAIN BODY
             Desktop : PDF (60%) | Answers (40%)
             Mobile  : Answers only + PDF overlay
        ══════════════════════════════════════ -->
        <div v-if="!submitted" class="flex-1 flex overflow-hidden">

            <!-- LEFT: PDF — desktop only -->
            <div v-if="!isMobile" class="flex flex-col bg-white border-r-2 border-gray-200" style="width: 60%;">
                <div class="px-5 py-3 bg-gray-50 border-b border-gray-200 shrink-0 flex items-center gap-2">
                    <span>📄</span>
                    <p class="font-semibold text-gray-700 text-sm">Question Paper</p>
                </div>
                <div class="flex-1 overflow-hidden">
                    <iframe :src="pdfUrl" class="w-full h-full border-0" type="application/pdf" />
                </div>
            </div>

            <!-- RIGHT: Answer Sheet -->
            <div class="flex flex-col overflow-hidden bg-gray-100" :style="isMobile ? 'width:100%' : 'width:40%'">

                <!-- Header -->
                <div class="flex items-center justify-between px-5 py-3 bg-white border-b border-gray-200 shrink-0 shadow-sm">
                    <div class="flex items-center gap-2">
                        <span>📝</span>
                        <p class="font-semibold text-gray-700 text-sm">Answer Sheet</p>
                    </div>
                    <p class="text-xs text-gray-400 font-medium">{{ answeredCount }} / {{ questions.length }} answered</p>
                </div>

                <!-- Progress bar -->
                <div class="w-full bg-gray-200 h-1.5 shrink-0">
                    <div
                        class="h-1.5 bg-blue-500 transition-all duration-500 rounded-r-full"
                        :style="{ width: progressPercent + '%' }"
                    />
                </div>

                <!-- Scrollable questions -->
                <div class="flex-1 overflow-y-auto px-4 py-4 space-y-4">

                    <div
                        v-for="(question, qIndex) in questions"
                        :key="qIndex"
                        class="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden"
                    >
                        <div class="flex items-start gap-3 px-4 py-4 border-b border-gray-100">
                            <span
                                class="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors"
                                :class="answers[qIndex] !== undefined ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-500'"
                            >
                                {{ qIndex + 1 }}
                            </span>
                            <p class="text-gray-800 text-sm font-medium leading-relaxed">{{ question.text }}</p>
                        </div>

                        <div class="px-4 py-3 space-y-2">
                            <div
                                v-for="(option, oIndex) in question.options"
                                :key="oIndex"
                                @click="selectAnswer(qIndex, oIndex)"
                                :class="[
                                    'flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-all select-none text-sm',
                                    answers[qIndex] === oIndex
                                        ? 'bg-blue-50 border-blue-400 text-blue-800 font-semibold'
                                        : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'
                                ]"
                            >
                                <span
                                    :class="[
                                        'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all',
                                        answers[qIndex] === oIndex ? 'border-blue-500 bg-blue-500' : 'border-gray-300 bg-white'
                                    ]"
                                >
                                    <span v-if="answers[qIndex] === oIndex" class="w-2 h-2 rounded-full bg-white block" />
                                </span>
                                <span
                                    :class="[
                                        'w-6 h-6 rounded text-xs font-bold flex items-center justify-center shrink-0',
                                        answers[qIndex] === oIndex ? 'bg-blue-200 text-blue-700' : 'bg-gray-100 text-gray-500'
                                    ]"
                                >
                                    {{ ['A','B','C','D'][oIndex] }}
                                </span>
                                {{ option }}
                            </div>
                        </div>
                    </div>

                    <!-- Submit row -->
                    <div class="pt-3 pb-8 flex items-center justify-between">
                        <p class="text-xs text-gray-400">
                            <span v-if="!allAnswered">{{ questions.length - answeredCount }} remaining</span>
                            <span v-else class="text-green-600 font-semibold">✓ All answered</span>
                        </p>
                        <button
                            @click="openSubmitModal"
                            :disabled="!allAnswered"
                            :class="[
                                'px-6 py-3 rounded-xl font-semibold text-sm transition-all',
                                allAnswered
                                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            ]"
                        >
                            Submit Quiz ({{ answeredCount }}/{{ questions.length }})
                        </button>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import CourseQuizzes from '~/components/student/coursequizzes.vue'

export default {
    layout: false,

    components: { CourseQuizzes },

    data() {
        return {
            quiz_name:          this.$route.query.quiz_name          || 'Quiz',
            quiz_id:            this.$route.query.quiz_id            || '',
            course_code:        this.$route.query.course_code        || '',
            course_name:        this.$route.query.course_name        || '',
            course_description: this.$route.query.course_description || '',

            pdfUrl: '/pdfs/rgb.pdf',

            isMobile:      false,
            showPdfMobile: false,

            timeLeft:    3600,
            timeExpired: false,
            timer:       null,

            showSubmitModal: false,

            // Replace with API/store call using quiz_id
            questions: [
                {
                    text: 'Which of the following best describes a local area network (LAN)?',
                    options: [
                        'A network spanning multiple countries',
                        'A network within a small geographic area like an office',
                        'A wireless internet connection',
                        'A network managed by a third party'
                    ],
                    correct: 1
                },
                {
                    text: 'What does HTML stand for?',
                    options: [
                        'Hyper Transfer Markup Language',
                        'High Text Markup Language',
                        'Hyper Text Markup Language',
                        'Hyper Text Management Language'
                    ],
                    correct: 2
                },
                {
                    text: 'Which protocol is used for secure web browsing?',
                    options: ['HTTP', 'FTP', 'SMTP', 'HTTPS'],
                    correct: 3
                },
                {
                    text: 'What is the primary function of an operating system?',
                    options: [
                        'To browse the internet',
                        'To manage hardware and software resources',
                        'To compile source code',
                        'To store data permanently'
                    ],
                    correct: 1
                },
                {
                    text: 'Which of the following is a non-volatile storage device?',
                    options: ['RAM', 'Cache Memory', 'Hard Disk Drive', 'CPU Register'],
                    correct: 2
                }
            ],

            answers:   {},
            submitted: false,
            score:     0
        }
    },

    computed: {
        formattedTime() {
            const h = Math.floor(this.timeLeft / 3600)
            const m = Math.floor((this.timeLeft % 3600) / 60)
            const s = this.timeLeft % 60
            return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
        },
        answeredCount()   { return Object.keys(this.answers).length },
        allAnswered()     { return this.answeredCount === this.questions.length },
        progressPercent() { return (this.answeredCount / this.questions.length) * 100 },
        percentage()      { return Math.round((this.score / this.questions.length) * 100) }
    },

    methods: {
        checkScreen() {
            this.isMobile = window.innerWidth < 768
        },
        togglePdfMobile() {
            this.showPdfMobile = !this.showPdfMobile
        },
        selectAnswer(q, o) {
            this.answers = { ...this.answers, [q]: o }
        },

        // Student manually clicks Submit Quiz button
        openSubmitModal() {
            this.showSubmitModal = true
        },

        // Student clicks Return to Quiz inside the modal
        closeSubmitModal() {
            this.showSubmitModal = false
        },

        // Student clicks Finish Attempt inside the modal — calculate & show result
        finishAttempt() {
            clearInterval(this.timer)
            let correct = 0
            this.questions.forEach((q, i) => {
                if (this.answers[i] === q.correct) correct++
            })
            this.score           = correct
            this.submitted       = true
            this.showSubmitModal = false
        },

        resetQuiz() {
            this.answers         = {}
            this.submitted       = false
            this.score           = 0
            this.timeLeft        = 3600
            this.timeExpired     = false
            this.showSubmitModal = false
            this.startTimer()
        },

        startTimer() {
            this.timer = setInterval(() => {
                if (this.timeLeft > 0) {
                    this.timeLeft--
                } else {
                    // Time ran out — stop timer, set expired, auto-open modal
                    clearInterval(this.timer)
                    this.timeExpired     = true
                    this.showSubmitModal = true
                }
            }, 1000)
        },

        goBack() {
            this.$router.push({
                path: '/student/coursequiz',
                query: {
                    course_code:        this.course_code,
                    course_name:        this.course_name,
                    course_description: this.course_description
                }
            })
        }
    },

    mounted() {
        this.checkScreen()
        window.addEventListener('resize', this.checkScreen)
        this.startTimer()
    },

    beforeUnmount() {
        window.removeEventListener('resize', this.checkScreen)
        clearInterval(this.timer)
    }
}
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
    transform: translateY(100%);
    opacity: 0;
}
</style>
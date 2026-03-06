<template>
  <div class="min-h-screen bg-gray-50 p-4 sm:p-6">

    <!-- START SCREEN -->
    <div
      v-if="!quizStarted"
      class="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center"
    >
      <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Ready to Begin?
      </h2>

      <p class="text-gray-600 mb-2 text-lg">
        You have <strong>60 minutes</strong> to complete this quiz.
      </p>

      <p class="text-gray-500 mb-8 text-base">
        The timer starts immediately and cannot be paused.
      </p>

      <button
        @click="startQuiz"
        class="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition text-lg shadow-md"
      >
        Start Quiz Now
      </button>
    </div>

    <!-- QUIZ -->
    <div v-else class="space-y-5 sm:space-y-6 max-w-7xl mx-auto">

      <!-- HEADER -->
      <div class="bg-white border rounded-xl p-4 shadow-sm">
        <div class="flex flex-col sm:flex-row sm:justify-between gap-3">
          <div class="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <span class="font-bold text-xl text-blue-700">{{ coursecode }}</span>
            <span class="text-gray-700 font-medium text-lg">{{ coursename }}</span>
          </div>

          <div class="text-2xl font-mono font-bold text-red-600">
            {{ formatTime(timeLeft) }}
          </div>
        </div>

        <!-- MOBILE BUTTON -->
        <button
          v-if="!isLargeScreen"
          @click="showPdf = true"
          class="mt-4 w-full py-3 bg-indigo-100 text-indigo-800 rounded-xl font-medium"
        >
          View Question Paper
        </button>
      </div>

      <!-- MAIN GRID -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <!-- DESKTOP PDF -->
        <div
          v-if="isLargeScreen"
          class="bg-white rounded-xl shadow border overflow-hidden min-h-[75vh]"
        >
          <div class="bg-gray-100 px-4 py-3 font-semibold">
            Quiz Paper
          </div>

          <iframe
            :src="pdfUrl"
            class="w-full h-full"
          ></iframe>
        </div>

        <!-- ANSWERS -->
        <div class="bg-white rounded-xl shadow border p-5 flex flex-col">

          <h3 class="text-xl font-semibold mb-5">Your Answers</h3>

          <div class="space-y-6 flex-1 overflow-auto">
            <div v-for="(q, index) in questions" :key="index">
              <p class="mb-2 font-medium">
                {{ index + 1 }}. {{ q.text }}
              </p>

              <div class="space-y-2">
                <label v-for="(opt, i) in q.options" :key="i" class="flex gap-2">
                  <input
                    type="radio"
                    :name="'q'+index"
                    :value="opt.value"
                    v-model="answers[index]"
                  />
                  {{ opt.label }}
                </label>
              </div>
            </div>
          </div>

          <!-- SUMMARY -->
          <div class="mt-6 border-t pt-4">
            <div class="flex justify-between mb-4">
              <span>Answered: {{ answeredCount }}</span>
              <span>Unanswered: {{ unansweredCount }}</span>
            </div>

            <button
              @click="showReview = true"
              class="w-full py-3 bg-indigo-600 text-white rounded-xl"
            >
              Review & Submit
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 📱 MOBILE FULL SCREEN PDF -->
    <div
      v-if="showPdf && !isLargeScreen"
      class="fixed inset-0 bg-white z-50 flex flex-col"
    >
      <!-- HEADER -->
      <div class="flex justify-between items-center p-4 border-b">
        <h3 class="font-semibold">Quiz Paper</h3>

        <button
          @click="showPdf = false"
          class="text-red-600 font-bold"
        >
          Close ✕
        </button>
      </div>

      <!-- PDF -->
      <iframe
        :src="pdfUrl"
        class="flex-1 w-full"
      ></iframe>
    </div>

    <!-- REVIEW MODAL -->
    <div
      v-if="showReview"
      class="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-xl w-96">
        <h3 class="text-xl font-bold mb-4">Confirm Submission</h3>

        <p class="mb-2">
          Time left: {{ formatTime(timeLeft) }}
        </p>

        <p class="mb-4">
          Answered: {{ answeredCount }} / {{ questions.length }}
        </p>

        <div class="flex gap-3">
          <button
            @click="showReview = false"
            class="flex-1 bg-gray-300 py-2 rounded"
          >
            Back
          </button>

          <button
            @click="submitQuiz"
            class="flex-1 bg-green-600 text-white py-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  coursecode: String,
  coursename: String,
  pdfUrl: {
    type: String,
    default: 'https://www.srisaradacollege.ac.in/pdf/QUIZ%202017-18.pdf'
  }
})

const quizStarted = ref(false)
const timeLeft = ref(3600)
const timerId = ref(null)

const showPdf = ref(false)
const showReview = ref(false)

const isLargeScreen = ref(window.innerWidth >= 1024)

const updateScreen = () => {
  isLargeScreen.value = window.innerWidth >= 1024
}

const questions = ref([
  {
    text: 'What is 2 + 2?',
    options: [
      { label: '3', value: 'a' },
      { label: '4', value: 'b' }
    ]
  },
  {
    text: 'Capital of France?',
    options: [
      { label: 'Paris', value: 'a' },
      { label: 'Berlin', value: 'b' }
    ]
  }
])

const answers = ref(Array(questions.value.length).fill(null))

const answeredCount = computed(() =>
  answers.value.filter(a => a !== null).length
)

const unansweredCount = computed(() =>
  questions.value.length - answeredCount.value
)

function startQuiz() {
  quizStarted.value = true
  startTimer()
}

function startTimer() {
  timerId.value = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      clearInterval(timerId.value)
      submitQuiz(true)
    }
  }, 1000)
}

function formatTime(sec) {
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

function submitQuiz(auto = false) {
  if (timerId.value) clearInterval(timerId.value)

  console.log('Submitted:', answers.value)

  alert(auto ? 'Auto submitted!' : 'Submitted!')
}

onMounted(() => {
  window.addEventListener('resize', updateScreen)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreen)
  if (timerId.value) clearInterval(timerId.value)
})
</script>
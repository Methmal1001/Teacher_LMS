<template>
  <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-4xl mx-auto space-y-6">
    <!-- Header -->
    <div>
      <h2 class="text-2xl font-semibold text-gray-800 mb-2">Add Quiz - <span class="text-orange-500 ">{{ coursecode }} {{ name }}</span></h2>
      <p class="text-gray-600"><span class="font-medium">Course Code:</span> {{ coursecode }}</p>
      <p class="text-gray-600"><span class="font-medium">Course Name:</span> {{ name }}</p>
    </div>

    <!-- Quiz Settings -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Quiz Duration (minutes)
        </label>
        <input
          type="number"
          v-model="quizDuration"
          min="1"
          class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>

    <!-- Questions -->
    <div class="space-y-6 mt-4">
      <div
        v-for="(question, qIndex) in questions"
        :key="qIndex"
        class="border rounded-lg p-4 bg-gray-50 space-y-3"
      >
        <div class="flex justify-between items-center">
          <h3 class="font-semibold text-gray-700">Question {{ qIndex + 1 }}</h3>
          <button
            class="text-red-500 hover:text-red-700 font-bold"
            @click="removeQuestion(qIndex)"
          >
            ✕
          </button>
        </div>

        <!-- Question Text -->
        <input
          type="text"
          v-model="question.text"
          placeholder="Enter question text"
          class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <!-- Question Type -->
        <select
          v-model="question.type"
          class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="radio">Multiple Choice (Single Answer)</option>
          <option value="checkbox">Multiple Select</option>
          <option value="text">Short Answer / Text</option>
          <option value="drag">Drag & Drop</option>
          <option value="connect">Connect Items</option>
        </select>

        <!-- Options Section -->
        <div v-if="question.type === 'radio' || question.type === 'checkbox'" class="space-y-2">
          <div
            v-for="(option, oIndex) in question.options"
            :key="oIndex"
            class="flex items-center gap-2"
          >
            <input
              type="text"
              v-model="option.text"
              placeholder="Option text"
              class="flex-1 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              v-if="question.type === 'radio'"
              type="radio"
              :name="'correct-' + qIndex"
              :checked="option.correct"
              @change="setCorrectAnswer(qIndex, oIndex, 'radio')"
            />
            <input
              v-if="question.type === 'checkbox'"
              type="checkbox"
              v-model="option.correct"
            />
            <button
              class="text-red-500 hover:text-red-700 font-bold"
              @click="removeOption(qIndex, oIndex)"
            >
              ✕
            </button>
          </div>
          <button
            class="mt-2 text-blue-600 hover:text-blue-800 font-medium"
            @click="addOption(qIndex)"
          >
            + Add Option
          </button>
        </div>

        <!-- Drag & Drop or Connect items simplified -->
        <div v-if="question.type === 'drag' || question.type === 'connect'">
          <p class="text-gray-500 text-sm italic">Configure drag/drop or connect items here (simplified)</p>
        </div>

        <!-- Short Answer -->
        <div v-if="question.type === 'text'">
          <input
            type="text"
            placeholder="Expected answer"
            v-model="question.answer"
            class="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <!-- Add new question -->
      <button
        @click="addQuestion"
        class="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
      >
        + Add Question
      </button>
    </div>

    <!-- Actions -->
    <div class="flex justify-end gap-4 mt-6">
      <button
        @click="$emit('close')"
        class="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
      >
        Cancel
      </button>

      <button
        @click="submitQuiz"
        class="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Save Quiz
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['coursecode', 'name'],
  data() {
    return {
      quizDuration: 60, // default 1 hour
      questions: []
    }
  },
  methods: {
    addQuestion() {
      this.questions.push({
        text: '',
        type: 'radio',
        options: [
          { text: '', correct: false },
          { text: '', correct: false }
        ],
        answer: '' // for text type
      })
    },
    removeQuestion(index) {
      this.questions.splice(index, 1)
    },
    addOption(qIndex) {
      this.questions[qIndex].options.push({ text: '', correct: false })
    },
    removeOption(qIndex, oIndex) {
      this.questions[qIndex].options.splice(oIndex, 1)
    },
    setCorrectAnswer(qIndex, oIndex, type) {
      if (type === 'radio') {
        this.questions[qIndex].options.forEach((opt, idx) => {
          opt.correct = idx === oIndex
        })
      }
    },
    submitQuiz() {
      // validation
      if (!this.questions.length) {
        alert('Add at least one question.')
        return
      }

      // prepare data
      const quizData = {
        courseCode: this.coursecode,
        courseName: this.name,
        duration: this.quizDuration,
        questions: this.questions
      }

      console.log('Quiz Data:', quizData)
      alert('Quiz saved successfully!')
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
/* Optional: better spacing for inputs */
input[type="text"], select {
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
</style>

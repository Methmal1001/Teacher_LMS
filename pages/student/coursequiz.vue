<template>
    <div class="p-6 bg-gray-200 min-h-screen rounded-md space-y-6">

        <!-- Header -->
        <div class="bg-gray-300 p-4 rounded-lg shadow-md flex items-center gap-4">
            <button
                @click="goBack"
                class="text-gray-600 hover:text-gray-900 text-xl font-bold transition"
            >
                ←
            </button>
            <div>
                <h1 class="text-3xl font-bold text-gray-700">{{ course_code }} - {{ course_name }}</h1>
                <p class="text-gray-500 text-sm mt-1">{{ course_description }}</p>
            </div>
        </div>

        <!-- Quizzes Section Title -->
        <div class="bg-white rounded-lg shadow p-4">
            <h2 class="text-xl font-bold text-gray-700 mb-4">📝 Quizzes</h2>

            <!-- Quiz List -->
            <div v-if="quizzes.length > 0" class="space-y-3">
                <div
                    v-for="quiz in quizzes"
                    :key="quiz.id"
                    @click="goToQuizDetails(quiz)"
                    class="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition"
                >
                    <div>
                        <p class="font-semibold text-gray-800">{{ quiz.name }}</p>
                        <p class="text-sm text-gray-500 mt-1">{{ quiz.description }}</p>
                    </div>
                    <span class="text-blue-500 font-bold text-lg">→</span>
                </div>
            </div>

            <!-- Empty state -->
            <div v-else class="text-center text-gray-400 py-10">
                <p class="text-lg">No quizzes available for this course yet.</p>
            </div>
        </div>

    </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        const router = useRouter()

        // Receive course details from query params
        const course_code = route.query.course_code || 'N/A'
        const course_name = route.query.course_name || 'N/A'
        const course_description = route.query.course_description || 'Course description not available.'

        // --- Replace this with your actual API/store call to fetch quizzes ---
        // Each quiz object should have: id, name, description
        const quizzes = [
            { id: 'quiz_01', name: 'Quiz 1 - Introduction', description: 'Basic concepts and overview' },
            { id: 'quiz_02', name: 'Quiz 2 - Chapter 1', description: 'Topics covered in Chapter 1' },
            { id: 'quiz_03', name: 'Quiz 3 - Midterm Practice', description: 'Practice questions for midterm' },
        ]
        // --- End of placeholder data ---

        // Navigate to quiz details page with quiz id + course details
        const goToQuizDetails = (quiz) => {
            router.push({
                path: '/student/quizdetails',
                query: {
                    quiz_id: quiz.id,
                    quiz_name: quiz.name,
                    course_code,
                    course_name,
                    course_description,
                }
            })
        }

        // Go back to course view
        const goBack = () => {
            router.push({
                path: '/student/StudentCourseView',
                query: {
                    course_code,
                    course_name,
                    course_description,
                }
            })
        }

        return {
            course_code,
            course_name,
            course_description,
            quizzes,
            goToQuizDetails,
            goBack,
        }
    }
}
</script>

<style scoped>
div.cursor-pointer:hover {
    transform: scale(1.005);
    transition: transform 0.2s ease;
}
</style>
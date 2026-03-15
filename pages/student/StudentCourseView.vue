<template>
    <div class="p-6 bg-gray-200 min-h-screen rounded-md space-y-6">

        <!-- Course Header -->
        <div class="bg-gray-300 p-4 rounded-lg shadow-md">
            <h1 class="text-3xl font-bold text-gray-700 mb-1">{{ course_code }} - {{ course_name }}</h1>
            <p class="text-gray-500">{{ course_description }}</p>
        </div>

        <!-- Course Body -->
        <div class="space-y-4">

            <!-- Course Introduction -->
            <div class="bg-white rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer">
                <div @click="toggleSection('intro')" class="flex justify-between items-center">
                    <span class="font-semibold text-lg">Course Introduction</span>
                    <span>{{ openSection === 'intro' ? '▲' : '▼' }}</span>
                </div>
                <div class="mt-3" v-if="openSection === 'intro'">
                    <CourseIntro :coursecode="course_code" :coursename="course_name" />
                </div>
            </div>

            <!-- Course Videos -->
            <div class="bg-white rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer">
                <div @click="toggleSection('videos')" class="flex justify-between items-center">
                    <span class="font-semibold text-lg">Course Videos</span>
                    <span>{{ openSection === 'videos' ? '▲' : '▼' }}</span>
                </div>
                <div class="mt-3" v-if="openSection === 'videos'">
                    <p>CHAPTER 01 : {{ course_name }}</p>
                    <CourseVedio :coursecode="course_code" :coursename="course_name" />
                </div>
            </div>

            <!-- Teacher Notes -->
            <div class="bg-white rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer">
                <div @click="toggleSection('notes')" class="flex justify-between items-center">
                    <span class="font-semibold text-lg">Teacher Notes</span>
                    <span>{{ openSection === 'notes' ? '▲' : '▼' }}</span>
                </div>
                <div class="mt-3" v-if="openSection === 'notes'">
                    <CourseNotes :coursecode="course_code" :coursename="course_name" />
                </div>
            </div>

            <!-- Assignments -->
            <div class="bg-white rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer">
                <div @click="toggleSection('assignments')" class="flex justify-between items-center">
                    <span class="font-semibold text-lg">Assignments</span>
                    <span>{{ openSection === 'assignments' ? '▲' : '▼' }}</span>
                </div>
                <div class="mt-3" v-if="openSection === 'assignments'">
                    <CourseAssignment :coursecode="course_code" :coursename="course_name" />
                </div>
            </div>

            <!-- Papers -->
            <div class="bg-white rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer">
                <div @click="toggleSection('papers')" class="flex justify-between items-center">
                    <span class="font-semibold text-lg">Papers</span>
                    <span>{{ openSection === 'papers' ? '▲' : '▼' }}</span>
                </div>
                <div class="mt-3" v-if="openSection === 'papers'">
                    <CoursePapers :coursecode="course_code" :coursename="course_name" />
                </div>
            </div>

            <!-- Quizzes — navigates to coursequiz page -->
            <div
                class="bg-white rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer"
                @click="goToQuizzes"
            >
                <div class="flex justify-between items-center">
                    <span class="font-semibold text-lg">Quizzes</span>
                    <span>→</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import CourseIntro from '~/components/student/courseintro.vue'
import CourseVedio from '~/components/student/coursevedio.vue'
import CourseNotes from '~/components/student/coursenote.vue'
import CourseAssignment from '~/components/student/courseassignment.vue'
import CoursePapers from '~/components/student/coursepaper.vue'

export default {
    components: {
        CourseIntro,
        CourseVedio,
        CourseNotes,
        CourseAssignment,
        CoursePapers,
    },

    setup() {
        const route = useRoute()
        const router = useRouter()

        // Course info from query params
        const course_code = route.query.course_code || 'N/A'
        const course_name = route.query.course_name || 'N/A'
        const course_description = route.query.course_description || 'Course description not available.'

        // Track which section is open
        const openSection = ref(null)
        const toggleSection = (section) => {
            openSection.value = openSection.value === section ? null : section
        }

        // Navigate to the Quizzes page, passing course details
        const goToQuizzes = () => {
            router.push({
                path: '/student/coursequiz',
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
            openSection,
            toggleSection,
            goToQuizzes,
        }
    }
}
</script>

<style scoped>
div.cursor-pointer:hover {
    transform: scale(1.01);
    transition: transform 0.2s ease;
}
</style>
<template>
  <div class="min-h-screen bg-gray-100 p-6 sm:p-10">

    <!-- Header -->
    <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">
        Course Details
      </h1>

      <!-- Search + Add Button -->
      <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search by course code or name..."
          class="px-4 py-2 border rounded-lg w-full sm:w-72 focus:ring-2 focus:ring-blue-400"
        />
        <button
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          @click="openAddCourse"
        >
          + Add New Course
        </button>
      </div>
    </div>

    <!-- Courses Table -->
    <div class="overflow-x-auto bg-white rounded-xl shadow-md">

      <!-- Header Row -->
      <div class="flex w-full bg-blue-200 text-gray-700 font-semibold p-4 items-center">
        <div class="flex-1">Course Code</div>
        <div class="flex-1">Course Name</div>
        <div class="flex-1">Grade</div>
        <div class="flex-1 text-right">Edit</div>
        <div class="flex-1 text-right">Remove</div>
      </div>

      <!-- Course Rows -->
      <div
        v-for="course in filteredCourses"
        :key="course.course_code"
        class="flex w-full border-t py-2 px-4 items-center hover:bg-gray-100 transition"
      >
        <div class="flex-1 font-medium">{{ course.course_code }}</div>
        <div class="flex-1 truncate">{{ course.name }}</div>
        <div class="flex-1">{{ course.grade || '-' }}</div>

        <div class="flex-1 text-right">
          <button
            class="px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            @click="openEditCourse(course)"
          >
            Edit
          </button>
        </div>

        <div class="flex-1 text-right">
          <button
            class="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            @click="removeCourse(course.course_code)"
          >
            Remove
          </button>
        </div>
      </div>

      <!-- No Courses -->
      <div
        v-if="filteredCourses.length === 0"
        class="p-6 text-center text-gray-500"
      >
        No courses found.
      </div>
    </div>

    <!-- Edit Course Modal -->
    <Editcources
      v-if="selectedCourse"
      :course="selectedCourse"
      @close="selectedCourse = null"
    />

    <!-- Add Course Modal -->
    <AddCourse
      :show="addCourseModal"
      @close="addCourseModal = false"
      @add="handleAddCourse"
    />
  </div>
</template>

<script>
import Editcources from '~/components/courses/editcoursedetails.vue'
import AddCourse from '~/components/courses/addcourse.vue'

export default {
  components: {
    Editcources,
    AddCourse
  },

  data() {
    return {
      searchQuery: '',
      selectedCourse: null,
      addCourseModal: false,
      courses: [
        { course_code: 'CS101', name: 'Computer Science 101', grade: '10' },
        { course_code: 'MATH201', name: 'Mathematics 201', grade: '11' },
        { course_code: 'ENG301', name: 'English Literature', grade: '12' }
      ]
    }
  },

  computed: {
    filteredCourses() {
      const query = this.searchQuery.toLowerCase().trim()
      if (!query) return this.courses

      return this.courses.filter(course =>
        course.course_code.toLowerCase().includes(query) ||
        course.name.toLowerCase().includes(query)
      )
    }
  },

  methods: {
    openEditCourse(course) {
      this.selectedCourse = { ...course }
    },

    openAddCourse() {
      this.addCourseModal = true
    },

    handleAddCourse(newCourse) {
      this.courses.push({
        course_code: newCourse.course_code,
        name: newCourse.name,
        grade: newCourse.grade || '-'
      })
      this.addCourseModal = false
    },

    removeCourse(code) {
      if (confirm('Are you sure you want to remove this course?')) {
        this.courses = this.courses.filter(
          course => course.course_code !== code
        )
      }
    }
  }
}
</script>

<style scoped>
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>

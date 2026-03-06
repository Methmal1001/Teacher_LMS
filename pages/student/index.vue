<template>
  <div class="rounded-lg bg-gray-300 p-5 space-y-4 min-h-screen">

    <!-- Search & Sort -->
    <div class="flex flex-col sm:flex-row gap-4 mb-6">
      <input v-model="searchQuery" placeholder="Search by course name or ID..."
        class="w-full sm:w-1/2 border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400" />

      <select v-model="sortBy" class="border rounded px-3 py-2">
        <option value="name">Sort by Name</option>
        <option value="course_code">Sort by Course ID</option>
      </select>
    </div>

    <!-- Courses List -->
    <div v-if="filteredAndSortedCourses.length" class="grid gap-6">
      <div v-for="course in filteredAndSortedCourses" :key="course.course_code"
        class="bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row gap-4 hover:shadow-lg transition cursor-pointer"
        @click="goToStudentCourse(course)">
        <img :src="course.image" class=" w-32 h-32 rounded object-cover" />

        <div class="flex-1">
          <h3 class="font-semibold text-lg">{{ course.course_code }} {{ course.name }}</h3>
          <p class="text-sm text-gray-500">{{ course.description }}</p>

          <div class="bg-gray-200 h-3 rounded-full mt-2 xl:w-[23rem]">
            <div class="bg-red-300 h-3 rounded-full transition-all" :style="{ width: course.progress + '%' }"></div>
          </div>
          <p class="text-sm mt-1">{{ course.progress }}% completed</p>

          <!-- Only csn view for Admin -->
          <div v-show="false" class="flex flex-wrap gap-3 mt-4">
            <!-- Edit Course Button -->
            <button
              class="inline-flex items-center gap-2 bg-gray-500 text-white px-4 py-1.5 rounded-lg hover:bg-gray-700 transition"
              @click.stop="editCourse(course)">
              Edit
            </button>

            <!-- Assignments Button -->
            <button
              class="inline-flex items-center gap-2 bg-gray-500 text-white px-4 py-1.5 rounded-lg hover:bg-gray-700 transition"
              @click.stop="addAssignments(course)">
              Assignments
            </button>

            <!-- Quiz Button -->
            <button
              class="inline-flex items-center gap-2 bg-gray-500 text-white px-4 py-1.5 rounded-lg hover:bg-gray-700 transition"
              @click.stop="addQuizedetails(course)">
              Quizzes
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- No courses -->
    <div v-else class="text-center text-gray-500 py-10">
      No courses found.
    </div>

    <!-- ================= MODAL ================= -->
    <transition name="modal">
      <div v-if="selectedCourse" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        @click.self="closeModal">
        <div class="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
          <!-- Modal Header -->
          <div class="sticky top-0 bg-white border-b p-4 flex justify-between items-center z-10">
            <h2 class="text-xl font-semibold text-gray-800">
              {{ activeModal === 'edit' ? 'Edit Course' : activeModal === 'quiz' ? 'Add Quizzes' : activeModal ===
                'assignment' ? 'Add Assignments' : '' }}
            </h2>

            <!-- Close Button -->
            <button @click="closeModal" class="text-gray-500 hover:text-gray-800 transition">
              ✕
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-6">
            <!-- Edit Course Component -->
            <CourseEdit v-if="activeModal === 'edit'" :coursecode="selectedCourse.course_code"
              :name="selectedCourse.name" @close="closeModal" />

            <!-- Add Assignment Component -->
            <AssignmentAdd v-if="activeModal === 'assignment'" :coursecode="selectedCourse.course_code"
              :name="selectedCourse.name" @close="closeModal" />

            <!-- Add Quiz Component -->
            <Addquizzes v-if="activeModal === 'quiz'" :coursecode="selectedCourse.course_code"
              :name="selectedCourse.name" @close="closeModal" />
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import CourseEdit from '~/components/course/CourseEdit.vue'
import Addquizzes from '~/components/quizes/addquize.vue'
import AssignmentAdd from '~/components/assignment/AssignmentAdd.vue'

export default {
  layout: 'default',
  
  components: {
    CourseEdit,
    Addquizzes,
    AssignmentAdd,
  },

  data() {
    return {
      sortBy: 'name',
      searchQuery: '',
      courses: [
        { course_code: 'C101', name: 'Mathematics', progress: 20, description: 'Basic Mathematics for Engineering', image: 'icon/maths.png' },
        { course_code: 'C102', name: 'Physics', progress: 40, description: 'Basic Mathematics for Engineering', image: 'icon/physics.png' },
        { course_code: 'C103', name: 'Chemistry', progress: 70, description: 'Basic Mathematics for Engineering', image: 'icon/chemistry.png' },
        { course_code: 'C104', name: 'Biology', progress: 80, description: 'Basic Mathematics for Engineering', image: 'icon/biology.png' },
        { course_code: 'C105', name: 'English', progress: 100, description: 'Basic Mathematics for Engineering', image: 'icon/english.png' },
      ],
      selectedCourse: null,
      activeModal: null,

    }
  },

  computed: {
    filteredAndSortedCourses() {
      let result = this.courses.filter(course => {
        const q = this.searchQuery.toLowerCase()
        return (
          course.name.toLowerCase().includes(q) ||
          course.course_code.toLowerCase().includes(q)
        )
      })

      if (this.sortBy === 'name') {
        result.sort((a, b) => a.name.localeCompare(b.name))
      } else {
        result.sort((a, b) =>
          a.course_code.localeCompare(b.course_code)
        )
      }

      return result
    },

    // modalTitle() {
    //   switch(this.activeModal) {
    //     case 'edit': return 'Edit Course';
    //     case 'quiz': return 'Manage Quizzes';
    //     case 'assignment': return 'Manage Assignments';
    //     default: return '';
    //   }
    // },
  },

  mounted() {
    const loggedInStatus = sessionStorage.getItem('loggedIn')
    if (loggedInStatus !== 'true') {
      // this.$router.replace('/auth/login')
    } else {
      this.loggedIn = true
    }
  },

  methods: {
    editCourse(course) {
      this.selectedCourse = course
      this.activeModal = 'edit'
      document.body.classList.add('overflow-hidden')
      window.addEventListener('keydown', this.handleEsc)

      console.log("Edit course:", selectedCourse);
    },

    addQuizedetails(course) {
      this.selectedCourse = {
        course_code: course.course_code,
        name: course.name
      }
      this.activeModal = 'quiz'
      document.body.classList.add('overflow-hidden')
      window.addEventListener('keydown', this.handleEsc)
    },

    addAssignments(course) {
      this.selectedCourse = {
        course_code: course.course_code,
        name: course.name
      }
      this.activeModal = 'assignment'
      document.body.classList.add('overflow-hidden')
      window.addEventListener('keydown', this.handleEsc)
    },

    closeModal() {
      this.selectedCourse = null
      this.activeModal = null
      document.body.classList.remove('overflow-hidden')
      window.removeEventListener('keydown', this.handleEsc)
    },

    handleEsc(e) {
      if (e.key === 'Escape') this.closeModal()
    },

    // Route to student page
    goToStudentCourse(course) {
      // Navigate to student page and pass course_code and name
      this.$router.push({
        path: '/student/StudentCourseView',
        query: { course_code: course.course_code, course_name: course.name, course_description: course.description }
      })
    },
  },

  beforeUnmount() {
    window.removeEventListener('keydown', this.handleEsc)
  }
}
</script>

<!-- <style scoped>
/* Modal animation */
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
</style> -->
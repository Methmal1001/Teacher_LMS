// stores/course.js
import { defineStore } from 'pinia'

export const useCourseStore = defineStore('course', {
  state: () => ({
    selectedCourse: null  // Will hold the course selected for editing
  }),
  actions: {
    setCourse(course) {
      this.selectedCourse = course
    }
  }
})

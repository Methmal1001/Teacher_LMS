<template>
  <div>
    <div>Admin view</div>

    <div v-if="course">
      Course Name: {{ course.name }}
      <br />
      Course ID: {{ course.id }}
    </div>
    <div v-else>
      No course selected.
    </div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  data() {
    return {
      course: {
        id: '',
        name: ''
      }
    }
  },
  mounted() {
    // Access the route using this.$route (Options API)
    this.course.id = this.$route.query.id || ''
    this.course.name = this.$route.query.name || ''
  }
}
</script>

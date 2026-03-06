<template>
  <div class="flex flex-col gap-2 w-64">
    <NavItem label="Course Management" route="admincoursemgt" @toggle-sidebar="$emit('toggle-sidebar')">
      <template #icon>
        <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M12 14l9-5-9-5-9 5 9 5zM12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
        </svg>
      </template>
    </NavItem>

    <NavItem label="Users" :children="userSubItems" @toggle-sidebar="$emit('toggle-sidebar')">
      <template #icon>
        <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M16 7a4 4 0 01-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </template>
    </NavItem>

    <NavItem label="Assignment Management" route="adminassignmentmgt" @toggle-sidebar="$emit('toggle-sidebar')">
      <template #icon>
        <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M11 17h2M12 11v6m0 0l-3-3m3 3l3-3M4 7h16M4 7v12a2 2 0 002 2h12a2 2 0 002-2V7M4 7l8-4 8 4" />
        </svg>
      </template>
    </NavItem>
  </div>
</template>

<script>
import NavItem from '~/components/NavItem.vue'

export default {
  components: { NavItem },

  data() {
    return {
      userSubItems: [
        { label: 'Students', route: 'adminstudentmgt' },
        { label: 'Lecturers', route: 'adminlecturermgt' },
        { label: 'Admins', route: 'adminadminmgt' },
      ]
    }
  }
}
</script>
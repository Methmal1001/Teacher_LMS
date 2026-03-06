<!-- components/admin/NavItem.vue -->
<template>
  <div>
    <!-- Parent / clickable row -->
    <div
      class="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-gray-100 hover:text-blue-700 cursor-pointer transition-colors"
      :class="{ 'bg-blue-50 text-blue-700 bg-gray-100 bg-gray-100': isParentActive }" @click="handleClick">
      <div class="flex-shrink-0">
        <slot name="icon">
          <!-- fallback icon if not provided -->
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </slot>
      </div>

      <span class="flex-1 font-medium">{{ label }}</span>

      <!-- Chevron for items with children -->
      <svg v-if="hasChildren" class="w-5 h-5 transition-transform" :class="{ 'rotate-180': isOpen }" fill="none"
        stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>

    <!-- Submenu -->
    <div v-if="hasChildren && isOpen" class="pl-11 mt-1 space-y-1 overflow-hidden transition-all duration-300">
      <div v-for="(child, i) in children" :key="i"
        class="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-50 hover:text-blue-700 cursor-pointer text-sm"
        :class="{ 'text-blue-600 font-medium bg-gray-100': isChildActive(child) }" @click="navigateTo(child.route)">
        <slot name="child-icon" :item="child">
          <!-- default child icon -->
          <svg class="w-5 h-5 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </slot>
        <span>{{ child.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    route: { type: String, default: '' },
    children: { type: Array, default: () => [] },
    active: { type: Boolean, default: false },
  },

  data() {
    return {
      isOpen: false, // you can also accept as prop and sync if needed
    }
  },

  computed: {
    hasChildren() {
      return this.children.length > 0
    },

    isParentActive() {
      if (this.active) return true

      const current = this.$route.path.replace(/\/$/, '') // normalize current too

      let parentPath = this.route ? `/admin/${this.route}` : ''
      parentPath = parentPath.replace(/\/$/, '')

      if (!parentPath) return false

      if (!this.hasChildren) {
        return current === parentPath
      }

      // Strict prefix: must start with parentPath AND next char is / or end
      return current === parentPath ||
        current.startsWith(parentPath + '/')
    }
  },

  methods: {
    handleClick() {
      if (this.hasChildren) {
        this.isOpen = !this.isOpen
      } else if (this.route) {
        this.navigateTo(this.route)
      }
    },

    navigateTo(page) {
      if (!page) return
      this.$router.push(`/admin/${page}`)
      //   this.$emit('toggle-sidebar') // keep your mobile behavior
    },

    isChildActive(child) {
      if (!child.route) return false
      const childPath = `/admin/${child.route}`.replace(/\/$/, '')
      return this.$route.path === childPath
    }
  }
}
</script>
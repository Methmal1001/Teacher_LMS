<template>
  <div class="flex flex-col min-h-screen bg-gray-100">

    <!-- Header -->
    <AdminHeader @toggle-sidebar="toggleSidebar" />

    <div class="relative">

      <!-- Sidebar / NavBar -->
      <transition name="slide">
        <aside v-if="sidebarOpen" class="bg-gray-800 text-white min-h-screen p-6 fixed z-30">
          <NavBar @toggle-sidebar="toggleSidebar" />
        </aside>
      </transition>

      <!-- Overlay for mobile -->
      <div v-if="sidebarOpen" class="fixed inset-0 bg-black/40 z-20 lg:hidden" @click="toggleSidebar"></div>

      <!-- Main Content -->
      <main :class="['flex-1 p-6 transition-all duration-300 lg:ml-0',
        sidebarOpen ? 'lg:ml-64' : '']">
        <slot />
      </main>

    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>

import Footer from '~/components/footer.vue'
import NavBar from '~/components/SideBar.vue'
import AdminHeader from '~/components/admin/AdminHeader.vue'


export default {
  components: { Footer, NavBar, AdminHeader },

  data() {
    return {
      sidebarOpen: true,
      isDesktop: true
    }
  },

  computed: {
    // Sidebar is visible when:
    // - Desktop mode → always show (unless user collapsed it)
    // - Mobile mode  → only when user opened it
    sidebarVisible() {
      return this.isDesktop ? this.sidebarOpen : this.sidebarOpen
      // You can also write: this.sidebarOpen || this.isDesktop  (if you want it always visible on desktop)
    }
  },

  mounted() {
    this.updateDesktop()
    window.addEventListener('resize', this.updateDesktop)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.updateDesktop)
  },

  methods: {
    toggleSidebar() {
      console.log("toggleSidebar");

      this.sidebarOpen = !this.sidebarOpen;

      console.log("this.sidebarOpen:", this.sidebarOpen);
    },

    updateDesktop() {
      // Most common breakpoint for "desktop" in Tailwind = 1024px → lg:
      this.isDesktop = window.innerWidth >= 1024

      // Optional: auto-close on mobile when resizing to small screen
      if (!this.isDesktop) {
        this.sidebarOpen = false
      }
      // Optional: auto-open on desktop when resizing to large screen
      // else {
      //   this.sidebarOpen = true
      // }
    },
  }
}

</script>

<style scoped>
/* Slide animation for sidebar */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}

/* Smooth main content margin transition */
main {
  transition: margin-left 0.3s ease;
}
</style>

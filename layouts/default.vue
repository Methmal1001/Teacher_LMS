<template>
  <div :class="isDark ? 'bg-black text-white' : 'bg-white text-black'" class="flex flex-col min-h-screen">

    <Header 
      :isDark="isDark" 
      @toggle-dark="toggleDarkMode"
      :class="[
        'flex justify-between items-center px-4 sm:px-6 py-4 shadow-md',
        isDark ? 'bg-gray-900 text-white' : 'bg-gray-400 text-black'
      ]"
    />

    <Adbar />
    <div class="flex flex-col lg:flex-row flex-1">

      <!-- Left Sidebar -->
      <SidebarLeft
        :class = "isDark ? 'order-1 lg:order-1 w-full lg:w-64 flex-shrink-0 bg-gray-800'
               :'w-full lg:w-64 flex-shrink-0 bg-gray-100'"
      />

      <!-- Main Content -->
      <main
        :class="[
          'flex-1 p-6 order-2 lg:order-2 min-w-0',
          isDark ? 'bg-gray-900 text-black' : 'bg-gray-50 text-black'
        ]"
      >
        <slot />
      </main>

      <!-- Right Sidebar -->
      <SidebarRight
        :class="[
          'order-3 lg:order-3 w-full lg:w-64 flex-shrink-0',
          isDark ? 'bg-gray-800' : 'bg-gray-100'
        ]"
      />

    </div>

    <Footer />
  </div>
</template>


<script>
import { ref } from 'vue'

import Header from '~/components/header.vue'
import SidebarLeft from '~/components/sidebarleft.vue'
import SidebarRight from '~/components/sidebarright.vue'
import Footer from '~/components/footer.vue'
import Adbar from '~/components/adbar.vue'

export default{
  components: {
    Header,
    SidebarLeft,
    SidebarRight,
    Footer,
    Adbar,
  },

  data() {
    return{
      isDark: false,
    }
  },

  computed: {

  },

  methods: {
    toggleDarkMode(){
      this.isDark = !this.isDark
    },
  },
}
</script>

<style>
/* Style for changing Theme */

</style>
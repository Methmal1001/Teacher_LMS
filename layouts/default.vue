<template>
  <div class="flex flex-col min-h-screen">

    <Header />

    <Adbar />
    <div class="flex flex-col lg:flex-row flex-1">

      <!-- Left Sidebar -->
      <SidebarLeft
        class="order-2 lg:order-1
               w-full lg:w-64
               flex-shrink-0"
      />

      <!-- Main Content -->
      <main
        class="flex-1 bg-gray-50 p-6
               order-1 lg:order-2
               min-w-0"
      >
        <slot />
      </main>

      <!-- Right Sidebar -->
      <SidebarRight
        class="order-3 lg:order-3
               w-full lg:w-64
               flex-shrink-0"
      />

    </div>

    <Footer />
  </div>
</template>


<script setup>
import Header from '~/components/header.vue'
import SidebarLeft from '~/components/sidebarleft.vue'
import SidebarRight from '~/components/sidebarright.vue'
import Footer from '~/components/footer.vue'
import Adbar from '~/components/adbar.vue'
</script>

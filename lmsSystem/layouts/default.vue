<template>
  <div class="flex flex-col min-h-screen">
    <Header />

    <div class="flex flex-1">
      <SidebarLeft />
      <main class="flex-1 bg-gray-50 p-6">
        <slot />
      </main>
      <SidebarRight />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Header from '~/components/header.vue'
import SidebarLeft from '~/components/sidebarleft.vue'
import SidebarRight from '~/components/sidebarright.vue'
import Footer from '~/components/footer.vue'
</script>

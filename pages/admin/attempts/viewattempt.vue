<template>
    <section>
        <div class="min-h-screen bg-gray-100 p-6 sm:p-10 ">

          <!-- Header -->
          <div class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-900">
              Attempt Details
            </h1>

            <!-- Search + Add -->
            <div class="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <input v-model="searchQuery" type="text" placeholder="Search by student code or name..."
                class="px-4 py-2 border rounded-lg w-full sm:w-72 focus:ring-2 focus:ring-blue-400" />
              <!-- <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" @click="isAddStudent">
                + Add New Student
              </button> -->
            </div>
          </div>

          <!-- Students Table -->
          <div class="overflow-x-auto bg-white rounded-xl shadow-md">
            <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
              <table class="w-full text-sm text-left rtl:text-right text-body">
                <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <input id="table-checkbox-27" type="checkbox" value=""
                          class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-27" class="sr-only">Table checkbox</label>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Student No
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Student name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Completed Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                    <td class="w-4 p-4">
                      <div class="flex items-center">
                        <input id="table-checkbox-28" type="checkbox" value=""
                          class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-28" class="sr-only">Table checkbox</label>
                      </div>
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                      Reg0001
                    </th>
                    <td class="px-6 py-4">
                      Thilini Perera
                    </td>
                    <td class="px-6 py-4">
                      11/02/2026
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex">
                        <a href="#" class="font-medium text-fg-brand hover:underline mr-2 p-2 bg-blue-200"
                          @click="isViewAttempt">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                            <path
                              d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path
                              d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                          </svg>
                        </a>
                        <a href="#" class="font-medium text-fg-brand hover:underline p-2 bg-red-200">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                            <path
                              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                    <td class="w-4 p-4">
                      <div class="flex items-center">
                        <input id="table-checkbox-28" type="checkbox" value=""
                          class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                        <label for="table-checkbox-28" class="sr-only">Table checkbox</label>
                      </div>
                    </td>
                    <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                      Reg0002
                    </th>
                    <td class="px-6 py-4">
                      Nuwan Perera
                    </td>
                    <td class="px-6 py-4">
                      10/02/2026
                    </td>
                    <td class="px-6 py-4">
                      <div class="flex">
                        <a href="#" class="font-medium text-fg-brand hover:underline mr-2 p-2 bg-blue-200"
                          @click="isViewEssay(attempt)">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                            <path
                              d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                            <path
                              d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                          </svg>
                        </a>
                        <a href="#" class="font-medium text-fg-brand hover:underline p-2 bg-red-200">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                            <path
                              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                            <path
                              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                          </svg>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              
              <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between p-4"
                aria-label="Table navigation">
                <span class="text-sm font-normal text-body mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span
                    class="font-semibold text-heading">1-10</span> of <span
                    class="font-semibold text-heading">1000</span></span>
                <ul class="flex -space-x-px text-sm">
                  <li>
                    <a href="#"
                      class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-s-base text-sm px-3 h-9 focus:outline-none">Previous</a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">1</a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">2</a>
                  </li>
                  <li>
                    <a href="#" aria-current="page"
                      class="flex items-center justify-center text-fg-brand bg-brand-softer box-border border border-default-medium hover:bg-brand-soft hover:text-fg-brand font-medium text-sm w-9 h-9 focus:outline-none">3</a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">...</a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium text-sm w-9 h-9 focus:outline-none">5</a>
                  </li>
                  <li>
                    <a href="#"
                      class="flex items-center justify-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading font-medium rounded-e-base text-sm px-3 h-9 focus:outline-none">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
         
          <!-- ================= MODAL ================= -->
          <transition name="modal">
            <div v-if="selectedAttempt" class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
              @click.self="closeModal">
              <div class="relative bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
                <!-- Modal Header -->
                <div class="sticky top-0 bg-white border-b p-4 flex justify-between items-center z-10">
                  <h2 class="text-xl font-semibold text-gray-800">
                    {{ activeModal === 'attemptmcq' ? 'Attempt - ' : activeModal === 'attemptessay' ? 'Attempt -' : activeModal === 'lecturerEdit' ? 'Edit Lecturer' : '' }}
                  </h2>

                  <!-- Close Button -->
                  <button @click="closeModal" class="text-gray-500 hover:text-gray-800 transition">
                    ✕
                  </button>
                </div>

                <!-- Modal Body -->
                <div class="p-6">
                  <!-- ================= VIEW Attempt MCQ MODAL ================= -->
                  <AdminAttemptMcqView v-if="activeModal === 'attemptmcq'" @close="closeModal" />
                  <!-- ================= VIEW Attempt Essay MODAL ================= -->
                  <AdminAttemptEssayView v-if="activeModal === 'attemptessay'" @close="closeModal" />
                </div>
              </div>
            </div>
          </transition>
        </div>
    </section>
</template>

<script>
import AdminAttemptMcqView from '~/components/admin/attempt/AdminAttemptMcqView.vue'
import AdminAttemptEssayView from '~/components/admin/attempt/AdminAttemptEssayView.vue' 

definePageMeta({
  layout: 'adminlayout',
  title: 'Admin Dashboard'
});

export default{
  components:{
    AdminAttemptMcqView,
    AdminAttemptEssayView
  },

  data(){
    return{
      activeModal:null,
      selectedAttempt:null,
    }
  },

  methods:{
    isViewAttempt(attempt){
      this.selectedAttempt = attempt
      this.activeModal = 'attemptmcq'
      document.body.classList.add('overflow-hidden')
      window.addEventListener('keydown', this.handleEsc)
    },
    isViewEssay(attempt){
      this.selectedAttempt = attempt
      this.activeModal = 'attemptessay'
      document.body.classList.add('overflow-hidden')
      window.addEventListener('keydown', this.handleEsc)
    },

     closeModal() {
      this.selectedAttempt = null
      this.activeModal = null
      document.body.classList.remove('overflow-hidden')
      window.removeEventListener('keydown', this.handleEsc)
    },

    handleEsc(e) {
      if (e.key === 'Escape') this.closeModal()
    },
  }
}
</script>
<template>
  <div>
    <!-- Assignment NavBar -->
    <AssignmentNavBar 
    @add-assignment="addAssignment"
    @view-assignment="viewAssignment" 
    @view-attempts="viewattempts" />

    <div v-if="isView" class="space-y-4 mt-6 max-h-[500px] overflow-y-auto">
        <details @click="closeCollapse" class="group border border-gray-200 rounded-lg overflow-hidden">
            <summary class="flex justify-between items-center cursor-pointer px-5 py-4 bg-gray-50 hover:bg-gray-100 transition-colors">
            <span class="font-medium text-gray-800">Assignment #1: Project Setup</span>
            <span class="transition-transform group-open:rotate-180">
                ▼
            </span>
            </summary>
            <div class="px-5 py-6 bg-white space-y-6">
                <div class="flex flex-wrap items-center gap-3 sm:gap-4">
                    <button
                        @click="viewattempts"
                        class="inline-flex items-center gap-2 px-4 py-2 text-sm sm:px-5 sm:py-2.5 rounded-lg bg-yellow-600 text-white hover:bg-yellow-700 transition font-medium whitespace-nowrap"
                    >
                        View Attempts
                        <span class="bg-white text-gray-900 text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full min-w-[1.6rem] sm:min-w-[2rem] flex items-center justify-center">10</span>
                    </button>
                    <button
                        @click="editAssignment"
                        class="px-4 py-2 text-sm sm:px-5 sm:py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium whitespace-nowrap"
                    >
                        Edit Assignment
                    </button>
                    <div v-if="isAttempt">
                        <input type="text" placeholder="Search by student code or name..."
                            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none w-full sm:w-72 md:w-80 lg:w-96" />
                    </div>
                </div>
                <!-- Edit Assignment -->
                <AssignmentEdit v-if="isEdit" @close="$emit('close')" />
                <!-- View Assignment -->
                <AssignmentSingleView v-if="isSingleView" @close="$emit('close')" />
                <!-- View Attempt -->
                <ViewAttempt v-if="isAttempt" @close="$emit('close')" />
            </div>
        </details>
        <details @click="closeCollapse" class="group border border-gray-200 rounded-lg overflow-hidden">
            <summary class="flex justify-between items-center cursor-pointer px-5 py-4 bg-gray-50 hover:bg-gray-100 transition-colors">
            <span class="font-medium text-gray-800">Assignment #1: Project Setup</span>
            <span class="transition-transform group-open:rotate-180">
                ▼
            </span>
            </summary>
            <div class="px-5 py-6 bg-white space-y-6">
                <div class="flex flex-wrap items-center gap-3 sm:gap-4">
                    <button
                        @click="viewattempts"
                        class="inline-flex items-center gap-2 px-4 py-2 text-sm sm:px-5 sm:py-2.5 rounded-lg bg-yellow-600 text-white hover:bg-yellow-700 transition font-medium whitespace-nowrap"
                    >
                        View Attempts
                        <span class="bg-white text-gray-900 text-xs font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full min-w-[1.6rem] sm:min-w-[2rem] flex items-center justify-center">10</span>
                    </button>
                    <button
                        @click="editAssignment"
                        class="px-4 py-2 text-sm sm:px-5 sm:py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition font-medium whitespace-nowrap"
                    >
                        Edit Assignment
                    </button>
                    <div v-if="isAttempt">
                        <input type="text" placeholder="Search by student code or name..."
                            class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none w-full sm:w-72 md:w-80 lg:w-96" />
                    </div>
                </div>
                <!-- Edit Assignment -->
                <AssignmentEdit v-if="isEdit" @close="$emit('close')" />
                <!-- View Assignment -->
                <AssignmentSingleView v-if="isSingleView" @close="$emit('close')" />
                <!-- View Attempt -->
                <ViewAttempt v-if="isAttempt" @close="$emit('close')" />
            </div>
        </details>
    </div>

    <!-- Add Assignment -->
    <AssignmentAdd v-if="isAdd" @close="$emit('close')" />
    
    
  </div>
</template>

<script>
import AssignmentNavBar from '~/components/custom/AssignmentNavBar.vue'
import AssignmentAdd from '~/components/assignment/AssignmentAdd.vue'
import AssignmentEdit from '~/components/assignment/AssignmentEdit.vue'
import AssignmentSingleView from '~/components/assignment/AssignmentSingleView.vue'
import ViewAttempt from '~/components/attempt/ViewAttempt.vue'
import Dropdown from '../custom/Dropdown.vue';

export default {
    components:{
        AssignmentNavBar,
        AssignmentAdd,
        Dropdown,
        ViewAttempt,
        AssignmentEdit,
        AssignmentSingleView,
    },
  props: [],
  data() {
    return {
        isAdd:false,
        isView:true,
        isEdit:false,
        isAttempt:false,
        isSingleView:true,
        types: ['MCQ', 'Essay'],
        modules: ['Binary', 'Logic Gates'],
    }
  },
  methods: {
    addAssignment(){
        this.isAdd = true
        this.isView = false
        this.isAttempt = false
    },
    viewAssignment(){
        this.isView = true
        this.isAdd = false
        this.isAttempt = false
    },
    viewattempts(){
        this.isAttempt = true
        this.isEdit = false
        this.isSingleView = false
    },
    editAssignment(){
        this.isEdit = true
        this.isSingleView = false
        this.isAttempt = false
    },
    singleAssignmentView(){
        this.isSingleView = true
        this.isEdit = false
        this.isAttempt = false
    },
  }
}
</script>

<style scoped>

</style>

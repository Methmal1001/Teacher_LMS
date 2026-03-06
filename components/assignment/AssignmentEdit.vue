<template>
  <section>
    <!-- Title & Description (side by side on larger screens) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
                type="text"
                id="title"
                placeholder="Enter assignment name"
                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
        </div>

        <div>
        <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Assignment Description</label>
        <textarea
            id="description"
            rows="4"
            placeholder="Brief description..."
            class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
        </div>

        <!-- Module -->
        <div>
            <label for="type" class="block text-sm font-medium text-gray-700 mb-1">Assignment Module</label>
            <select
                id="type"
                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                <option selected>Select module</option>
                <Dropdown :selections="modules"/>
            </select>
        </div>

        <!-- Assignment Type & Passing Score -->
        <div>
            <label for="type" class="block text-sm font-medium text-gray-700 mb-1">Assignment Type</label>
            <select
                id="type"
                class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                <option selected>Select type</option>
                <Dropdown :selections="types"/>
            </select>
        </div>

        <div>
        <label for="passing-score" class="block text-sm font-medium text-gray-700 mb-1">Passing Score</label>
        <input
            type="number"
            id="passing-score"
            placeholder="Enter passing score"
            min="0"
            class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        </div>

        <!-- Duration & Due Date -->
        <div>
        <label for="duration" class="block text-sm font-medium text-gray-700 mb-1">Duration (minutes)</label>
        <input
            type="number"
            id="duration"
            placeholder="Enter duration minutes"
            min="1"
            class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        </div>

        <div>
        <label for="due-date" class="block text-sm font-medium text-gray-700 mb-1">Assignment Due Date *</label>
        <input
            type="date"
            id="due-date"
            class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        </div>

        <!-- Files -->
        <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Assignment Paper *</label>
        <div class="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <label class="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Choose Files
            <input type="file" class="hidden" />
            </label>
            <span class="ml-3 text-gray-500">No file chosen</span>
        </div>
        </div>

        <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Answer Paper (Optional)</label>
        <div class="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <label class="cursor-pointer bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition">
            Choose File
            <input type="file" class="hidden" />
            </label>
            <span class="ml-3 text-gray-500">No file chosen</span>
        </div>
        </div>

        <!-- Publish Checkbox -->
        <div class="flex items-center">
            <input
            type="checkbox"
            id="publish"
            class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label for="publish" class="ml-2 text-sm text-gray-700">
            Want to publish the assignment?
            </label>
        </div>
    </div>
    <!-- Actions -->
    <div class="flex justify-end gap-4 mt-6">
    <button
        @click="closeThisDetails($event)"
        class="px-5 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
    >
        Cancel
    </button>

    <button
        @click="submitAssignment"
        class="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
    >
        Update Assignment
    </button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    
  },

  data() {
    return {
      modules: ['Decimal','Equation','Matrix'],
      types: ['MCQ','Essay'],
    }
  },

  computed: {
    
  },

  watch: {
    
  },

  methods: {
    closeThisDetails(event) {
        // Find the nearest <details> ancestor
        let details = event.target.closest('details');
        if (details) {
        details.removeAttribute('open');
        // Optional: scroll back to top of this item
        details.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
  },
}
</script>

<style scoped>
.form-label {
  @apply block text-sm font-medium text-gray-700 mb-1;
}
.form-input {
  @apply w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400;
}
</style>

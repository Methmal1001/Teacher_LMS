<template>
    <section>
        <nav aria-label="Tabs" class="flex mb-2">
            <button @click="$emit('view-assignment')"  class="inline-block px-5 py-3 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition-colors">
                All Assignments
            </button>
            <button @click="$emit('add-assignment')"  class="inline-block px-5 py-3 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition-colors">
                + Add Assignment
            </button>
        </nav>
    </section>
</template>

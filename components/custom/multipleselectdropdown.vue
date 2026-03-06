<template>
    <section>
        <div class="relative" ref="dropdownContainer"> <!-- ← this is the most important line -->

            <!-- Clickable area (tags + placeholder) -->
            <div @click="open = true"
                class="min-h-[42px] border border-gray-300 rounded-lg focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500 bg-white cursor-pointer">
                <div class="flex flex-wrap gap-2 p-2 pb-1">
                    <!-- your selected tags here -->
                    <span v-for="item in selectedValues" :key="item"
                        class="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium text-teal-800 bg-teal-100 rounded-full">
                        {{ item }}
                        <button @click="removeItem(item)"
                            class="ml-1 text-teal-600 hover:text-teal-800 focus:outline-none" aria-label="Remove">
                            ×
                        </button>
                    </span>

                    <!-- Placeholder when nothing selected -->
                    <span v-if="selectedValues.length === 0 && !open" class="text-gray-400 text-sm py-1 px-1">
                        Select brands (at least 2, up to 15)
                    </span>
                </div>
                <!-- Small helper text below tags -->
                <div class="px-3 pb-2 text-xs text-gray-500">
                    {{ selectedValues.length }} selected
                    <span v-if="selectedValues.length < 2" class="text-amber-600">
                        • minimum 2 required
                    </span>
                    <span v-if="selectedValues.length >= 15" class="text-red-600">
                        • maximum reached
                    </span>
                </div>
            </div>

            <!-- Dropdown – now positioned correctly relative to the .relative parent -->
            <div v-if="open"
                class="mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50 absolute w-full left-0">
                <div class="p-1">
                    <button v-for="item in arrSelections" :key="item" @click="toggleItem(item)"
                        :disabled="selectedValues.length >= 15 && !selectedValues.includes(item)"
                        class="w-full text-left px-4 py-2.5 text-sm rounded hover:bg-teal-50 flex items-center justify-between"
                        :class="{
                            'bg-teal-50 font-medium text-teal-800': selectedValues.includes(item),
                            'opacity-50 cursor-not-allowed': selectedValues.length >= 15 && !selectedValues.includes(item)
                        }">
                        {{ item }}
                        <span v-if="selectedValues.includes(item)" class="text-teal-600">✓</span>
                    </button>
                </div>
            </div>

        </div>

    </section>
</template>

<script>

export default {
    props: {
        arrSelections: {
            type: Array,
            default: []
        }
    },

    data() {
        return {
            selectedValues: [],
            open: false,
        }
    },

    mounted() {
        document.addEventListener('click', this.handleOutsideClick)
    },

    beforeDestroy() {
        document.removeEventListener('click', this.handleOutsideClick)
    },

    methods: {
        toggleItem(item) {
            if (this.selectedValues.includes(item)) {
                this.selectedValues.value = this.selectedValues.filter(b => b !== item)
            } else if (this.selectedValues.length < 15) {
                this.selectedValues.push(item)
            }
        },
        removeItem(item) {

            this.selectedValues = this.selectedValues.filter(b => b !== item)
        },

        handleOutsideClick(event) {
        // If click is inside our component → do nothing
        if (this.$refs.dropdownContainer && this.$refs.dropdownContainer.contains(event.target)) {
            return
        }
        // Click was outside → close
        this.open = false
        }
    }
}
</script>

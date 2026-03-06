<template>
    <section>
        <ul class="space-y-1.5">
            <li v-for="file in files" :key="file.id || file.name">
                <a
                    :href="file.url"
                    target="_blank"
                    download
                    class="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2"
                    >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                    {{ file.name || 'Assignment Paper' }}
                </a>
            </li>
        </ul>
    </section>
</template>

<script>
export default{
    props:{
        files:{
            type: Array,
            default: []
        }
    },
}</script>
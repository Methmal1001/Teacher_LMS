<template>
    <section>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 px-3 py-2 shadow-lg">
            <div class="flex gap-6">
                <div class="font-medium">Title: </div>
                <div>Logic Gates Assignment</div>
            </div>
            <div class="flex gap-6">
                <div class="font-medium">Description: </div>
                <div>About Logic Gates</div>
            </div>
            <div class="flex gap-6">
                <div class="font-medium">Module: </div>
                <div>Logic Gates</div>
            </div>
            <div class="flex gap-6">
                <div class="font-medium">Type: </div>
                <div>MCQ</div>
            </div>
             <div class="flex gap-6">
                <div class="font-medium">Passing Score: </div>
                <div>65%</div>
            </div>
            <div class="flex gap-6">
                <div class="font-medium">Duration(minutes): </div>
                <div>60</div>
            </div>
            <div class="flex gap-6">
                <div class="font-medium">Due Date: </div>
                <div>03/03/2026</div>
            </div>
            <div class="flex gap-6">
                <div class="font-medium">Paper: </div>
                <div>
                    <DownloadableFile :files="paperFiles"/>
                </div>
            </div>
            <div class="flex gap-6">
                <div class="font-medium">Answers: </div>
                <div>
                    <DownloadableFile :files="paperFiles"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import DownloadableFile from '~/components/custom/DownloadableFile.vue'
export default{
    components:{
        DownloadableFile,
    },
    data() {
        return {
            paperFiles: [
                { name: 'assignment1.pdf', url: 'https://your-server.com/files/assignment1.pdf' },
                { name: 'instructions.docx', url: 'https://your-server.com/files/instructions.docx' }
            ]
            }
        }
}
</script>
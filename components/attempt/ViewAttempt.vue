<template>
    <section>
        <div class="overflow-x-auto border border-gray-200 rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student No
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Student Name
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Completed Date
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Answered File
                        </th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Score
                        </th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Reg0001
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Nuwan Perera
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            14/02/2026
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <DownloadableFile :files="paperFiles" />
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <button
                                @click="editAssignment"
                                class="px-2 py-1 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                            >
                                Calculate
                            </button>
                            <button
                                @click="editAssignment"
                                class="px-2 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                            >
                                Re-Calculate
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Reg0001
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Nuwan Perera
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            14/02/2026
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <DownloadableFile :files="paperFiles" />
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <button
                                @click="editAssignment"
                                class="px-2 py-1 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                            >
                                Calculate
                            </button>
                            <button
                                @click="editAssignment"
                                class="px-2 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                            >
                                Re-Calculate
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Reg0001
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Nuwan Perera
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            14/02/2026
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <DownloadableFile :files="paperFiles" />
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <button
                                @click="editAssignment"
                                class="px-2 py-1 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                            >
                                Calculate
                            </button>
                            <button
                                @click="editAssignment"
                                class="px-2 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                            >
                                Re-Calculate
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
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
                { name: 'Answers.pdf', url: 'https://your-server.com/files/assignment1.pdf' },
            ]
            }
        }
}
</script>
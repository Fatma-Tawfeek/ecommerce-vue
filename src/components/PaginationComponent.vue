<template>
    <nav aria-label="Page navigation example">
        <ul class="flex items-center -space-x-px h-10 text-base">
            <li
                @click="emit('changePage', metaData.currentPage - 1)"
                :class="{ 'pointer-events-none opacity-50': metaData.currentPage === 1 }"
            >
                <a
                    href="#"
                    class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    <span class="sr-only">Previous</span>
                    <svg
                        class="w-3 h-3 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                </a>
            </li>
            <li v-for="i in metaData.numberOfPages" :key="i">
                <a
                    href="#"
                    class="flex items-center justify-center px-4 h-10 leading-tight border dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    :class="[
                        i === metaData.currentPage
                            ? ' text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700'
                            : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700',
                    ]"
                    @click="emit('changePage', i)"
                    >{{ i }}</a
                >
            </li>
            <li
                @click="emit('changePage', metaData.currentPage + 1)"
                :class="{
                    'pointer-events-none opacity-50':
                        metaData.currentPage === metaData.numberOfPages,
                }"
            >
                <a
                    href="#"
                    class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    <span class="sr-only">Next</span>
                    <svg
                        class="w-3 h-3 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const props = defineProps(["metaData"]);

const emit = defineEmits(["changePage"]);
</script>

<style lang="scss" scoped></style>

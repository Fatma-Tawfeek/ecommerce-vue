<template>
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <div class="mx-auto max-w-5xl">
                <div class="gap-4 sm:flex sm:items-center sm:justify-between">
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                        My orders
                    </h2>
                </div>
                <div class="mt-6 flow-root sm:mt-8">
                    <div class="divide-y divide-gray-200 dark:divide-gray-700">
                        <div
                            class="flex flex-wrap items-center gap-y-4 py-6"
                            v-for="order in ordersList"
                        >
                            <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                <dt class="text-base font-medium text-gray-500 dark:text-gray-400">
                                    Order ID:
                                </dt>
                                <dd
                                    class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white"
                                >
                                    <a href="#" class="hover:underline">#{{ order.id }}</a>
                                </dd>
                            </dl>

                            <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                <dt class="text-base font-medium text-gray-500 dark:text-gray-400">
                                    Date:
                                </dt>
                                <dd
                                    class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white"
                                >
                                    {{
                                        new Date(order.createdAt).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })
                                    }}
                                </dd>
                            </dl>

                            <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                <dt class="text-base font-medium text-gray-500 dark:text-gray-400">
                                    Price:
                                </dt>
                                <dd
                                    class="mt-1.5 text-base font-semibold text-gray-900 dark:text-white"
                                >
                                    ${{ order.totalOrderPrice }}
                                </dd>
                            </dl>

                            <dl class="w-1/2 sm:w-1/4 lg:w-auto lg:flex-1">
                                <dt class="text-base font-medium text-gray-500 dark:text-gray-400">
                                    Status:
                                </dt>
                                <dd
                                    v-if="order.isPaid"
                                    class="me-2 mt-1.5 inline-flex items-center rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
                                >
                                    <svg
                                        class="me-1 h-3 w-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M5 11.917 9.724 16.5 19 7.5"
                                        />
                                    </svg>
                                    Paid
                                </dd>
                                <dd
                                    v-else
                                    class="me-2 mt-1.5 inline-flex items-center rounded bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:bg-red-900 dark:text-red-300"
                                >
                                    <i class="fa-solid fa-xmark mr-1"></i>
                                    Unpaid
                                </dd>
                            </dl>

                            <div
                                class="w-full grid sm:grid-cols-2 lg:flex lg:w-64 lg:items-center lg:justify-end gap-4"
                            >
                                <RouterLink
                                    :to="{ name: 'products' }"
                                    type="button"
                                    class="w-full rounded-lg bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 lg:w-auto"
                                >
                                    Order again
                                </RouterLink>
                                <button
                                    type="button"
                                    class="w-full inline-flex justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 lg:w-auto"
                                >
                                    View details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <loading
        v-model:active="isLoading"
        :can-cancel="true"
        :on-cancel="onCancel"
        :is-full-page="fullPage"
        color="#00b207"
    />
</template>

<script setup>
import { useAuthStore } from "@/stores/AuthStore";
import axios from "axios";
import { onMounted, ref } from "vue";
import Loading from "vue-loading-overlay";

const showModal = ref(false);

const ordersList = ref([]);
const isLoading = ref(false);
const authStore = useAuthStore();

function getOrders() {
    isLoading.value = true;
    axios
        .get(`https://ecommerce.routemisr.com/api/v1/orders/user/${authStore.user.id}`)
        .then((res) => {
            ordersList.value = res.data;
            isLoading.value = false;
        })
        .catch((error) => {
            console.log(error);
            isLoading.value = false;
        });
}

onMounted(() => getOrders());
</script>

<style lang="scss" scoped></style>

<template>
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                Wishlist
            </h2>
            <div
                class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
                v-if="wishlistStore.wishlistItems?.length > 0"
            >
                <div
                    class="rounded-lg border border-gray-200 bg-white p-4 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 md:p-6"
                    v-for="product in wishlistStore.wishlistItems"
                    :key="product.id"
                >
                    <div
                        class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0"
                    >
                        <a href="#" class="shrink-0 md:order-1">
                            <img
                                class="h-20 w-20 dark:hidden"
                                :src="product.imageCover"
                                alt="imac image"
                            />
                        </a>

                        <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                            <RouterLink
                                :to="`/productDetails/${product._id}`"
                                class="text-base font-medium text-gray-900 hover:underline dark:text-white"
                                >{{ product.title }}</RouterLink
                            >

                            <div class="flex items-center gap-4">
                                <button
                                    @click="cartStore.addToCart(product)"
                                    type="button"
                                    class="inline-flex cursor-pointer items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                                >
                                    <i class="fa-solid fa-cart-shopping me-1.5"></i>
                                    Add to Cart
                                </button>

                                <button
                                    type="button"
                                    class="inline-flex items-center cursor-pointer text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                    @click="wishlistStore.removeWishlistItem(product._id)"
                                >
                                    <svg
                                        class="me-1.5 h-5 w-5"
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
                                            d="M6 18 17.94 6M18 18 6.06 6"
                                        />
                                    </svg>
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div
                    class="flex items-center justify-center gap-2 text-sm font-normal text-gray-500 dark:text-gray-400"
                >
                    <span>Wishlist is Empty</span>
                </div>
            </div>
        </div>
    </section>
    <loading
        v-model:active="wishlistStore.isLoading"
        :can-cancel="true"
        :on-cancel="onCancel"
        :is-full-page="fullPage"
        color="#00b207"
    />
</template>

<script setup>
import { useAuthStore } from "@/stores/AuthStore";
import { useCartStore } from "@/stores/CartStore";
import { useWishlistStore } from "@/stores/WishlistStore";
import axios from "axios";
import { onMounted, ref } from "vue";
import Loading from "vue-loading-overlay";
import { RouterLink } from "vue-router";
import { toast } from "vue3-toastify";

const authStore = useAuthStore();
const cartStore = useCartStore();
const wishlistStore = useWishlistStore();

onMounted(() => {
    wishlistStore.getWishlistItems();
});
</script>

<style lang="scss" scoped></style>

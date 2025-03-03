<template>
    <div
        class="relative overflow-hidden border-1 border-gray-200 rounded-sm p-3 group hover:border-primary hover:shadow-[0_0_12px_rgba(32,181,38,0.3)] transition-all duration-300"
    >
        <div
            class="flex flex-col justify-between gap-2 absolute top-3 -right-10 group-hover:right-3 transition-all duration-300"
        >
            <div v-if="authStore.isAuthenticated">
                <div
                    class="h-[40px] w-[40px] bg-white rounded-full border-1 border-gray-200 flex items-center justify-center cursor-pointer"
                    @click="emit('toggleWishlist', product._id)"
                >
                    <i
                        class="fa-solid fa-heart text-primary"
                        v-if="wishlistStore.isWishlistItem(product._id)"
                    ></i>
                    <i class="fa-regular fa-heart" v-else></i>
                </div>
            </div>
            <RouterLink :to="`/productDetails/${product._id}`">
                <div
                    class="h-[40px] w-[40px] bg-white rounded-full border-1 border-gray-200 flex items-center justify-center cursor-pointer"
                >
                    <i class="fa-regular fa-eye h-[20px] w-[20px]"></i>
                </div>
            </RouterLink>
        </div>
        <RouterLink :to="`/productDetails/${product._id}`">
            <img :src="product.imageCover" alt="" />
        </RouterLink>

        <div class="flex justify-between mt-3">
            <div>
                <RouterLink :to="`/productDetails/${product._id}`">
                    <h3 class="text-gray-700 group-hover:text-primary">
                        {{ product.title.split(" ").slice(0, 2).join(" ") }}
                    </h3>
                </RouterLink>
                <div class="flex items-center gap-2" v-if="product.priceAfterDiscount">
                    <p class="font-[500]">${{ product.priceAfterDiscount }}</p>
                    <p class="text-gray-400 line-through">${{ product.priceAfterDiscount }}</p>
                </div>
                <p class="font-[500]" v-if="!product.priceAfterDiscount">${{ product.price }}</p>
                <div class="flex items-center text-xs mt-1">
                    <p>{{ product.ratingsAverage }}</p>
                    <i
                        class="fa-solid fa-star text-yellow-400"
                        v-for="i in [1, 2, 3, 4, 5].slice(0, product.ratingsAverage)"
                    ></i>
                    <i
                        class="fa-solid fa-star-half-stroke text-yellow-400"
                        v-if="product.ratingsAverage % 1 != 0"
                    ></i>
                    <p>({{ product.ratingsQuantity }} ratings)</p>
                </div>
            </div>
            <div
                class="h-[40px] w-[40px] bg-gray-200 rounded-full flex items-center justify-center cursor-pointer group-hover:bg-primary transition-all duration-300"
                @click="emit('addToCart', product._id)"
            >
                <i
                    class="fa-solid fa-cart-shopping text-lg group-hover:text-white transition-all duration-300"
                ></i>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from "@/stores/AuthStore";
import { useWishlistStore } from "@/stores/WishlistStore";

const props = defineProps(["product"]);

const emit = defineEmits(["addToCart", "addToWishlist"]);

const authStore = useAuthStore();
const wishlistStore = useWishlistStore();
</script>

<style lang="scss" scoped></style>

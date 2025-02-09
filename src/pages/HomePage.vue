<template>
    <section class="py-5">
        <div
            class="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 mx-auto max-w-screen-xl px-4 md:px-0"
        >
            <Carousel v-bind="config" class="w-full h-full">
                <Slide>
                    <img src="../assets/images/Bannar Big.png" alt="" class="w-full h-full" />
                    <div
                        class="absolute top-1/2 left-[5%] md:left-[30%] transform md:-translate-x-1/2 -translate-y-1/2"
                    >
                        <h2 class="text-xl md:text-5xl font-[600] text-white mb-3 md:mb-10">
                            Fresh & Healthy <br />
                            Organic Food
                        </h2>
                        <div class="text-white border-l-2 border-green-200 pl-3 mb-5">
                            <p class="text-sm md:text-xl font-[400] mb-2">
                                Sale up to
                                <span class="rounded px-3 py-1 bg-[#FF8A00]">30% OFF</span>
                            </p>
                            <p class="font-[300] text-sm opacity-80">
                                Free shipping on all your order.
                            </p>
                        </div>
                        <button
                            class="bg-white text-primary font-semibold cursor-pointer rounded-full px-3 py-1 md:px-[32px] md:py-[14px]"
                        >
                            Shop Now <i class="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </Slide>

                <Slide class="rounded-lg h-full overflow-hidden">
                    <img
                        src="../assets/images/slider2.png"
                        alt=""
                        class="w-full h-full object-cover"
                    />
                    <div
                        class="absolute top-1/2 left-[5%] md:left-[30%] transform md:-translate-x-1/2 -translate-y-1/2"
                    >
                        <h2 class="text-xl md:text-5xl font-[600] text-white mb-3 md:mb-10">
                            Fresh & Healthy <br />
                            Organic Food
                        </h2>
                        <div class="text-white border-l-2 border-primary pl-3 mb-5">
                            <p class="text-sm md:text-xl font-[400] mb-2 tracking-wide">
                                Sale up to <br />
                                <span class="text-white">48%</span> OFF
                            </p>
                        </div>
                        <button
                            class="bg-primary text-white font-semibold cursor-pointer rounded-full px-3 py-1 md:px-[32px] md:py-[14px]"
                        >
                            Shop Now <i class="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </Slide>
                <Slide class="rounded-lg h-full overflow-hidden bg-[#EDF2EE] relative">
                    <img src="../assets/images/slider3.png" alt="" class="w-1/2 absolute right-0" />
                    <div
                        class="absolute top-1/2 left-[5%] md:left-[30%] transform md:-translate-x-1/2 -translate-y-1/2"
                    >
                        <h2 class="text-xl md:text-5xl font-[600] text-gray-900 mb-3 md:mb-10">
                            Fresh & Healthy <br />
                            Organic Food
                        </h2>
                        <div class="text-gray-900 mb-5">
                            <p class="text-sm md:text-2xl font-[400] mb-2 tracking-wide">
                                Sale up to
                                <span class="text-[#FF8A00] font-bold">30% OFF</span>
                            </p>
                            <p class="font-[300] text-sm opacity-80 w-1/2 md:w-full">
                                Free shipping on all your order. we deliver, you enjoy
                            </p>
                        </div>
                        <button
                            class="bg-primary text-white font-semibold cursor-pointer rounded-full px-3 py-1 md:px-[32px] md:py-[14px]"
                        >
                            Shop Now <i class="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                    <Pagination />
                </template>
            </Carousel>
            <div class="flex flex-col gap-5">
                <div class="relative">
                    <img src="../assets/images/Bannar.png" alt="" class="w-full" />
                    <div class="absolute top-[10%] left-[8%] transform text-black">
                        <p class="text-sm uppercase font-[500] mb-2">Summer Sale</p>
                        <h2 class="text-2xl font-[600] mb-3">75% OFF</h2>
                        <div class="mb-4">
                            <p class="font-[300] text-sm opacity-80">Only Fruit & Vegetable</p>
                        </div>
                        <button class="text-primary font-semibold cursor-pointer">
                            Shop Now <i class="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
                <div class="relative">
                    <img src="../assets/images/Bannar-2.png" alt="" class="w-full" />
                    <div
                        class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center transform text-white"
                    >
                        <p class="text-sm uppercase font-[500] mb-2">Best Deal</p>
                        <h2 class="text-2xl font-[600] mb-3">Special Products Deal of the Month</h2>
                        <button class="text-primary font-semibold cursor-pointer">
                            Shop Now <i class="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-5 px-3">
        <div
            class="grid grid-cols-1 md:grid-cols-4 gap-5 py-5 mx-auto max-w-screen-xl px-4 rounded shadow-[0_8px_40px_rgba(0,38,3,0.08)] md:p-[40px]"
        >
            <div class="flex items-center">
                <i class="fa-solid fa-truck-fast text-primary text-3xl"></i>
                <div class="ml-3">
                    <p class="text-sm font-[500]">Free Shipping</p>
                    <p class="text-sm font-[300] opacity-80">Free shipping on all your order</p>
                </div>
            </div>
            <div class="flex items-center">
                <i class="fa-solid fa-headset text-primary text-3xl"></i>
                <div class="ml-3">
                    <p class="text-sm font-[500]">Customer Support 24/7</p>
                    <p class="text-sm font-[300] opacity-80">Instant access to Support</p>
                </div>
            </div>
            <div class="flex items-center">
                <i class="fa-solid fa-bag-shopping text-primary text-3xl"></i>
                <div class="ml-3">
                    <p class="text-sm font-[500]">100% Secure Payment</p>
                    <p class="text-sm font-[300] opacity-80">We ensure your money is save</p>
                </div>
            </div>
            <div class="flex items-center">
                <i class="fa-solid fa-box text-primary text-3xl"></i>
                <div class="ml-3">
                    <p class="text-sm font-[500]">Money-Back Guarantee</p>
                    <p class="text-sm font-[300] opacity-80">30 Days Money-Back Guarantee</p>
                </div>
            </div>
        </div>
    </section>

    <!-- categories -->
    <section class="py-5 mx-auto max-w-screen-xl px-3 md:px-0">
        <div class="flex justify-between mb-5">
            <h2 class="text-2xl font-[600]">Popular Categories</h2>
            <router-link to="/products" class="text-primary cursor-pointer">
                View All <i class="fa-solid fa-arrow-right ml-2"></i>
            </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-3">
            <CategoryCard v-for="category in categories" :key="category.id" :category="category" />
        </div>
    </section>

    <!-- products -->
    <section class="py-10 mx-auto max-w-screen-xl px-3 md:px-0">
        <div class="flex justify-between mb-5">
            <h2 class="text-2xl font-[600]">Popular Products</h2>
            <router-link to="/products" class="text-primary cursor-pointer">
                View All <i class="fa-solid fa-arrow-right ml-2"></i>
            </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 gap-3">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
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
import CategoryCard from "@/components/CategoryCard.vue";
import ProductCard from "@/components/ProductCard.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const config = {
    autoplay: 3000,
    pauseAutoplayOnHover: true,
    wrapAround: true,
    itemsToShow: 1,
    gap: 5,
};

const isLoading = ref(false);

const products = ref([]);
const categories = ref([]);

function getProducts() {
    isLoading.value = true;
    axios
        .get("https://ecommerce.routemisr.com/api/v1/products")
        .then((res) => {
            products.value = res.data.data.splice(0, 10);
            isLoading.value = false;
        })
        .catch((err) => {
            console.log(err);
        });
}
function getCategories() {
    axios
        .get("https://ecommerce.routemisr.com/api/v1/categories")
        .then((res) => {
            categories.value = res.data.data;
            console.log(categories.value);
        })
        .catch((err) => {
            console.log(err);
        });
}

onMounted(() => {
    getProducts();
    getCategories();
});
</script>

<style scoped></style>

<template>
    <BreadcrumbComponent>
        <template #default>Products</template>
        <template #second>{{ product.title }}</template>
    </BreadcrumbComponent>
    <section class="py-5 mx-auto max-w-screen-xl px-3 md:px-0">
        <div class="flex flex-col md:flex-row gap-5 items-center justify-between">
            <div class="w-full">
                <Carousel id="gallery" v-bind="galleryConfig" v-model="currentSlide" class="mb-5">
                    <Slide v-for="image in product.images" :key="image.id">
                        <img :src="image" alt="Gallery Image" class="gallery-image" />
                    </Slide>
                </Carousel>

                <Carousel id="thumbnails" v-bind="thumbnailsConfig" v-model="currentSlide">
                    <Slide v-for="image in product.images" :key="image.id">
                        <template #default="{ currentIndex, isActive }">
                            <div
                                :class="['thumbnail', { 'is-active': isActive }]"
                                @click="slideTo(currentIndex)"
                            >
                                <img
                                    :src="image"
                                    alt="Thumbnail Image"
                                    class="thumbnail-image w-full"
                                />
                            </div>
                        </template>
                    </Slide>

                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>
            <div class="w-full">
                <h2 class="text-3xl font-[400]">{{ product.title }}</h2>
                <div class="flex items-center text-xs mt-3">
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
                <div
                    class="flex items-center text-2xl gap-2 mt-3"
                    v-if="product.priceAfterDiscount"
                >
                    <p class="font-[500] text-primary">${{ product.priceAfterDiscount }}</p>
                    <p class="text-gray-400 line-through">${{ product.priceAfterDiscount }}</p>
                </div>
                <p class="font-[500] text-2xl text-primary mt-3" v-if="!product.priceAfterDiscount">
                    ${{ product.price }}
                </p>
                <div class="flex items-center gap-3 mt-3">
                    <span>Brand:</span>
                    <img
                        :src="product.brand?.image"
                        class="h-[50px] border-1 border-gray-200 rounded p-2"
                        alt=""
                    />
                </div>
                <p class="text-gray-400 mt-3">{{ product.description }}</p>
                <div
                    class="flex items-center gap-4 mt-3 border-t-1 border-b-1 py-4 border-gray-200"
                >
                    <button class="btn-primary w-full" @click="cartStore.addToCart(product._id)">
                        Add To Cart <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                    <div v-if="authStore.isAuthenticated">
                        <div @click="wishlistStore.toggleWishlistItem(product._id)">
                            <i
                                v-if="wishlistStore.isWishlistItem(product._id)"
                                class="fa-solid fa-heart text-xl cursor-pointer bg-primary/10 text-primary p-3 rounded-full"
                            ></i>
                            <i
                                v-else
                                class="fa-regular fa-heart text-xl cursor-pointer bg-primary/10 text-primary p-3 rounded-full"
                            ></i>
                        </div>
                    </div>
                </div>
                <p class="font-[500] mt-3">
                    Category:
                    <span class="font-[300] text-gray-400">{{ product.category?.name }}</span>
                </p>
            </div>
        </div>
    </section>

    <section class="py-5 mx-auto max-w-screen-xl px-3 md:px-0">
        <div class="text-center mb-5">
            <h2 class="text-2xl font-[600]">Related Products</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
            <ProductCard
                v-for="relatedProduct in relatedProducts"
                :key="product.id"
                :product="relatedProduct"
                @addToCart="cartStore.addToCart"
            />
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
import BreadcrumbComponent from "@/components/BreadcrumbComponent.vue";
import ProductCard from "@/components/ProductCard.vue";
import axios from "axios";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { useCartStore } from "@/stores/CartStore";
import { useWishlistStore } from "@/stores/WishlistStore";
import { useAuthStore } from "@/stores/AuthStore";

const wishlistStore = useWishlistStore();
const authStore = useAuthStore();

/* product carousel */
const currentSlide = ref(0);

const slideTo = (nextSlide) => (currentSlide.value = nextSlide);

const galleryConfig = {
    itemsToShow: 1,
    wrapAround: true,
    slideEffect: "fade",
    mouseDrag: true,
    touchDrag: true,
    height: 500,
};

const thumbnailsConfig = {
    height: 100,
    itemsToShow: 6,
    wrapAround: true,
    touchDrag: false,
    gap: 10,
};

/* product data */
const route = useRoute();
const id = route.params.id;

const isLoading = ref(false);

const product = ref({});
const relatedProducts = ref([]);
function getProduct() {
    isLoading.value = true;
    axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`).then((res) => {
        product.value = res.data.data;
        getRelatedProducts();
    });
}

function getRelatedProducts() {
    if (!product.value.category) {
        isLoading.value = false;
        return;
    }
    axios
        .get(
            `https://ecommerce.routemisr.com/api/v1/products?category[in]=${product.value.category._id}`
        )
        .then((res) => {
            relatedProducts.value = res.data.data.splice(0, 4);
            isLoading.value = false;
        })
        .catch((err) => {
            console.log(err);
        });
}

/* add to cart */
const cartStore = useCartStore();

onMounted(() => {
    getProduct();
});

watch(
    () => route.params.id,
    (newId, oldId) => {
        if (newId != oldId) {
            getProduct();
        }
    }
);
</script>

<style lang="scss" scoped></style>

<template>
    <BreadcrumbComponent>
        <template #default>Products</template>
    </BreadcrumbComponent>
    <section class="py-5 mx-auto max-w-screen-xl px-3 md:px-0">
        <div class="grid grid-cols-1 md:grid-cols-5 md:flex-row gap-5 items-center justify-between">
            <ProductCard
                v-for="product in productsData.data"
                :key="product.id"
                :product="product"
                @addToCart="cartStore.addToCart"
            />
        </div>

        <PaginationComponent
            class="mt-5 text-center"
            :metaData="productsData.metadata"
            @change-page="getProducts"
            v-if="productsData.metadata"
        />
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
import PaginationComponent from "@/components/PaginationComponent.vue";
import ProductCard from "@/components/ProductCard.vue";
import { useCartStore } from "@/stores/CartStore";
import axios from "axios";
import { onMounted, ref } from "vue";
import Loading from "vue-loading-overlay";

const isLoading = ref(false);
const productsData = ref([]);
const cartStore = useCartStore();

function getProducts(pageNumber = 1) {
    isLoading.value = true;
    axios
        .get(`https://ecommerce.routemisr.com/api/v1/products?page=${pageNumber}`)
        .then((res) => {
            isLoading.value = false;
            productsData.value = res.data;
        })
        .catch((err) => {
            console.log(err);
            isLoading.value = false;
        });
}

onMounted(() => getProducts());
</script>

<style lang="scss" scoped></style>

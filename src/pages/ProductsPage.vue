<template>
    <BreadcrumbComponent>
        <template #default>Products</template>
    </BreadcrumbComponent>
    <section class="py-5 mx-auto max-w-screen-xl px-3 md:px-0">
        <div class="flex flex-col md:flex-row justify-between items-center mb-5">
            <SearchInputComponent @search="searchProducts" class="w-full" />
            <p>
                Showing {{ productsData?.length }} results of
                {{ resultCount }}
            </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-5 md:flex-row gap-5 items-center justify-between">
            <ProductCard
                v-for="product in productsData"
                :key="product.id"
                :product="product"
                @addToCart="cartStore.addToCart"
            />
        </div>

        <PaginationComponent
            class="mt-5"
            :metaData="metaData"
            @change-page="getProducts"
            v-if="metaData"
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
import SearchInputComponent from "@/components/SearchInputComponent.vue";
import { useCartStore } from "@/stores/CartStore";
import axios from "axios";
import { onMounted, ref } from "vue";
import Loading from "vue-loading-overlay";

const isLoading = ref(false);
const productsData = ref([]);
const allProducts = ref([]);
const cartStore = useCartStore();
const metaData = ref({});
const resultCount = ref(0);

function getProducts(pageNumber = 1) {
    isLoading.value = true;
    axios
        .get(`https://ecommerce.routemisr.com/api/v1/products?page=${pageNumber}`)
        .then((res) => {
            isLoading.value = false;
            metaData.value = res.data.metadata;
            resultCount.value = res.data.results;
            productsData.value = res.data.data;
            allProducts.value = res.data.data;
        })
        .catch((err) => {
            console.log(err);
            isLoading.value = false;
        });
}

function searchProducts(searchKeyword) {
    if (!searchKeyword) {
        productsData.value = allProducts.value;
    } else {
        productsData.value = allProducts.value.filter((product) =>
            product.title.toLowerCase().includes(searchKeyword.toLowerCase())
        );
    }
}

onMounted(() => getProducts());
</script>

<style lang="scss" scoped></style>

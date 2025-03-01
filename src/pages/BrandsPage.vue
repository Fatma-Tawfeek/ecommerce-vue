<template>
    <BreadcrumbComponent>
        <template #default>Brands</template>
    </BreadcrumbComponent>
    <section class="py-5 mx-auto max-w-screen-xl px-3 md:px-0">
        <div class="grid grid-cols-1 md:grid-cols-5 md:flex-row gap-5 items-center justify-between">
            <CategoryCard v-for="brand in brandsData.data" :key="brand.id" :category="brand" />
        </div>
        <PaginationComponent
            class="mt-5"
            :metaData="brandsData.metadata"
            @change-page="getBrands"
            v-if="brandsData.metadata"
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
import CategoryCard from "@/components/CategoryCard.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
import Loading from "vue-loading-overlay";

const isLoading = ref(false);
const brandsData = ref([]);

function getBrands(pageNumber = 1) {
    isLoading.value = true;
    axios
        .get(`https://ecommerce.routemisr.com/api/v1/brands?page=${pageNumber}`)
        .then((res) => {
            isLoading.value = false;
            brandsData.value = res.data;
        })
        .catch((err) => {
            console.log(err);
            isLoading.value = false;
        });
}

onMounted(() => getBrands());
</script>

<style lang="scss" scoped></style>

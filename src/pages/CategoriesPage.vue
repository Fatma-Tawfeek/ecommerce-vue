<template>
    <BreadcrumbComponent>
        <template #default>Categories</template>
    </BreadcrumbComponent>
    <section class="py-5 mx-auto max-w-screen-xl px-3 md:px-0">
        <div class="grid grid-cols-1 md:grid-cols-5 md:flex-row gap-5 items-center justify-between">
            <CategoryCard
                v-for="category in categoriesData.data"
                :key="category.id"
                :category="category"
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
import CategoryCard from "@/components/CategoryCard.vue";
import { useCartStore } from "@/stores/CartStore";
import axios from "axios";
import { onMounted, ref } from "vue";
import Loading from "vue-loading-overlay";

const isLoading = ref(false);
const categoriesData = ref([]);
const cartStore = useCartStore();

function getCategories() {
    isLoading.value = true;
    axios
        .get("https://ecommerce.routemisr.com/api/v1/categories")
        .then((res) => {
            isLoading.value = false;
            categoriesData.value = res.data;
        })
        .catch((err) => {
            console.log(err);
            isLoading.value = false;
        });
}

onMounted(() => getCategories());
</script>

<style lang="scss" scoped></style>

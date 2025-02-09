<template>
    <div
        class="relative overflow-hidden border-1 border-gray-200 rounded-sm p-3 group hover:border-primary hover:shadow-[0_0_12px_rgba(32,181,38,0.3)] transition-all duration-300"
    >
        <img :src="category.image" class="w-full h-50" alt="" />

        <h3 class="text-gray-900 text-center">{{ category.name }}</h3>
    </div>
</template>

<script setup>
const props = defineProps(["category"]);
</script>

<style lang="scss" scoped></style>

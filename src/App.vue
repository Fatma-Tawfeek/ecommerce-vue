<script setup>
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useAuthStore } from "./stores/AuthStore";
import MainNavbar from "./components/MainNavbar.vue";
import AuthNavbar from "./components/AuthNavbar.vue";
import FooterComponent from "./components/FooterComponent.vue";

const authStore = useAuthStore();
onMounted(() => {
    if (localStorage.getItem("token")) {
        authStore.login(localStorage.getItem("token"));
    }
});
</script>

<template>
    <div>
        <MainNavbar v-if="authStore.isAuthenticated"></MainNavbar>
        <AuthNavbar v-else></AuthNavbar>
        <RouterView :key="$route.fullPath" />
        <FooterComponent></FooterComponent>
    </div>
</template>

<style scoped></style>

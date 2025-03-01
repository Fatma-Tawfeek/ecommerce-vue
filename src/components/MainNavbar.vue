<template>
    <nav class="bg-white border-gray-200 shadow">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="@/assets/images/Logo.svg" class="h-8" alt="Flowbite Logo" />
            </a>
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
                <img
                    src="@/assets/icons/heart.svg"
                    class="border-r-2 border-gray-200 pr-3"
                    alt=""
                />
                <div class="cart flex items-center space-x-2">
                    <RouterLink to="/cart" class="relative">
                        <img src="@/assets/icons/cart.svg" alt="" />
                        <span
                            class="absolute top-0 right-0 bg-primary text-white text-xs w-4 h-4 flex items-center justify-center rounded-full"
                            >{{ cartStore.numOfCartItems }}</span
                        >
                    </RouterLink>
                    <div class="cart-price">
                        <p class="text-xs text-gray-700">Shopping Cart:</p>
                        <p class="text-sm text-gray-900 font-medium">${{ cartStore.totalPrice }}</p>
                    </div>
                </div>
                <p class="text-sm text-gray-600 hover:underline cursor-pointer" @click="logout">
                    Logout
                </p>
            </div>
        </div>
    </nav>
    <nav class="bg-gray-800">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
            <div class="flex items-center justify-between">
                <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                    <li>
                        <router-link
                            to="/"
                            class="text-gray-400 hover:underline"
                            active-class="text-white"
                            aria-current="page"
                            >Home</router-link
                        >
                    </li>
                    <li>
                        <RouterLink
                            to="/products"
                            class="text-gray-400 hover:underline"
                            active-class="text-white"
                            >Products</RouterLink
                        >
                    </li>
                    <li>
                        <a href="#" class="text-gray-400 hover:underline">Categories</a>
                    </li>
                    <li>
                        <a href="#" class="text-gray-400 hover:underline">Brands</a>
                    </li>
                </ul>
                <ul class="hidden md:block">
                    <li class="flex items-center space-x-2 rtl:space-x-reverse">
                        <img src="@/assets/icons/phone.svg" alt="" />
                        <a href="tel:5541251234" class="text-sm text-white hover:underline"
                            >(555) 412-1234</a
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { useAuthStore } from "@/stores/AuthStore";
import { useCartStore } from "@/stores/CartStore";
import { onMounted } from "vue";
import { RouterLink, useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const cartStore = useCartStore();

function logout() {
    authStore.logout();
    localStorage.removeItem("token");
    router.push({ name: "login" });
}

onMounted(() => {
    cartStore.getCartItems();
});
</script>
<style></style>

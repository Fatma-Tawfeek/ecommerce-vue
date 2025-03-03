<template>
    <nav class="bg-white border-gray-200 shadow">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="@/assets/images/Logo.svg" class="h-8" alt="Flowbite Logo" />
            </a>
            <div class="flex items-center space-x-3 rtl:space-x-reverse">
                <RouterLink to="/wishlist">
                    <img
                        src="@/assets/icons/heart.svg"
                        class="border-r-2 border-gray-200 pr-3"
                        alt=""
                    />
                </RouterLink>

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
                <button
                    type="button"
                    class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button"
                    aria-expanded="false"
                    data-dropdown-toggle="user-dropdown"
                    data-dropdown-placement="bottom"
                >
                    <span class="sr-only">Open user menu</span>
                    <img
                        class="w-8 h-8 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                        alt="user photo"
                    />
                </button>
                <!-- Dropdown menu -->
                <div
                    class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                    id="user-dropdown"
                >
                    <div class="px-4 py-3">
                        <span class="block text-sm text-gray-900 dark:text-white">{{
                            authStore.user?.name
                        }}</span>
                        <span class="block text-sm text-gray-500 truncate dark:text-gray-400"
                            >name@flowbite.com</span
                        >
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <RouterLink
                                to="/allorders"
                                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >My Orders</RouterLink
                            >
                        </li>
                        <li>
                            <a
                                @click="logout"
                                class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                >Sign out</a
                            >
                        </li>
                    </ul>
                </div>
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
                        <RouterLink
                            to="/categories"
                            class="text-gray-400 hover:underline"
                            active-class="text-white"
                            >Categories</RouterLink
                        >
                    </li>
                    <li>
                        <RouterLink
                            to="/brands"
                            class="text-gray-400 hover:underline"
                            active-class="text-white"
                            >Brands</RouterLink
                        >
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

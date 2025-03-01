<template>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="@/assets/images/Logo.svg" class="h-8" alt="Flowbite Logo" />
            </a>
            <div class="flex items-center space-x-6 rtl:space-x-reverse">
                <router-link to="/register" class="text-sm text-gray-600 hover:underline">
                    Register</router-link
                >
                <router-link to="/login" class="text-sm text-gray-600 hover:underline"
                    >Login</router-link
                >
            </div>
        </div>
    </nav>
    <nav class="bg-gray-900">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
            <div class="flex items-center justify-between">
                <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                    <li>
                        <RouterLink
                            class="text-gray-400 hover:underline"
                            to="/"
                            active-class="text-white"
                            >Home</RouterLink
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
<script>
import { RouterLink } from "vue-router";
</script>
<style lang=""></style>

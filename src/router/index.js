import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import ProductDetailsPage from "@/pages/ProductDetailsPage.vue";
import ProductPage from "@/pages/ProductPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import { useAuthStore } from "@/stores/AuthStore";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
        },
        {
            path: "/products",
            name: "products",
            component: ProductPage,
        },
        {
            path: "/productDetails/:id",
            name: "product",
            component: ProductDetailsPage,
        },

        {
            path: "/register",
            name: "register",
            component: RegisterPage,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: "/login",
            name: "login",
            component: LoginPage,
            meta: {
                requiresAuth: false,
            },
        },
    ],
});

// router.beforeEach(async (to, from, next) => {
//     const authStore = useAuthStore();
//     if (!authStore.isAuthenticated && to.meta.requiresAuth) {
//         // redirect the user to the login page
//         next({ name: "login" });
//     } else if (authStore.isAuthenticated && !to.meta.requiresAuth) {
//         // redirect the user to the home page
//         next({ name: "home" });
//     } else {
//         next();
//     }
// });

export default router;

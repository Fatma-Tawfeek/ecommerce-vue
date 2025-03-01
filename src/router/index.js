import BrandsPage from "@/pages/BrandsPage.vue";
import CartPage from "@/pages/CartPage.vue";
import CategoriesPage from "@/pages/CategoriesPage.vue";
import ForgetPasswordPage from "@/pages/ForgetPasswordPage.vue";
import HomePage from "@/pages/HomePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import ProductDetailsPage from "@/pages/ProductDetailsPage.vue";
import ProductsPage from "@/pages/ProductsPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import ResetCodePage from "@/pages/ResetCodePage.vue";
import ResetPasswordPage from "@/pages/ResetPasswordPage.vue";
import { useAuthStore } from "@/stores/AuthStore";
import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomePage,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: "/products",
            name: "products",
            component: ProductsPage,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: "/productDetails/:id",
            name: "product",
            component: ProductDetailsPage,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: "/categories",
            name: "categories",
            component: CategoriesPage,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: "/brands",
            name: "brands",
            component: BrandsPage,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: "/cart",
            name: "cart",
            component: CartPage,
            meta: {
                requiresAuth: true,
            },
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
        {
            path: "/forget-password",
            name: "forget-password",
            component: ForgetPasswordPage,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: "/verify-reset-code",
            name: "verify-reset-code",
            component: ResetCodePage,
            meta: {
                requiresAuth: false,
            },
        },
        {
            path: "/reset-password",
            name: "reset-password",
            component: ResetPasswordPage,
            meta: {
                requiresAuth: false,
            },
        },

        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFoundPage,
            meta: { requiresAuth: false },
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 };
    },
});

router.beforeEach(async (to, from, next) => {
    const authStore = useAuthStore();
    if (!authStore.isAuthenticated && to.meta.requiresAuth) {
        // redirect the user to the login page
        next({ name: "login" });
    } else {
        next();
    }
});

export default router;

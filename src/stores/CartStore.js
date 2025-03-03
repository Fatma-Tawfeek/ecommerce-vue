import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";
import router from "@/router";
import { toast } from "vue3-toastify";

export const useCartStore = defineStore("cart", {
    state: () => {
        return {
            cartItems: [],
            isLoading: false,
            numOfCartItems: 0,
            totalPrice: 0,
            cartId: null,
        };
    },
    actions: {
        getCartItems() {
            const authStore = useAuthStore();
            this.isLoading = true;
            axios
                .get("https://ecommerce.routemisr.com/api/v1/cart", {
                    headers: {
                        token: authStore.token,
                    },
                })
                .then((res) => {
                    this.cartItems = res.data.data;
                    this.numOfCartItems = res.data.numOfCartItems;
                    this.totalPrice = res.data.data.totalCartPrice;
                    this.isLoading = false;
                    this.cartId = res.data.cartId;
                })
                .catch((err) => {
                    console.log(err);
                    isLoading.value = false;
                });
        },

        addToCart(productId) {
            this.isLoading = true;
            const authStore = useAuthStore();
            if (!authStore.isAuthenticated) {
                router.push({ name: "login" });
            } else {
                axios
                    .post(
                        "https://ecommerce.routemisr.com/api/v1/cart",
                        {
                            productId: productId,
                        },
                        {
                            headers: {
                                token: authStore.token,
                            },
                        }
                    )
                    .then((res) => {
                        this.isLoading = false;
                        this.getCartItems();
                        toast(res.data.message, {
                            theme: "colored",
                            type: "success",
                            autoClose: 2000,
                            dangerouslyHTMLString: true,
                        });
                    })
                    .catch((err) => {
                        this.isLoading = false;
                        toast(err.response.data.message, {
                            theme: "colored",
                            type: "error",
                            autoClose: 2000,
                            dangerouslyHTMLString: true,
                        });
                    });
            }
        },
    },
});

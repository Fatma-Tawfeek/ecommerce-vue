import axios from "axios";
import { defineStore } from "pinia";
import { useAuthStore } from "./AuthStore";
import { useRouter } from "vue-router";
import { toast } from "vue3-toastify";

export const useWishlistStore = defineStore("wishlist", {
    state: () => {
        return {
            wishlistItems: [],
            isLoading: false,
        };
    },
    actions: {
        getWishlistItems() {
            const authStore = useAuthStore();
            this.isLoading = true;
            axios
                .get("https://ecommerce.routemisr.com/api/v1/wishlist", {
                    headers: {
                        token: authStore.token,
                    },
                })
                .then((res) => {
                    this.wishlistItems = res.data.data;
                    this.isLoading = false;
                })
                .catch((err) => {
                    console.log(err);
                    this.isLoading = false;
                });
        },

        addToWishlist(productId) {
            this.isLoading = true;
            const authStore = useAuthStore();
            const router = useRouter();
            if (!authStore.isAuthenticated) {
                router.push({ name: "login" });
            } else {
                axios
                    .post(
                        "https://ecommerce.routemisr.com/api/v1/wishlist",
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

        removeWishlistItem(id) {
            const authStore = useAuthStore();
            axios
                .delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
                    headers: {
                        token: authStore.token,
                    },
                })
                .then((res) => {
                    this.getWishlistItems();
                    toast("Item removed", {
                        theme: "colored",
                        type: "success",
                        autoClose: 2000,
                        dangerouslyHTMLString: true,
                    });
                })
                .catch((err) => console.log(err));
        },

        isWishlistItem(productId) {
            this.getWishlistItems();
            return this.wishlistItems.some((item) => item._id === productId);
        },

        toggleWishlistItem(productId) {
            if (this.isWishlistItem(productId)) {
                this.removeWishlistItem(productId);
            } else {
                this.addToWishlist(productId);
            }
        },
    },
});

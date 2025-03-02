<template>
    <section class="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <Form
            class="mx-auto max-w-screen-xl px-4 2xl:px-0"
            @submit="checkout"
            :validation-schema="checkoutSchema"
        >
            <ol
                class="items-center flex justify-between w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base"
            >
                <li
                    class="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10"
                >
                    <span
                        class="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden"
                    >
                        <svg
                            class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        Cart
                    </span>
                </li>

                <li
                    class="after:border-1 flex items-center text-primary-700 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block md:w-full xl:after:mx-10"
                >
                    <span
                        class="flex items-center after:mx-2 after:text-gray-200 dark:after:text-gray-500 sm:after:hidden"
                    >
                        <svg
                            class="me-2 h-4 w-4 sm:h-5 sm:w-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                        Checkout
                    </span>
                </li>
            </ol>

            <div class="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
                <div class="min-w-0 flex-1 space-y-8">
                    <div class="space-y-4">
                        <h2 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Delivery Details
                        </h2>

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <div class="mb-2 flex items-center gap-2">
                                    <label
                                        for="select-city-input-3"
                                        class="block text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        City*
                                    </label>
                                </div>
                                <Field v-slot="{ field, meta, errors }" name="city">
                                    <input
                                        v-bind="field"
                                        type="text"
                                        id="select-city-input-3"
                                        class="z-20 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                                        :class="{
                                            'border-red-500 focus:border-red-500':
                                                errors.length > 0,
                                        }"
                                        placeholder="Enter your city"
                                        required
                                    />
                                </Field>
                                <ErrorMessage name="city" class="mt-2 text-xs text-red-600" />
                            </div>

                            <div>
                                <label
                                    for="phone-input-3"
                                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Phone Number*
                                </label>
                                <div class="flex items-center">
                                    <div class="relative w-full">
                                        <Field v-slot="{ field, meta, errors }" name="phone">
                                            <input
                                                v-bind="field"
                                                type="text"
                                                id="phone-input"
                                                class="z-20 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:border-s-gray-700 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500"
                                                :class="{
                                                    'border-red-500 focus:border-red-500':
                                                        errors.length > 0,
                                                }"
                                                placeholder="010xxxxxxxx"
                                                required
                                            />
                                        </Field>
                                        <ErrorMessage
                                            name="phone"
                                            class="mt-2 text-xs text-red-600"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="col-span-2">
                                <label
                                    for="details"
                                    class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Details*
                                </label>
                                <Field v-slot="{ field, meta, errors }" name="details">
                                    <textarea
                                        v-bind="field"
                                        type="details"
                                        id="details"
                                        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                                        :class="{
                                            'border-red-500 focus:border-red-500':
                                                errors.length > 0,
                                        }"
                                        placeholder="Enter your details"
                                        required
                                    ></textarea>
                                    <ErrorMessage
                                        name="details"
                                        class="mt-2 text-xs text-red-600"
                                    />
                                </Field>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Payment method
                        </h3>

                        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                            <div
                                class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
                            >
                                <div class="flex items-start">
                                    <div class="flex h-5 items-center">
                                        <Field
                                            v-slot="{ field, meta, errors }"
                                            name="paymentMethod"
                                        >
                                            <input
                                                v-bind="field"
                                                id="credit-card"
                                                aria-describedby="credit-card-text"
                                                type="radio"
                                                value="creditCard"
                                                class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                checked
                                            />
                                        </Field>
                                    </div>

                                    <div class="ms-4 text-sm">
                                        <label
                                            for="credit-card"
                                            class="font-medium leading-none text-gray-900 dark:text-white"
                                        >
                                            Credit Card
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div
                                class="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800"
                            >
                                <div class="flex items-start">
                                    <div class="flex h-5 items-center">
                                        <Field
                                            v-slot="{ field, meta, errors }"
                                            name="paymentMethod"
                                        >
                                            <input
                                                v-bind="field"
                                                id="pay-on-delivery"
                                                aria-describedby="pay-on-delivery-text"
                                                type="radio"
                                                value="payOnDelivery"
                                                class="h-4 w-4 border-gray-300 bg-white text-primary-600 focus:ring-2 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                            />
                                        </Field>
                                    </div>

                                    <div class="ms-4 text-sm">
                                        <label
                                            for="pay-on-delivery"
                                            class="font-medium leading-none text-gray-900 dark:text-white"
                                        >
                                            Payment on delivery
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                    <div class="flow-root">
                        <div class="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                            <dl class="flex items-center justify-between gap-4 py-3">
                                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Subtotal
                                </dt>
                                <dd class="text-base font-medium text-gray-900 dark:text-white">
                                    ${{ cartStore.totalPrice }}
                                </dd>
                            </dl>

                            <dl class="flex items-center justify-between gap-4 py-3">
                                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Tax
                                </dt>
                                <dd class="text-base font-medium text-gray-900 dark:text-white">
                                    $0
                                </dd>
                            </dl>

                            <dl class="flex items-center justify-between gap-4 py-3">
                                <dt class="text-base font-bold text-gray-900 dark:text-white">
                                    Total
                                </dt>
                                <dd class="text-base font-bold text-gray-900 dark:text-white">
                                    ${{ cartStore.totalPrice }}
                                </dd>
                            </dl>
                        </div>
                    </div>

                    <div class="space-y-3">
                        <button
                            :disabled="isLoading"
                            type="submit"
                            class="flex w-full items-center justify-center cursor-pointer rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            <i class="fa-solid fa-circle-notch fa-spin" v-if="isLoading"></i>
                            <span v-else> Proceed to Payment </span>
                        </button>
                    </div>
                </div>
            </div>
        </Form>
    </section>
</template>

<script setup>
import { useAuthStore } from "@/stores/AuthStore";
import { useCartStore } from "@/stores/CartStore";
import axios from "axios";
import { Field, Form, ErrorMessage } from "vee-validate";
import { ref } from "vue";
import { useRouter } from "vue-router";
import * as Yup from "yup";

const authStore = useAuthStore();
const cartStore = useCartStore();
const router = useRouter();
const isLoading = ref(false);

const checkoutSchema = Yup.object({
    city: Yup.string().required().min(3),
    phone: Yup.string()
        .required()
        .matches(/^01[0|1|2|5]\d{8}$/, "Phone number is not valid"),
    details: Yup.string().required().min(3),
    paymentMethod: Yup.string().required(),
});

function checkout(values) {
    isLoading.value = true;
    if (values.paymentMethod == "creditCard") {
        axios
            .post(
                `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartStore.cartId}?url=http://localhost:5173`,
                {
                    shippingAddress: values,
                },
                {
                    headers: {
                        token: authStore.token,
                    },
                }
            )
            .then((res) => {
                window.location.href = res.data.session.url;
                isLoading.value = false;
            })
            .catch((err) => {
                isLoading.value = false;
                console.log(err);
            });
    } else {
        axios
            .post(
                `https://ecommerce.routemisr.com/api/v1/orders/${cartStore.cartId}`,
                {
                    shippingAddress: values,
                },
                {
                    headers: {
                        token: authStore.token,
                    },
                }
            )
            .then((res) => {
                router.push({ name: "orders" });
                isLoading.value = false;
            })
            .catch((err) => {
                isLoading.value = false;
                console.log(err);
            });
    }
}
</script>

<style lang="scss" scoped></style>

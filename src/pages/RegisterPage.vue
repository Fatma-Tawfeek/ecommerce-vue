<template>
    <BreadcrumbComponent>Register </BreadcrumbComponent>
    <section
        class="p-[24px] rounded-lg shadow-[0_0_56px_rgba(0,38,3,0.08)] border-1 border-gray-200 md:w-1/4 md:mx-auto mx-5 my-15"
    >
        <h1 class="text-center text-2xl font-semibold mb-3">Create Account</h1>
        <div
            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
            v-if="apiError"
        >
            {{ apiError }}
        </div>
        <Form @submit="register" :validation-schema="userSchema">
            <div class="mb-5">
                <Field v-slot="{ field, meta, errors }" name="name">
                    <input
                        v-bind="field"
                        type="text"
                        id="name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-primary block w-full p-2.5"
                        :class="{ 'border-red-500 focus:border-red-500': errors.length > 0 }"
                        placeholder="Name"
                        required
                    />
                </Field>
                <ErrorMessage name="name" class="mt-2 text-xs text-red-600" />
            </div>
            <div class="mb-5">
                <Field v-slot="{ field, meta, errors }" name="email">
                    <input
                        v-bind="field"
                        type="email"
                        id="email"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-primary block w-full p-2.5"
                        :class="{ 'border-red-500 focus:border-red-500': errors.length > 0 }"
                        placeholder="Email"
                        required
                    />
                </Field>
                <ErrorMessage name="email" class="mt-2 text-xs text-red-600" />
            </div>
            <div class="mb-5">
                <Field v-slot="{ field, meta, errors }" name="phone">
                    <input
                        v-bind="field"
                        type="tel"
                        id="phone"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-primary block w-full p-2.5"
                        :class="{ 'border-red-500 focus:border-red-500': errors.length > 0 }"
                        placeholder="Phone"
                        required
                    />
                </Field>
                <ErrorMessage name="phone" class="mt-2 text-xs text-red-600" />
            </div>
            <div class="mb-5">
                <Field v-slot="{ field, meta, errors }" name="password">
                    <input
                        v-bind="field"
                        type="password"
                        id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-primary block w-full p-2.5"
                        :class="{ 'border-red-500 focus:border-red-500': errors.length > 0 }"
                        placeholder="Password"
                        required
                    />
                </Field>
                <ErrorMessage name="password" class="mt-2 text-xs text-red-600" />
            </div>
            <div class="mb-5">
                <Field v-slot="{ field, meta, errors }" name="rePassword">
                    <input
                        v-bind="field"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-0 focus:border-primary block w-full p-2.5"
                        :class="{ 'border-red-500 focus:border-red-500': errors.length > 0 }"
                        placeholder="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        required
                    />
                </Field>
                <ErrorMessage name="rePassword" class="mt-2 text-xs text-red-600" />
            </div>
            <button type="submit" class="btn-primary w-full">
                <i class="fa-solid fa-circle-notch fa-spin" v-if="isLoading"></i>
                <span v-else> Create Account </span>
            </button>
        </Form>
        <p class="text-center mt-5 text-gray-600">
            Already have an account?
            <span class="text-black"> <router-link to="/login">Login</router-link></span>
        </p>
    </section>
</template>
<script setup>
import axios from "axios";
import BreadcrumbComponent from "../components/BreadcrumbComponent.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import { useRouter } from "vue-router";
import { ref } from "vue";
import * as Yup from "yup";

const apiError = ref(null);
const router = useRouter();
const isLoading = ref(false);

const userSchema = Yup.object({
    name: Yup.string().required().min(3),
    email: Yup.string().required().email(),
    phone: Yup.string()
        .required()
        .matches(/^01[0|1|2|5]\d{8}$/, "Phone number is not valid"),
    password: Yup.string()
        .required()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d).{6,15}$/,
            "Password must be at least 6 characters and contain at least one letter and one number"
        ),
    rePassword: Yup.string()
        .required("Password confirm is required")
        .min(6, "Password must be at least 6 characters")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
function register(values) {
    isLoading.value = true;
    axios
        .post("https://ecommerce.routemisr.com/api/v1/auth/signup", values)
        .then((res) => {
            isLoading.value = false;
            router.push({ name: "home" });
            localStorage.setItem("token", res.data.token);
        })
        .catch((err) => {
            console.log(err);
            isLoading.value = false;
            if (err?.response?.data) {
                apiError.value = err?.response?.data?.message;
            } else {
                apiError.value = err?.response.message;
            }
        });
}
</script>
<style></style>

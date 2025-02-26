<template>
    <BreadcrumbComponent>Login </BreadcrumbComponent>
    <section
        class="p-[24px] rounded-lg shadow-[0_0_56px_rgba(0,38,3,0.08)] border-1 border-gray-200 md:w-1/4 md:mx-auto mx-5 my-15"
    >
        <h1 class="text-center text-2xl font-semibold mb-3">Sign In</h1>
        <div
            class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
            v-if="apiError"
        >
            {{ apiError }}
        </div>
        <Form @submit="login" :validation-schema="userSchema">
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

            <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                    <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
                    />
                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900"
                        >Remember me</label
                    >
                </div>

                <a href="#" class="text-sm text-primary hover:underline">Forgot password?</a>
            </div>

            <button type="submit" class="btn-primary w-full">
                <i class="fa-solid fa-circle-notch fa-spin" v-if="isLoading"></i>
                <span v-else> Login </span>
            </button>
        </Form>
        <p class="text-center mt-5 text-gray-600">
            Don't have an account?
            <span class="text-black"> <router-link to="/register">Register</router-link></span>
        </p>
    </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>

<template lang="">
    <section
        class="bg-[url(../assets/images/Breadcrumbs.png)] bg-linear-to-r from-black/70 to-black/0 bg-cover bg-no-repeat bg-center py-10 pl-3"
    >
        <nav class="flex mx-auto max-w-screen-xl" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li class="inline-flex items-center">
                    <a
                        href="#"
                        class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900"
                    >
                        <img src="@/assets/icons/home.svg" alt="" />
                    </a>
                </li>
                <li>
                    <div class="flex items-center">
                        <img src="@/assets/icons/right-arrow.svg" alt="" />
                        <a
                            href="#"
                            class="ml-1 text-sm font-medium md:ml-2"
                            :class="$slots.second ? 'text-gray-500' : 'text-primary'"
                            ><slot></slot
                        ></a>
                    </div>
                </li>
                <li v-if="$slots.second">
                    <div class="flex items-center">
                        <img src="@/assets/icons/right-arrow.svg" alt="" />
                        <a href="#" class="ml-1 text-sm font-medium text-primary md:ml-2"
                            ><slot name="second"></slot
                        ></a>
                    </div>
                </li>
            </ol>
        </nav>
    </section>
</template>
<script>
export default {};
</script>
<style lang=""></style>

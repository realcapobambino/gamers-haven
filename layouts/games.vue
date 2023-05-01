<template>
    <div>
        <!--  -->
        <header class="shadow-sm bg-white">
            <nav class="container mx-auto p-4">
                <nuxt-link to="/" class="font-bold">Gamers' Haven</nuxt-link>

            </nav>
        </header>
        <!-- output page content -->
        <div class="container mx-auto p-4">

            <h2 class="text-2xl mb-7 ">Games</h2>

            <!-- <div class="flex items-center justify-center m-3 ">
                <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg" role="group">
                    <button v-for="c in categories" type="button"
                        class="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">{{ categoty }}</button>

                </div>
            </div> -->
            <slot />
        </div>

        <!-- footer-->
        <div>
            <footer class="container mx-auto p-4 flex justify-between border-t-2">
                <ul class="flex gap-4">
                    <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about">About</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/products">Products</nuxt-link>
                    </li>
                </ul>
            </footer>
        </div>
    </div>
</template>

<script setup>
//
// const { data: categories } = await useFetch('https://fakestoreapi.com/products/categories')

</script>

<style scoped>
.router-link-exact-active {
    color: rgb(0, 240, 240);
}
</style>
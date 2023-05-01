<template>
    <div class="shadow-sm bg-white">
        <header>
            <nav class="container mx-auto p-4 flex justify-between">
                <nuxt-link to="/" class="font-bold">Gamers' Haven</nuxt-link>
                <ul class="flex gap-4">
                    <!-- <li>
                        <nuxt-link to="/">Home</nuxt-link>
                    </li> -->
                    <li>
                        <nuxt-link to="/games">Games</nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about">About</nuxt-link>
                    </li>
                </ul>
            </nav>
        </header>
        <!-- page content  -->
        <div class="container mx-auto p-4">


            <slot />


        </div>
    </div>
</template>


<script>
export default {
    setup() {


        return {}
    }
}
</script>

<style scoped>
.router-link-exact-active {
    color: rgb(100, 100, 255);
}
</style>
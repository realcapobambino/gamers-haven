<template>
    <div>
        <div class="card text-center">
            <!-- <img class="max-h-32 object-cover rounded-t-lg md:rounded-none md:rounded-l-lg mx-auto p-4" :src="game.image"
                alt="" /> -->
            <h5 class="font-bold text-gray-500 m-4 truncate">{{ game.title }}</h5>

            <NuxtLink :to="`games/${game.id}`" type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                View Details</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { game } = defineProps(['game'])

</script>

<style scoped></style>
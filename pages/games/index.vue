<template>
    <div>

        <div class="grid grid-cols-4 gap-3">
            <div v-for="g in games">
                <GameCard :game="g" />
            </div>
        </div>
    </div>
</template>

<script setup>

//
//madoido
definePageMeta({
    layout: 'games',
})

//overide head
useHead({
    title: 'Gamers Haven',
    meta: [
        { name: 'description', content: 'Get Your Free Game Offers' }
    ],
})

//fetch data from api
const { data: games } = await useFetch('https://www.freetogame.com/api/games')

//
</script>

<style scoped>
h2 {
    /* margin-bottom: 20px; */
    font-size: 36px;
}

p {
    margin: 20px 0;
}
</style>
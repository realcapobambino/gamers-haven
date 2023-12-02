<template>
    <div>

        <Head>
            <Title>Gamers' Haven | {{ game.title }}</Title>
            <Meta name="description" :content="game.description">
            </Meta>
        </Head>
        <ProductDetails :game="game" />
    </div>
</template>

<script setup>
//must match to the name of the file in the pages folder (products/[id].vue)
const { id } = useRoute().params

const uri = 'https://fakestoreapi.com/products/' + id
//fetch game
const { data: game } = await useFetch(uri, { key: id })

if (!game.value) {
    throw createError({ statusCode: 404, statusMessage: 'Game not found', fatal: true })
}

definePageMeta({
    layout: 'products',
})

</script>

<style scoped></style>
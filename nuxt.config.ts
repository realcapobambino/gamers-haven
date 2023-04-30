// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Gamers Haven',
            meta: [{
                name: 'description',
                content: '',

            }],
            // fonts?
            link: [{}]
        }
    }

})

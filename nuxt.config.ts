// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxt/ui'],
    // Defaults options
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config',
        exposeConfig: false,
        exposeLevel: 2,
        config: {},
        injectPosition: 'first',
        viewer: true,
    },
    app: {
        head: {
            title: 'Gamers Haven',
            meta: [{
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
                charset: 'utf-8',

            }],
        },
        layoutTransition: {
            name: 'layout',
            mode: 'out-in',
        },
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },
    },
    devServer: {
        url: 'http://localhost:3000',
        port: 3000,
    },
    devtools: { enabled: false },
});
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    // 'animate.css/animate.css',
  ],
  srcDir: 'src/',
  modules: ['@nuxt/image', 'nuxt-swiper'],

  // swiper config
  swiper: {
    bundled: true,
    enableComposables: true,
  },
})

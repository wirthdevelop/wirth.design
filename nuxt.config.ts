// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', 'vuetify-nuxt-module'],
  i18n: {
    locales: [
      {
        code: 'de',
        file: 'de-DE.ts'
      },
      {
        code: 'en',
        file: 'en-US.ts'
      }
    ],
    lazy: true,
    langDir: 'languages',
    defaultLocale: 'de',
  },
})
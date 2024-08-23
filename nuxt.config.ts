// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ["@nuxtjs/i18n", "@nuxt/ui"],
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
    defaultLocale: 'de'
  }
})
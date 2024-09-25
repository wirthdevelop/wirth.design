// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: true,
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
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      display: {
        mobileBreakpoint: 'md',
        thresholds: {
          xs: 0,
          sm: 340,
          md: 540,
          lg: 800,
          xl: 1280,
        },
      },
      defaults: {
        VBtn: {
          class: 'text-none',
        }
      }
    }
  }
})
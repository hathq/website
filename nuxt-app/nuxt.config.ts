// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  $development: {
    debug: true
  },
  typescript: {
    strict: true,
    shim: false,
    typeCheck: true
  },
  modules: ['@nuxt/eslint', '@nuxthub/core'],
})
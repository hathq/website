export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  $development: {
    debug: true
  },
  typescript: {
    strict: true,
    shim: false,
    typeCheck: true,    
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxthub/core',
    '@nuxtjs/tailwindcss',
    'reka-ui/nuxt',
    '@pinia/nuxt',
  ],
  imports: {
    dirs: ['types']
  },
  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },
})
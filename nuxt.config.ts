// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs';
import path from 'path';

export default defineNuxtConfig({
  app: {
    head: {
      script: [{src: 'https://stats.ha-infra.xyz/info.js', async: true, defer: 'true', referrerpolicy: 'unsafe-url', 'data-domain': 'billabear.com'}],
    }
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxtjs/i18n", "@nuxt/content", "@nuxt/image", 'nuxt-rollbar', "@nuxtjs/sitemap", '@nuxtjs/google-fonts'],
  rollbar: {
    serverAccessToken: 'a057384b0e49477994ad8ae9acebde54',
    clientAccessToken: 'd918ae46bc2443c88bc0d5871bb42ca8',
  },
  sitemap: {
    strictNuxtContentPaths: true
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
    locales: [
      {code: 'en', name: 'English'},
      {code: 'es', name: 'Español'},
      {code: 'fr', name: 'Français'},
      {code: 'de', name: 'Deutsch'},
      {code: 'it', name: 'Italiano'},
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  content: {
    highlight: {
      langs: ['php', 'js', 'json', 'shell', 'javascript', 'python', 'vue'],
      theme: 'github-dark',
    }
  },
  googleFonts: {
    families: {
      "DM Serif Text": [400, 500, 600, 700],
      "Open Sans": [400, 500, 600, 700],
    },
    download: false,
    fontsDir: 'assets/fonts'
  }
})

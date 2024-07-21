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
  modules: ["@nuxtjs/i18n", "@nuxt/content", "@nuxt/image"],
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
    locales: ['en', 'de'],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'en',
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
      langs: ['php', 'js', 'vue'],
      theme: 'github-dark',
    }
  }
})

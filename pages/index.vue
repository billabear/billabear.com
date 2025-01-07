<script setup lang="ts">
const { locale, setLocale, t } = useI18n()
useHead({
  title: t('index.browser_title'),
});

</script>

<template>
  <div>
    <PageHero>
      <template v-slot:title>
        {{ $t('pages.landing.hero.title') }}
      </template>
      <template v-slot:subtitle>
        {{ $t('pages.landing.hero.subtitle') }}
      </template>
      <template v-slot:buttons>
        <a href="#" class="block w-36 text-center font-bold rounded-xl bg-white text-black p-2 hover:bg-transparent border-2 border-white hover:text-white">
          {{ $t('pages.landing.hero.book_demo') }}
        </a>
      </template>
      <template v-slot:image>
        <img src="/images/hero/landing.png" alt="Hero Image" />
      </template>
    </PageHero>
    <div class="py-24 container">
      <h2 class="text-4xl text-center">{{ $t('pages.landing.helps_you.title') }}</h2>
    </div>
  </div>
</template>

<style scoped>
</style>

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
        Focus on your business and growth!
      </template>
      <template v-slot:subtitle>
        Offload your billing tasks so you can focus on what makes you great!
      </template>
      <template v-slot:buttons>
        <a href="#" class="block w-36 text-center font-bold rounded-xl bg-white text-black mt-4 p-2 hover:bg-transparent border-2 border-white hover:text-white">Book A Demo</a>
      </template>
      <template v-slot:image>
        <img src="/images/hero/landing.png" alt="Hero Image" />
      </template>
    </PageHero>
    <div>
      
    </div>
  </div>
</template>

<style scoped>
</style>

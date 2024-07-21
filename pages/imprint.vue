<template>
  <div>
    <PageHero>
      <template v-slot:title>
        {{ $t('imprint.title') }}
      </template>
      <template v-slot:subtitle>
      </template>
    </PageHero>
    <div class="relative mt-32 mx-auto max-w-7xl">
      <h1 class="my-12 text-4xl">Humbly Arrogant Software Limited</h1>
      <strong>Director: Iain Cambridge</strong>
      <h2 class="mb-3 font-bold">Address</h2>
      <p>
        71-75 Shelton Street<br />
        Covent Garden<br />
        London<br />
        United Kingdom<br />
        WC2H 9JQ
      </p>
    </div>
  </div>


</template>

<script setup lang="ts">

const {locale, setLocale, t} = useI18n()
useHead({
  title: t('imprint.browser_title'),
});
</script>

<style scoped>

</style>

<template>
    <PageHero>

      <template v-slot:title>
        {{ $t('about.title') }}
      </template>
      <template v-slot:subtitle>
        {{ $t('about.subtitle') }}
      </template>
    </PageHero>
  <div class="mt-12 max-w-7xl mx-auto">
    {{ $t('about.paragraph') }}
  </div>

</template>

<script setup lang="ts">

const {locale, setLocale, t} = useI18n()
useHead({
  title: t('about.browser_title'),
});
</script>

<style scoped>

</style>

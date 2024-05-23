<script setup lang="ts">
const { locale, setLocale, t } = useI18n()
useHead({
  title: t('index.browser_title'),
});
</script>

<template>
  <h1 class="text-3xl font-bold underline">
    {{ $t('index.title') }}
  </h1>
</template>

<style scoped>

</style>

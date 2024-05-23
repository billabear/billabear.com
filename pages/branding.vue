<script setup lang="ts">

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('templates.browser_title'),
});
</script>

<template>
  <div>
    <h1>{{ $t('templates.title') }}</h1>
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">

import DocTemplates from "~/components/features/DocTemplates.vue";
import EmailTemplates from "~/components/features/EmailTemplates.vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('templates.browser_title'),
});
</script>

<template>
  <section class="mx-auto max-w-7xl lg:px-8 my-6">
    <DocTemplates />
    <EmailTemplates />
  </section>
</template>

<style scoped>

</style>

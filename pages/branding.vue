<script setup lang="ts">

import DocTemplates from "~/components/features/DocTemplates.vue";
import EmailTemplates from "~/components/features/EmailTemplates.vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('templates.browser_title'),
});
</script>

<template>
  <section class="">

    <div class="relative pt-16 pb-32 overflow-hidden">
      <div class="relative">
        <DocTemplates />
      </div>
      <div class="mt-24">
        <EmailTemplates />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>

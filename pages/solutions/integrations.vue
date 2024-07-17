<script setup lang="ts">

import IntegrationsOverall from "~/components/features/Integrations/IntegrationsOverall.vue";
const { locale, setLocale, t } = useI18n()
useHead({
  title: t('pages.integrations.browser_title'),
});
</script>

<template>
  <PageHero>
    <template v-slot:title>
      {{ $t('pages.integrations.title') }}
    </template>
    <template v-slot:subtitle>
      {{ $t('pages.integrations.subtitle') }}
    </template>
  </PageHero>
  <div class="mt-24 relative">
    <IntegrationsOverall />
  </div>
</template>

<style scoped>

</style>

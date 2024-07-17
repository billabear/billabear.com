<script setup lang="ts">

import IntegrationsOverall from "~/components/features/Integrations/IntegrationsOverall.vue";
import ReportsOverall from "~/components/features/Reports/ReportsOverall.vue";
const { locale, setLocale, t } = useI18n()
useHead({
  title: t('pages.reports.browser_title'),
});
</script>

<template>
  <PageHero>
    <template v-slot:title>
      {{ $t('pages.reports.title') }}
    </template>
    <template v-slot:subtitle>
      {{ $t('pages.reports.subtitle') }}
    </template>
  </PageHero>
  <div class="mt-24 relative">
    <ReportsOverall />
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
const { locale, setLocale, t } = useI18n()
useHead({
  title: t('pages.tax.browser_title'),
});

import TaxReport from "~/components/features/Tax/TaxReport.vue";
</script>

<template>
  <div>
    <!-- Tax Overall -->
  </div>
  <div>
    <!-- Tax Rules --->
  </div>
  <div class="mt-24">
    <TaxReport />
  </div>
</template>

<style scoped>

</style>

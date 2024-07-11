<script setup lang="ts">
import TaxOverall from "~/components/features/Tax/TaxOverall.vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('pages.tax.browser_title'),
});

import TaxReport from "~/components/features/Tax/TaxReport.vue";
</script>

<template>
  <div>
    <TaxOverall />
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

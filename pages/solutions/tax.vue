<script setup lang="ts">
import TaxOverall from "~/components/features/Tax/TaxOverall.vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('pages.tax.browser_title'),
});

import TaxReport from "~/components/features/Tax/TaxReport.vue";
import TaxRules from "~/components/features/Tax/TaxRules.vue";
import TaxExport from "~/components/features/Tax/TaxExport.vue";
</script>

<template>
  <div>
    <TaxOverall />
  </div>
  <div>
    <TaxRules />
  </div>
  <div class="mt-24">
    <TaxReport />
  </div>
  <div class="mt-24">
    <TaxExport />
  </div>
</template>

<style scoped>

</style>

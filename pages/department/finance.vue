<template>
  <PageHero>
    <template v-slot:title>
      {{ $t('departments.finance.title') }}
    </template>
    <template v-slot:subtitle>
      {{ $t('departments.finance.subtitle') }}
    </template>
  </PageHero>
  <div class="mt-12 overflow-hidden">
    <TaxOverall />
  </div>
  <div class="mt-12 overflow-hidden">
    <ReportsOverall />
  </div>
  <div class="mt-12 overflow-hidden">
    <SubscriptionMassChange />
  </div>
</template>

<script setup lang="ts">
import TaxOverall from "~/components/features/Tax/TaxOverall.vue";
import ReportsOverall from "~/components/features/Reports/ReportsOverall.vue";
import SubscriptionMassChange from "~/components/features/SubscriptionManagement/SubscriptionMassChange.vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('departments.finance.browser_title'),
});
</script>

<style scoped>

</style>

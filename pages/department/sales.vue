<template>
  <PageHero>
    <template v-slot:title>
      {{ $t('departments.sales.title') }}
    </template>
    <template v-slot:subtitle>
      {{ $t('departments.sales.subtitle') }}
    </template>
  </PageHero>
  <div class="mt-24 overflow-hidden">
    <SubscriptionPlanCreation />
  </div>
  <div class="mt-24 overflow-hidden">
    <SubscriptionAddons />
  </div>
  <div class="mt-24 overflow-hidden">
    <QuoteCreate />
  </div>
</template>

<script setup lang="ts">
import SubscriptionAddons from "~/components/features/SubscriptionManagement/SubscriptionAddons.vue";
import SubscriptionPlanCreation from "~/components/features/SubscriptionManagement/SubscriptionPlanCreation.vue";
import QuoteCreate from "~/components/features/Invoices/QuoteCreate.vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('departments.sales.browser_title'),
});
</script>


<style scoped>

</style>

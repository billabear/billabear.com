<script setup lang="ts">

import SubscriptionManagementOverall
  from "~/components/features/SubscriptionManagement/SubscriptionManagementOverall.vue";
import SubscriptionMassChange from "~/components/features/SubscriptionManagement/SubscriptionMassChange.vue";
import SubscriptionCancel from "~/components/features/SubscriptionManagement/SubscriptionCancel.vue";
import SubscriptionPlanCreation from "~/components/features/SubscriptionManagement/SubscriptionPlanCreation.vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('pages.subscription_management.browser_title'),
});
</script>

<template>
  <div class="relative">
    <SubscriptionManagementOverall />
  </div>
  <div class="mt-24">
    <SubscriptionMassChange />
  </div>
  <div class="mt-24">
    <SubscriptionCancel />
  </div>
  <div class="mt-24">
    <SubscriptionPlanCreation />
  </div>
</template>

<style scoped>

</style>

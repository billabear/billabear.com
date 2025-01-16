<script setup lang="ts">

import SubscriptionManagementOverall
  from "~/components/features/SubscriptionManagement/SubscriptionManagementOverall.vue";
import SubscriptionMassChange from "~/components/features/SubscriptionManagement/SubscriptionMassChange.vue";
import SubscriptionCancel from "~/components/features/SubscriptionManagement/SubscriptionCancel.vue";
import SubscriptionPlanCreation from "~/components/features/SubscriptionManagement/SubscriptionPlanCreation.vue";
import SubscriptionAddons from "~/components/features/SubscriptionManagement/SubscriptionAddons.vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('pages.subscription_management.browser_title'),
});
</script>

<template>

  <PageHero>
    <template v-slot:title>
      {{ $t('pages.subscription_management.title') }}
    </template>
    <template v-slot:subtitle>
      {{ $t('pages.subscription_management.subtitle') }}
    </template>
  </PageHero>
  <div class="mt-12 overflow-hidden">
    <SubscriptionManagementOverall />
  </div>
  <div class="mt-12 overflow-hidden">
    <SubscriptionMassChange />
  </div>
  <div class="mt-12 overflow-hidden">
    <SubscriptionCancel />
  </div>
  <div class="mt-12 overflow-hidden">
    <SubscriptionPlanCreation />
  </div>
  <div class="mt-12 overflow-hidden">
    <SubscriptionAddons />
  </div>
  <div class="bg-white">
    <div class="max-w-4xl mx-auto pt-16 px-4 sm:px-6 sm:pt-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">{{ $t('index.last_cta.title') }}</span>
        <span class="text-balance -mb-1 pb-1 block bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{{ $t('index.last_cta.subtitle') }}</span>
      </h2>
      <div class="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
        <a href="https://calendly.com/iain-billabear/30min" class="flex items-center justify-center bg-gradient-to-r from-cyan-600 to-teal-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-cyan-700 hover:to-teal-700">{{ $t('index.last_cta.demo_cta') }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

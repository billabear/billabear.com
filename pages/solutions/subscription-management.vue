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
  <div class="py-28 bg-gradient-to-r from-cyan-600 to-teal-600">
    <div class="mx-auto max-w-4xl">
      <h1 class="text-center text-4xl text-white">
        {{ $t('pages.subscription_management.title') }}
      </h1>
      <h2 class="text-2xl text-center mt-3 text-slate-800" >
        {{ $t('pages.subscription_management.subtitle') }}
      </h2>
      <div class="mt-12 text-center">
        <a href="https://app.sessions.us/book/950e63e2-billabear---demo" target="_blank" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-teal-600 bg-white hover:bg-slate-100">{{ $t('pages.subscription_management.demo') }}</a>
        <a href="https://cloud.billabear.com/signup" target="_blank" class="border border-white ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700"> {{ $t('pages.subscription_management.free_trial') }} </a>

      </div>
    </div>
  </div>
  <div class="mt-24">
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
  <div class="bg-white">
    <div class="max-w-4xl mx-auto pt-16 px-4 sm:px-6 sm:pt-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">{{ $t('index.last_cta.title') }}</span>
        <span class="text-balance -mb-1 pb-1 block bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{{ $t('index.last_cta.subtitle') }}</span>
      </h2>
      <div class="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
        <a href="https://app.sessions.us/book/950e63e2-billabear---demo" class="flex items-center justify-center bg-gradient-to-r from-cyan-600 to-teal-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-cyan-700 hover:to-teal-700">{{ $t('index.last_cta.demo_cta') }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

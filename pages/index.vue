<script setup lang="ts">
import DocTemplates from "~/components/features/Branding/DocTemplates.vue";
import WorkflowOverall from "~/components/features/Workflow/WorkflowOverall.vue";
import SubscriptionManagementOverall
  from "~/components/features/SubscriptionManagement/SubscriptionManagementOverall.vue";
import TaxOverall from "~/components/features/Tax/TaxOverall.vue";
import ReportsOverall from "~/components/features/Reports/ReportsOverall.vue";
import IntegrationsOverall from "~/components/features/Integrations/IntegrationsOverall.vue";
import Branding from "~/pages/solutions/branding.vue";
import BrandingOverall from "~/components/features/Branding/BrandingOverall.vue";
import IntegrationsStripe from "~/components/features/Integrations/IntegrationsStripe.vue";
import TechSdk from "~/components/features/Tech/TechSdk.vue";
const { locale, setLocale, t } = useI18n()
useHead({
  title: t('index.browser_title'),
});

</script>

<template>
  <main>
    <!-- Hero section -->
    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div class="absolute inset-0">
            <img class="h-full w-full object-cover" src="/images/hero-splash.jpg" alt="" />
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-800 to-teal-700 mix-blend-multiply"></div>
          </div>
          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span class="block text-white">{{ $t('index.hero.header.line_one') }}</span>
              <span class="block text-teal-200">{{ $t('index.hero.header.line_two') }}</span>
            </h1>
            <p class="mt-6 max-w-lg mx-auto text-center text-xl text-teal-200 sm:max-w-3xl">{{ $t('index.hero.paragraph') }}</p>
            <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-teal-700 bg-white hover:bg-teal-50 sm:px-8">{{ $t('index.hero.get_demo') }}</a>
                <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-teal-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8">{{ $t('index.hero.start_trial') }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Alternating Feature Sections -->
    <div class="relative pt-16 pb-32 overflow-hidden">
      <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"></div>
      <div class="relative">
        <TaxOverall />
      </div>
      <div class="mt-24 overflow-hidden">
        <SubscriptionManagementOverall />
      </div>
      <div class="mt-24 overflow-hidden">
        <WorkflowOverall />
      </div>
      <div class="mt-24 overflow-hidden">
        <IntegrationsOverall />
      </div>
      <div class="mt-24 overflow-hidden">
        <BrandingOverall />
      </div>
      <div class="mt-24 overflow-hidden">
        <ReportsOverall />
      </div>
      <div class="mt-24 overflow-hidden">
        <IntegrationsStripe />
      </div>
      <div class="mt-24 overflow-hidden">
        <TechSdk />
      </div>
    </div>

    <!-- Gradient Feature Section -->
    <div class="bg-gradient-to-r from-cyan-800 to-teal-700">
      <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 class="text-3xl font-extrabold text-white tracking-tight">{{ $t('index.features.title') }}</h2>
        <p class="mt-4 max-w-3xl text-lg text-teal-200">{{ $t('index.features.description') }}</p>
        <div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          <div>
            <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
            <!-- Heroicon name: outline/inbox -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">{{ $t('index.features.brands.title') }}</h3>
              <p class="mt-2 text-base text-teal-200">{{ $t('index.features.brands.description') }}</p>
            </div>
          </div>
          <div>
            <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
            <!-- Heroicon name: outline/users -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">{{ $t('index.features.team.title') }}</h3>
              <p class="mt-2 text-base text-teal-200">{{ $t('index.features.team.description') }}</p>
            </div>
          </div>
          <div>
            <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
            <!-- Heroicon name: outline/trash -->
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
          </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">{{ $t('index.features.tax.title') }}</h3>
              <p class="mt-2 text-base text-teal-200">{{ $t('index.features.tax.description') }}</p>
            </div>
          </div>
          <div>
            <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
            <!-- Heroicon name: outline/pencil-alt -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">{{ $t('index.features.templates.title') }}</h3>
              <p class="mt-2 text-base text-teal-200">{{ $t('index.features.templates.description') }}</p>
            </div>
          </div>
          <div>
            <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
            <!-- Heroicon name: outline/document-report -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">{{ $t('index.features.reports.title') }}</h3>
              <p class="mt-2 text-base text-teal-200">{{ $t('index.features.reports.description') }}</p>
            </div>
          </div>
          <div>
            <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
            <!-- Heroicon name: outline/reply -->
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
          </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">{{ $t('index.features.invoices.title') }}</h3>
              <p class="mt-2 text-base text-teal-200">{{ $t('index.features.invoices.description') }}</p>
            </div>
          </div>
          <div>
            <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
            <!-- Heroicon name: outline/chat-alt -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">{{ $t('index.features.quotes.title') }}</h3>
              <p class="mt-2 text-base text-teal-200">{{ $t('index.features.quotes.description') }}</p>
            </div>
          </div>
          <div>
            <div>
          <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
            <!-- Heroicon name: outline/heart -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">{{ $t('index.features.workflows.title') }}</h3>
              <p class="mt-2 text-base text-teal-200">{{ $t('index.features.workflows.description') }}</p>
            </div>
          </div>
        </div>
      </div>
   </div>

    <!-- Stats section -->
    <div class="relative bg-gray-900">
      <div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
        <div class="h-full w-full xl:grid xl:grid-cols-2">
          <div class="h-full xl:relative xl:col-start-2">
            <img class="h-full w-full object-cove r opacity-25 xl:absolute xl:inset-0" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops">
            <div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
          </div>
        </div>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
        <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
          <h2 class="text-sm font-semibold tracking-wide uppercase">
            <span class="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">{{  $t('index.self_hostable.title') }}</span>
          </h2>
          <p class="mt-3 text-3xl font-extrabold text-white">{{  $t('index.self_hostable.subtitle') }}</p>
          <p class="mt-5 text-lg text-gray-300">{{ $t('index.self_hostable.paragraph') }}</p>

          <div class="mt-6">
            <a href="https://github.com/billabear" target="_blank" class="inline-flex bg-gradient-to-r from-cyan-600 to-teal-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-cyan-700 hover:to-teal-700">{{ $t('index.self_hostable.cta_button') }}</a>
          </div>
        </div>
      </div>
    </div>

    <div>
      <Faq />
    </div>
    <!-- CTA Section -->
    <div class="bg-white">
      <div class="max-w-4xl mx-auto pt-16 px-4 sm:px-6 sm:pt-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span class="block">{{ $t('index.last_cta.title') }}</span>
          <span class="-mb-1 pb-1 block bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">{{ $t('index.last_cta.subtitle') }}</span>
        </h2>
        <div class="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
          <a href="https://app.sessions.us/book/950e63e2-billabear---demo" class="flex items-center justify-center bg-gradient-to-r from-cyan-600 to-teal-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-cyan-700 hover:to-teal-700">{{ $t('index.last_cta.demo_cta') }}</a>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
</style>

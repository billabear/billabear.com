<script setup lang="ts">

const localePath = useLocalePath()


let showFeatureMenu = ref(false);
let showDepartmentMenu = ref(false);
let showMoreMenu = ref(false);
let showResponseMenu = ref(false);

function hideMenus() {
  showFeatureMenu.value = false;
  showMoreMenu.value = false;
  showResponseMenu.value = false;
  showDepartmentMenu.value = false;
}

function featureMenu() {
  showFeatureMenu.value = !showFeatureMenu.value;
  showMoreMenu.value = false;
  showResponseMenu.value = false;
  showDepartmentMenu.value = false;
}

function moreMenu() {
  showFeatureMenu.value = false;
  showMoreMenu.value = !showMoreMenu.value;
  showResponseMenu.value = false;
  showDepartmentMenu.value = false;
}

function departmentMenu() {
  showFeatureMenu.value = false;
  showMoreMenu.value = false;
  showResponseMenu.value = false;
  showDepartmentMenu.value = !showDepartmentMenu.value;;
}

function responseMenu() {
  showFeatureMenu.value = false;
  showMoreMenu.value = false;
  showResponseMenu.value = !showResponseMenu.value;
  showDepartmentMenu.value = false;
}
</script>

<template>
  <div class="relative bg-teal-500 p-2 text-center text-white font-bold underline">
    <NuxtLink :to="localePath('/pricing')">{{  $t('global.lifetime_deal') }}</NuxtLink>
  </div>
  <div class="relative bg-white">
    <div class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <NuxtLink :to="localePath('/')">
          <span class="sr-only">{{  $t('global.logo_alt') }}</span>
          <img class="h-8 w-auto sm:h-10" src="/images/billabear-logo.svg" :alt="$t('global.logo_alt')" />
        </NuxtLink>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button @click="responseMenu" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                aria-expanded="false">
          <span class="sr-only">{{ $t('menu.open_menu') }}</span>
          <!-- Heroicon name: outline/menu -->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        </button>
      </div>
      <nav class="hidden md:flex space-x-10 z-50">
        <div class="relative">
          <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
          <button type="button"
                  class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  aria-expanded="true"
                  aria-controls="feature_menu"  @click="featureMenu">
            <span>{{ $t('menu.solutions.title') }}</span>
            <!--
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
            <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

          <!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
          <div class="absolute z-50 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2" id="feature_menu" v-if="showFeatureMenu">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                <NuxtLink :to="localePath('/solutions/branding')" @click="hideMenus" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                    <!-- Heroicon name: outline/chart-bar -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" >
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">{{ $t('menu.solutions.branding.title') }}</p>
                    <p class="mt-1 text-sm text-gray-500">{{ $t('menu.solutions.branding.description') }}</p>
                  </div>
                </NuxtLink>

                <NuxtLink :to="localePath('/solutions/tax')" @click="hideMenus" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                    <!-- Heroicon name: outline/cursor-click -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                    </svg>

                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">{{ $t('menu.solutions.tax.title') }}</p>
                    <p class="mt-1 text-sm text-gray-500">{{ $t('menu.solutions.tax.description') }}</p>
                  </div>
                </NuxtLink>

                <NuxtLink :to="localePath('/solutions/workflows')" @click="hideMenus" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">{{ $t('menu.solutions.workflows.title') }}</p>
                    <p class="mt-1 text-sm text-gray-500">{{ $t('menu.solutions.workflows.description') }}</p>
                  </div>
                </NuxtLink>

                <NuxtLink :to="localePath('/solutions/integrations')" @click="hideMenus" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                    <!-- Heroicon name: outline/view-grid -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">{{ $t('menu.solutions.integrations.title') }}</p>
                    <p class="mt-1 text-sm text-gray-500">{{ $t('menu.solutions.integrations.description') }}</p>
                  </div>
                </NuxtLink>

                <NuxtLink :to="localePath('/solutions/subscription-management')" @click="hideMenus" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                    <!-- Heroicon name: outline/refresh -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">{{ $t('menu.solutions.subscription_management.title') }}</p>
                    <p class="mt-1 text-sm text-gray-500">{{ $t('menu.solutions.subscription_management.description') }}</p>
                  </div>
                </NuxtLink>

                <NuxtLink :to="localePath('/solutions/reports')" @click="hideMenus" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                    <!-- Heroicon name: outline/document-report -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">{{ $t('menu.solutions.reports.title') }}</p>
                    <p class="mt-1 text-sm text-gray-500">{{ $t('menu.solutions.reports.description') }}</p>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
          <button type="button"
                  class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  aria-expanded="true"
                  aria-controls="department_menu"  @click="departmentMenu">
            <span>{{ $t('menu.departments.title') }}</span>

            <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div class="absolute z-50 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2" id="feature_menu" v-if="showDepartmentMenu">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">


                <NuxtLink :to="localePath('/department/finance')" @click="hideMenus" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                    <!-- Heroicon name: outline/chart-bar -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" >
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">{{ $t('menu.departments.finance.title') }}</p>
                    <p class="mt-1 text-sm text-gray-500">{{ $t('menu.departments.finance.description') }}</p>
                  </div>
                </NuxtLink>
                <NuxtLink :to="localePath('/department/tech')" @click="hideMenus" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                    <!-- Heroicon name: outline/chart-bar -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" >
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">{{ $t('menu.departments.tech.title') }}</p>
                    <p class="mt-1 text-sm text-gray-500">{{ $t('menu.departments.tech.description') }}</p>
                  </div>
                </NuxtLink>
                <NuxtLink :to="localePath('/department/customer-support')" @click="hideMenus" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                    <!-- Heroicon name: outline/chart-bar -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" >
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">{{ $t('menu.departments.customer_support.title') }}</p>
                    <p class="mt-1 text-sm text-gray-500">{{ $t('menu.departments.customer_support.description') }}</p>
                  </div>
                </NuxtLink>
                <NuxtLink :to="localePath('/department/sales')" @click="hideMenus" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                  <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                    <!-- Heroicon name: outline/chart-bar -->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" >
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                  </div>
                  <div class="ml-4">
                    <p class="text-base font-medium text-gray-900">{{ $t('menu.departments.sales.title') }}</p>
                    <p class="mt-1 text-sm text-gray-500">{{ $t('menu.departments.sales.description') }}</p>
                  </div>
                </NuxtLink><NuxtLink :to="localePath('/department/marketing')" @click="hideMenus" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                  <!-- Heroicon name: outline/chart-bar -->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>

                </div>
                <div class="ml-4">
                  <p class="text-base font-medium text-gray-900">{{ $t('menu.departments.marketing.title') }}</p>
                  <p class="mt-1 text-sm text-gray-500">{{ $t('menu.departments.marketing.description') }}</p>
                </div>
              </NuxtLink>
              </div>
            </div>
          </div>

        </div>
        <NuxtLink :to="localePath('/pricing')" class="text-base font-medium text-gray-500 hover:text-gray-900"> {{ $t('menu.pricing') }} </NuxtLink>
        <a href="https://docs.billabear.com" target="_blank" class="text-base font-medium text-gray-500 hover:text-gray-900"> {{ $t('menu.docs') }} </a>

        <div class="relative">
          <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
          <button type="button" @click="moreMenu" class="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500" aria-expanded="false">
            <span>{{ $t('menu.more.title') }}</span>
            <!--
              Heroicon name: solid/chevron-down

              Item active: "text-gray-600", Item inactive: "text-gray-400"
            -->
            <svg class="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>

          <!--
            'More' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
          <div class="absolute z-50 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0" v-if="showMoreMenu">
            <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <a href="https://github.com/billabear/billabear" target="_blank" class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                  <p class="text-base font-medium text-gray-900">{{ $t('menu.more.github.title') }}</p>
                  <p class="mt-1 text-sm text-gray-500">{{ $t('menu.more.github.description') }}</p>
                </a>

                <NuxtLink :to="localePath('/blog')" class="-m-3 p-3 block rounded-md hover:bg-gray-50">
                  <p class="text-base font-medium text-gray-900">{{ $t('menu.more.blog.title') }}</p>
                  <p class="mt-1 text-sm text-gray-500">{{ $t('menu.more.blog.description') }}</p>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
        <LocaleSwitcher />
        <a href="https://cloud.billabear.com/signup" target="_blank" class="ml-4 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"> {{ $t('menu.signup') }} </a>
        <a href="https://cloud.billabear.com/login" target="_blank" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700"> {{ $t('menu.login') }} </a>
      </div>
    </div>

    <!--
      Mobile menu, show/hide based on mobile menu state.

      Entering: "duration-200 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
    <div class="absolute top-0 z-50 inset-x-0 p-2 transition transform origin-top-right md:hidden" v-if="showResponseMenu">
      <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5">
          <div class="flex items-center justify-between">
            <div>
              <img class="h-8 w-auto sm:h-10" src="/images/app-logo.png" :alt="$t('global.logo_alt')" />
            </div>
            <div class="-mr-2">
              <button type="button" @click="showResponseMenu = !showResponseMenu" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                <span class="sr-only">{{ $t('menu.close') }}</span>
                <!-- Heroicon name: outline/x -->
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid grid-cols-1 gap-7">
              <NuxtLink :to="localePath('/solutions/branding')"  @click="showResponseMenu = !showResponseMenu" class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white">
                  <!-- Heroicon name: outline/chart-bar -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div class="ml-4 text-base font-medium text-gray-900">{{ $t('menu.solutions.branding.title') }}</div>
              </NuxtLink>

              <NuxtLink :to="localePath('/solutions/tax')"   @click="showResponseMenu = !showResponseMenu" class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white">
                  <!-- Heroicon name: outline/cursor-click -->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
                  </svg>

                </div>
                <div class="ml-4 text-base font-medium text-gray-900">{{ $t('menu.solutions.tax.title') }}</div>
              </NuxtLink>

              <NuxtLink :to="localePath('/solutions/workflows')"   @click="showResponseMenu = !showResponseMenu" class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white">
                  <!-- Heroicon name: outline/shield-check -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div class="ml-4 text-base font-medium text-gray-900">{{ $t('menu.solutions.workflows.title') }}</div>
              </NuxtLink>

              <NuxtLink :to="localePath('/solutions/integrations')"  @click="showResponseMenu = !showResponseMenu"  class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white">
                  <!-- Heroicon name: outline/view-grid -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <div class="ml-4 text-base font-medium text-gray-900">{{ $t('menu.solutions.integrations.title') }}</div>
              </NuxtLink>

              <NuxtLink :to="localePath('/solutions/subscription-management')"   @click="showResponseMenu = !showResponseMenu" class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white">
                  <!-- Heroicon name: outline/refresh -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div class="ml-4 text-base font-medium text-gray-900">{{ $t('menu.solutions.subscription_management.title') }}</div>
              </NuxtLink>

              <NuxtLink :to="localePath('/solutions/reports')"  @click="showResponseMenu = !showResponseMenu"  class="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50">
                <div class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white">
                  <!-- Heroicon name: outline/document-report -->
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div class="ml-4 text-base font-medium text-gray-900">{{ $t('menu.solutions.reports.title') }}</div>
              </NuxtLink>
            </nav>
          </div>
        </div>
        <div class="py-6 px-5">
          <div class="grid grid-cols-2 gap-4">
            <NuxtLink :to="localePath('/pricing')"   @click="showResponseMenu = !showResponseMenu"  class="text-base font-medium text-gray-900 hover:text-gray-700"> {{ $t('menu.pricing') }} </NuxtLink>

            <a href="https://docs.billabear.com" target="_blank" class="text-base font-medium text-gray-900 hover:text-gray-700"> {{ $t('menu.docs') }} </a>

            <a href="https://github.com/billabear/billabear" target="_blank" class="text-base font-medium text-gray-900 hover:text-gray-700"> {{ $t('menu.more.github.title') }} </a>

            <NuxtLink :to="localePath('/blog')"   @click="showResponseMenu = !showResponseMenu"  class="text-base font-medium text-gray-900 hover:text-gray-700"> {{ $t('menu.more.blog.title') }} </NuxtLink>
          </div>
          <div class="mt-6">
            <LocaleSwitcher class="w-full mb-4" />

            <a href="https://cloud.billabear.com/signup" target="_blank"  class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-teal-600 hover:bg-teal-700"> {{ $t('menu.signup') }} </a>
            <p class="mt-6 text-center text-base font-medium text-gray-500">
              {{ $t('menu.exist_customer') }}
              <a href="https://cloud.billabear.com/login" target="_blank" class="text-teal-600 hover:text-teal-500"> {{ $t('menu.signup') }} </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>

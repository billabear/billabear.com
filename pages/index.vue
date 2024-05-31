<script setup lang="ts">
import typewriter from "typewriter-vue/src/components/Typewriter.vue";
const { locale, setLocale, t } = useI18n()
useHead({
  title: t('index.browser_title'),
});

let currentIndex = ref(0);
onMounted(function () {

  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % 3; // Cycle through 0, 1, and 2
  }, 5000);
})
</script>

<template>
  <section class="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">

      <h1 class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white typewriter">
        <typewriter v-if="currentIndex === 0">{{ $t('index.hero.line_one') }}</typewriter>
        <typewriter v-if="currentIndex === 1">{{ $t('index.hero.line_two') }}</typewriter>
        <typewriter v-if="currentIndex === 2">{{ $t('index.hero.line_three') }}</typewriter>
      </h1>
      <p class="mb-4 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
        {{ $t('index.hero.description') }}
      </p>

      <img src="/images/dashboard-screenshot.png" class="rounded-xl border m-auto sm:w-2/3" />
    </div>
  </section>
  <div class="bg-indigo-700">
    <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
      <h2 class="text-3xl font-extrabold text-white tracking-tight">{{ $t('index.features.title') }}</h2>
      <p class="mt-4 max-w-3xl text-lg text-indigo-200">{{ $t('index.features.description') }}</p>
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
            <p class="mt-2 text-base text-indigo-200">{{ $t('index.features.brands.description') }}</p>
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
            <p class="mt-2 text-base text-indigo-200">{{ $t('index.features.team.description') }}</p>
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
            <p class="mt-2 text-base text-indigo-200">{{ $t('index.features.tax.description') }}</p>
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
            <p class="mt-2 text-base text-indigo-200">{{ $t('index.features.templates.description') }}</p>
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
            <p class="mt-2 text-base text-indigo-200">{{ $t('index.features.reports.description') }}</p>
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
            <p class="mt-2 text-base text-indigo-200">{{ $t('index.features.invoices.description') }}</p>
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
            <p class="mt-2 text-base text-indigo-200">{{ $t('index.features.quotes.description') }}</p>
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
            <p class="mt-2 text-base text-indigo-200">{{ $t('index.features.workflows.description') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

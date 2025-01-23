<template>

  <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">

    <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-12 lg:max-w-none lg:mx-0 lg:px-0">
      <div>
        <div>
                <span class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-cyan-600 to-teal-600">
                  <!-- Heroicon name: outline/inbox -->
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" data-v-inspector="pages/index.vue:151:13"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" data-v-inspector="pages/index.vue:152:15"></path></svg>
                </span>
        </div>
        <div class="mt-6">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">{{ $t('features.tax_rules.title') }}</h2>
          <p class="mt-4 text-lg text-gray-500">
            {{ $t('features.tax_rules.paragraph_one') }}
          </p><p class="mt-4 text-lg text-gray-500">
          {{ $t('features.tax_rules.paragraph_two') }}
        </p>
          <div class="mt-6">
            <a href="https://cloud.billabear.com" target="_blank" class="inline-flex bg-gradient-to-r from-cyan-600 to-teal-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-cyan-700 hover:to-teal-700">{{ $t('features.tax_rules.cta_button') }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1 content-center">
      <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative">
        <img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 " src="/images/features/tax/tax_rules.png" :alt="$t('features.tax_rules.image_alt')">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>

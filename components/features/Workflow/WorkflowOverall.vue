<template>

  <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
    <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-12 lg:max-w-none lg:mx-0 lg:px-0">
      <div>
        <div>
                <span class="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-cyan-600 to-teal-600 text-white">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </span>
        </div>
        <div class="mt-6">
          <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">{{ $t('features.workflow_list.title') }}</h2>
          <p class="mt-4 text-lg text-gray-500">{{ $t('features.workflow_list.paragraph') }}
          </p>
          <div class="mt-6">
            <a href="https://github.com/github/github" target="_blank" class="inline-flex bg-gradient-to-r from-cyan-600 to-teal-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-cyan-700 hover:to-teal-700">{{ $t('index.self_hostable.cta_button') }}</a>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 sm:mt-16 lg:mt-0 content-center">
      <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative">
        <img class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5" src="/images/features/workflow_list.png" :alt="$t('features.workflow_list.image_alt')">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "WorkflowOverall"
})
</script>

<style scoped>

</style>

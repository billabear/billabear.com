<template>

  <div class="py-12 bg-gradient-to-r from-cyan-600 to-teal-600">
    <div class="mx-auto max-w-4xl">
      <h1 class="text-center text-4xl text-white">
        <slot name="title"></slot>
      </h1>
      <h2 class="text-2xl text-center mt-3 text-slate-300" >
        <slot name="subtitle"></slot>
      </h2>
      <div class="mt-12 text-center">
        <a href="https://github.com/billabear/billabear" target="_blank" class="border-black ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-900"> {{ $t('pages.subscription_management.free_trial') }} </a>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>

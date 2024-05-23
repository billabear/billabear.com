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
</template>

<style scoped>
</style>

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
  <section class="my-4">
    <div class="text-center text-4xl">
      {{ $t('index.social_proof.title') }}
    </div>
    <p class="text-center text-gray-500">{{ $t('index.social_proof.description') }}</p>
    <div class="text-center m-auto">
      <img src="/images/logos/oracle.svg" alt="Oracle" width="200" class="inline m-2">
      <img src="/images/logos/capgemini.svg" alt="CapGemini" width="200" class="inline m-2">
      <img src="/images/logos/wikimedia.svg" alt="WikiMedia" width="75" class="inline m-2">
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

  <!-- This example requires Tailwind CSS v2.0+ -->
  <section class="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <svg class="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2" width="404" height="404" fill="none" viewBox="0 0 404 404" role="img" aria-labelledby="svg-workcation">
        <title id="svg-workcation">Workcation</title>
        <defs>
          <pattern id="ad119f34-7694-4c31-947f-5c9d249b21f3" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)" />
      </svg>

      <div class="relative">
        <blockquote class="mt-10">
          <div class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
            <p>&ldquo;Billabear was easy to integrate within my application, and it works flawlessly&rdquo;</p>
          </div>
          <footer class="mt-8">
            <div class="md:flex md:items-center md:justify-center">
              <div class="md:flex-shrink-0">
                <img class="mx-auto h-10 w-10 rounded-full" src="/images/scott_headshot.jpeg" alt="">
              </div>
              <div class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                <div class="text-base font-medium text-gray-900">Scott Gould
                </div>

                <svg class="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 0h3L9 20H6l5-20z" />
                </svg>

                <div class="text-base font-medium text-gray-500">CEO, Vastoutreach</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>


  <!-- This example requires Tailwind CSS v2.0+ -->
  <footer class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900"> About </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Blog </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Jobs </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Press </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Accessibility </a>
        </div>

        <div class="px-5 py-2">
          <a href="#" class="text-base text-gray-500 hover:text-gray-900"> Partners </a>
        </div>
      </nav>
      <div class="mt-8 flex justify-center space-x-6">
        <a href="#" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Facebook</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
          </svg>
        </a>

        <a href="#" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Instagram</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
          </svg>
        </a>

        <a href="#" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">Twitter</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </a>

        <a href="https://github.com/billabear" class="text-gray-400 hover:text-gray-500">
          <span class="sr-only">GitHub</span>
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
      <p class="mt-8 text-center text-base text-gray-400">&copy; 2024 Humbly Arrogant Software Limited. All rights reserved.</p>
    </div>
  </footer>

</template>

<style scoped>
</style>

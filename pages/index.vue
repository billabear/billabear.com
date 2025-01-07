<script setup lang="ts">
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('index.browser_title'),
});

</script>

<template>
  <div>
    <PageHero>
      <template v-slot:title>
        {{ $t('pages.landing.hero.title') }}
      </template>
      <template v-slot:subtitle>
        {{ $t('pages.landing.hero.subtitle') }}
      </template>
      <template v-slot:buttons>
        <a href="https://calendly.com/iain-billabear/30min" class="block w-36 text-center font-bold rounded-xl bg-white text-black p-2 hover:bg-transparent border-2 border-white hover:text-white">
          {{ $t('pages.landing.hero.book_demo') }}
        </a>
      </template>
      <template v-slot:image>
        <img src="/images/hero/landing.png" alt="Hero Image" />
      </template>
    </PageHero>
    <div class="py-24 container">
      <h2 class="text-4xl pb-12 text-center">{{ $t('pages.landing.helps_you.title') }}</h2>

      <div class="rounded-lg shadow-lg w-full">
        <TabGroup>
          <TabList class="flex justify-evenly rounded-xl bg-white p-3">
            <Tab v-slot="{ selected }">
              <button :class="['p-2 rounded-xl text-xl', selected ? 'bg-gray-100' : 'bg-white hover:bg-gray-50']">
                Finance
              </button>
            </Tab>
            <Tab v-slot="{ selected }">
              <button :class="['p-2 rounded-xl text-xl', selected ? 'bg-gray-100' : 'bg-white hover:bg-gray-50']">
                Tech
              </button>
            </Tab>
            <Tab v-slot="{ selected }">
              <button :class="['p-2 rounded-xl text-xl', selected ? 'bg-gray-100' : 'bg-white hover:bg-gray-50']">
                Sales
              </button>
            </Tab>
            <Tab v-slot="{ selected }">
              <button :class="['p-2 rounded-xl text-xl', selected ? 'bg-gray-100' : 'bg-white hover:bg-gray-50']">
                Marketing
              </button>
            </Tab>
            <Tab v-slot="{ selected }">
              <button :class="['p-2 rounded-xl text-xl', selected ? 'bg-gray-100' : 'bg-white hover:bg-gray-50']">
                Customer Support
              </button>
            </Tab>
          </TabList>
          <TabPanels class="p-12">
            <TabPanel>Finance Tab</TabPanel>
            <TabPanel>Tech Tab</TabPanel>
            <TabPanel>Sales Tab</TabPanel>
            <TabPanel>Marketing Tab</TabPanel>
            <TabPanel>Customer Support Tab</TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

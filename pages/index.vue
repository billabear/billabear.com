<script setup lang="ts">
import {Tab, TabGroup, TabList, TabPanel, TabPanels} from "@headlessui/vue";
import {DocumentIcon, DocumentCurrencyEuroIcon, CurrencyEuroIcon, PhoneIcon} from "@heroicons/vue/24/outline";

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

      <div class="rounded-lg shadow-lg w-full bg-teal-100">
        <TabGroup as="div">
          <TabList class="grid grid-flow-col justify-stretch  p-3">
            <Tab v-slot="{ selected }" :class="['p-2 rounded-xl', selected ? 'bg-teal-500' : 'bg-teal-100 hover:bg-teal-50']">
             Finance
            </Tab>
            <Tab v-slot="{ selected }" :class="['p-2 rounded-xl', selected ? 'bg-teal-100' : 'bg-teal-100 hover:bg-teal-50']">
              Tech
            </Tab>
            <Tab v-slot="{ selected }" :class="['p-2 rounded-xl', selected ? 'bg-teal-100' : 'bg-teal-100 hover:bg-teal-50']">
              Sales
            </Tab>
            <Tab v-slot="{ selected }" :class="['p-2 rounded-xl', selected ? 'bg-teal-100' : 'bg-teal-100 hover:bg-teal-50']">
              Marketing
            </Tab>
            <Tab v-slot="{ selected }" :class="['p-2 rounded-xl', selected ? 'bg-teal-100' : 'bg-teal-100 hover:bg-teal-50']">
              Customer Support
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

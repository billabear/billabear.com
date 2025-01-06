<script setup lang="ts">

import {Popover, PopoverButton, PopoverPanel} from "@headlessui/vue";
import {ArrowRightIcon, ChevronDownIcon} from "@heroicons/vue/outline";

const localePath = useLocalePath()

import GithubButton from 'vue-github-button'
let showFinanceSolutions = ref(true);
let showSubscriptionSolutions = ref(false);
let showMarketingSolutions = ref(false);
let showTechnicalSolutions = ref(false);

let showSolutions = function (input) {
  showFinanceSolutions.value = 'finance' === input;
  showSubscriptionSolutions.value = 'subscriptions' === input;
  showMarketingSolutions.value = 'marketing' === input;
  showTechnicalSolutions.value = 'technical' === input;

}
const isSolutionsShowing= useState('isSolutionsShowing', () => true)
</script>

<template>
  <div class="relative p-5 bg-white border-b border-gray-200" >
    <div class="flex flex-row">
      <div class="">
        <NuxtLink :to="localePath('/')">
          <span class="sr-only">{{ $t('global.logo_alt') }}</span>
          <img class="w-auto" src="/images/billabear-logo.png" :alt="$t('global.logo_alt')"/>
        </NuxtLink>
      </div>
      <div class="ml-5 my-auto">
        <nav class="hidden md:flex space-x-5 z-50">
          <div>
            <Popover>
              <PopoverButton class="text-black font-medium rounded-lg focus:ring-white hover:text-gray-500">
                {{ $t('menu.solutions.title') }}
                <ChevronDownIcon class="inline size-5"/>
              </PopoverButton>
              <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
              >
                <PopoverPanel
                    class="absolute z-10 w-128 bg-white border border-gray-200 rounded-lg shadow-lg"
                >
                  <div class="grid grid-cols-2 w-128">
                    <div>
                      <ul>
                        <li>
                          <NuxtLink :to="localePath('/solutions/tax')">
                            <a class="rounded-tl-lg w-full px-5 py-3 text-normal text-gray-700  flex justify-between items-center" :class="{'solutions-active': showFinanceSolutions}" @mouseover="showSolutions('finance')">
                              {{ $t('menu.solutions.finance.title') }}

                              <ArrowRightIcon class="text-end inline w-5 h-5 text-white" v-if="showFinanceSolutions"/>
                            </a>
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink :to="localePath('/solutions/subscriptions')">
                            <a class="px-5 py-3 text-normal text-gray-700  flex justify-between items-center" :class="{'solutions-active': showSubscriptionSolutions}"  @mouseover="showSolutions('subscriptions')">
                              {{ $t('menu.solutions.subscriptions.title') }}
                              <ArrowRightIcon class="text-end inline w-5 h-5 text-white" v-if="showSubscriptionSolutions"/>
                            </a>
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink :to="localePath('/solutions/marketing')">
                            <a class="px-5 py-3 text-normal text-gray-700  flex justify-between items-center" :class="{'solutions-active': showMarketingSolutions}"  @mouseover="showSolutions('marketing')">
                              {{ $t('menu.solutions.marketing.title') }}
                              <ArrowRightIcon class="text-end inline w-5 h-5 text-white" v-if="showMarketingSolutions"/>
                            </a>
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink :to="localePath('/solutions/technical')">
                            <a class="rounded-bl-lg px-5 py-3 text-normal text-gray-700 flex justify-between items-center" :class="{'solutions-active': showTechnicalSolutions}"  @mouseover="showSolutions('technical')">
                              {{ $t('menu.solutions.technical.title') }}
                              <ArrowRightIcon class="text-end inline w-5 h-5 text-white" v-if="showTechnicalSolutions"/>
                            </a>
                          </NuxtLink>
                        </li>
                      </ul>
                    </div>
                    <div class="border-l border-gray-100">
                      <ul v-if="showFinanceSolutions">
                        <li>
                          <NuxtLink :to="localePath('/solutions/finance')">
                            <a class="rounded-tr-lg block px-5 py-2 text-sm text-gray-700 hover:bg-teal-200">
                              {{ $t('menu.solutions.overview') }}
                            </a>
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink :to="localePath('/solutions/finance/tax')">
                            <a class="block px-5 py-2 text-sm text-gray-700 hover:bg-teal-200">
                              {{ $t('menu.solutions.finance.tax') }}
                            </a>
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink :to="localePath('/solutions/finance/reports')">
                            <a class="block px-5 py-2 text-sm text-gray-700 hover:bg-teal-200">
                              {{ $t('menu.solutions.finance.reports') }}
                            </a>
                          </NuxtLink>
                        </li>
                        <li>
                          <NuxtLink :to="localePath('/solutions/finance/pricing')">
                            <a class="block px-5 py-3 text-sm text-gray-700 hover:bg-teal-200">
                              {{ $t('menu.solutions.finance.pricing') }}
                            </a>
                          </NuxtLink>
                        </li>
                      </ul>
                      <ul v-if="showSubscriptionSolutions">
                        <li>
                          <NuxtLink :to="localePath('/solutions/subscriptions')">
                            <a class="rounded-tr-lg block px-5 py-2 text-sm text-gray-700 hover:bg-gray-100">
                              {{ $t('menu.solutions.overview') }}
                            </a>
                          </NuxtLink>
                        </li>
                      </ul>
                      <ul v-if="showMarketingSolutions">
                        <li>
                          test
                        </li>
                      </ul>
                      <ul v-if="showTechnicalSolutions">
                        <li>
                          test test
                        </li>
                      </ul>
                    </div>
                  </div>
                </PopoverPanel>
              </transition>
            </Popover>
          </div>
          <div>
            <Popover>
              <PopoverButton class="text-black font-medium  rounded-lg hover:text-gray-500">
                {{ $t('menu.product.title') }}
                <ChevronDownIcon class="inline size-5"/>
              </PopoverButton>
              <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
              >
                <PopoverPanel
                    class="absolute z-10 w-128 bg-white border border-gray-200 rounded-lg shadow-lg"
                >
                  <ul>
                    <li>tes</li>
                  </ul>
                </PopoverPanel>
              </transition>
            </Popover>
          </div>
          <div>
            <NuxtLink :to="localePath('/pricing')" class="font-medium p-1">
              {{ $t('menu.pricing') }}
            </NuxtLink>
          </div>
          <div>
            <Popover>
              <PopoverButton class="text-black font-medium  rounded-lg hover:text-gray-500">
                {{ $t('menu.more.title') }}
                <ChevronDownIcon class="inline size-5"/>
              </PopoverButton>
              <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="translate-y-1 opacity-0"
                  enter-to-class="translate-y-0 opacity-100"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="translate-y-0 opacity-100"
                  leave-to-class="translate-y-1 opacity-0"
              >
                <PopoverPanel
                    class="absolute z-10 w-64 bg-white border border-gray-200 rounded-lg shadow-lg"
                >
                  <ul>
                    <li>
                      <NuxtLink :to="localePath('/blog')">
                        <a class="rounded-t-lg w-full px-5 py-3 text-medium font-medium text-gray-700 flex justify-between items-center hover:text-white hover:bg-teal-500">
                          {{ $t('menu.more.blog.title') }}
                        </a>
                      </NuxtLink>
                    </li>
                    <li>
                        <a href="https://github.com/billabear" target="_blank" class=" w-full px-5 py-3 text-normal font-medium text-gray-700  flex justify-between items-center hover:text-white hover:bg-teal-500">
                          {{ $t('menu.more.github.title') }}
                        </a>
                    </li>
                    <li>
                      <NuxtLink :to="localePath('/guides')">
                        <a class="rounded-b-lg w-full px-5 py-3 text-normal text-gray-700 font-medium flex justify-between items-center hover:text-white hover:bg-teal-500">
                          {{ $t('menu.more.guides.title') }}
                        </a>
                      </NuxtLink>
                    </li>
                  </ul>
                </PopoverPanel>
              </transition>
            </Popover>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<style scoped>
.solutions-active {
  @apply text-white bg-teal-300 font-bold underline underline-offset-2;
}
</style>

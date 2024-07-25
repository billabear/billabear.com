<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
        <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200">
          <div v-for="faq in faqs" :key="faq.question" class="pt-6" >
            <dt class="text-lg">
              <button class="text-left w-full flex justify-between items-start text-gray-400" @click="faq.open = !faq.open">
                <span class="font-medium text-gray-900">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">

                <svg class="h-6 w-6 transform" :class="[faq.open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform']"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                </span>
              </button>
            </dt>
            <div as="dd" class="mt-2 pr-12" :class="[faq.open ? 'block' : 'hidden']">
              <p class="text-base text-gray-500">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>

const { locale, setLocale, t } = useI18n()

const faqs = ref([
  {
    question: t('index.faq.gdpr_compliant.question'),
    answer: t('index.faq.gdpr_compliant.answer'),
    open: false,
  },
  {
    question: t('index.faq.migrate_from_stripe.question'),
    answer: t('index.faq.migrate_from_stripe.answer'),
    open: false,
  },
  {
    question: t('index.faq.germany_invoice_requirements.question'),
    answer: t('index.faq.germany_invoice_requirements.answer'),
    open: false,
  },
  {
    question: t('index.faq.update_frequency.question'),
    answer: t('index.faq.update_frequency.answer'),
    open: false,
  },
  {
    question: t('index.faq.payment_options.question'),
    answer: t('index.faq.payment_options.answer'),
    open: false,
  },
  {
    question: t('index.faq.support.question'),
    answer: t('index.faq.support.answer'),
    open: false,
  },
]);

</script>

<script setup lang="ts">

</script>

<template> <footer class="bg-gray-50 mt-24" aria-labelledby="footer-heading">
  <h2 id="footer-heading" class="sr-only">Footer</h2>
  <div class="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
    <div class="xl:grid xl:grid-cols-3 xl:gap-8">
      <div class="space-y-8 xl:col-span-1">
        <img class="h-28" src="/images/footer-logo.png" alt="BillaBear">
        <p class="text-gray-500 text-base">{{ $t('footer.paragraph') }}</p>
      </div>
      <div class="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">{{ $t('footer.solutions.title') }}</h3>
            <ul role="list" class="mt-4 space-y-4">
              <li>
                <NuxtLink to="/solutions/branding" class="text-base text-gray-500 hover:text-gray-900">{{ $t('footer.solutions.branding') }}</NuxtLink>
              </li>

              <li>
                <NuxtLink to="/solutions/tax" class="text-base text-gray-500 hover:text-gray-900">{{ $t('footer.solutions.tax') }}</NuxtLink>
              </li>

              <li>
                <NuxtLink to="/solutions/workflows" class="text-base text-gray-500 hover:text-gray-900">{{ $t('footer.solutions.workflows') }}</NuxtLink>
              </li>

              <li>
                <NuxtLink to="/solutions/subscription-management" class="text-base text-gray-500 hover:text-gray-900">{{ $t('footer.solutions.subscription_management') }}</NuxtLink>
              </li>

              <li>
                <NuxtLink to="/solutions/reports" class="text-base text-gray-500 hover:text-gray-900">{{ $t('footer.solutions.reports') }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">{{ $t('footer.support.title') }}</h3>
            <ul role="list" class="mt-4 space-y-4">
              <li>
                <NuxtLink to="/pricing" class="text-base text-gray-500 hover:text-gray-900">{{ $t('footer.support.pricing') }}</NuxtLink>
              </li>

              <li>
                <a href="https://docs.billabear.com" target="_blank" class="text-base text-gray-500 hover:text-gray-900">{{ $t('footer.support.documentation') }}</a>
              </li>

              <li>
                <a href="https://swagger.billabear.com" target="_blank" class="text-base text-gray-500 hover:text-gray-900">{{ $t('footer.support.swagger_docs') }}</a>
              </li>

              <li>
                <a href="https://github.com/billabear" target="_blank" class="text-base text-gray-500 hover:text-gray-900">{{ $t('footer.support.github') }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">{{ $t('footer.company.title') }}</h3>
            <ul role="list" class="mt-4 space-y-4">
              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900">{{ $t('footer.company.about') }}</a>
              </li>

              <li>
                <NuxtLink to="/blog" class="text-base text-gray-500 hover:text-gray-900">{{ $t('footer.company.blog') }}</NuxtLink>
              </li>
              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900">{{ $t('footer.company.jobs') }}</a>
              </li>
              <li>
                <a href="#" class="text-base text-gray-500 hover:text-gray-900">{{ $t('footer.company.imprint') }}</a>
              </li>

            </ul>
          </div>
          <div class="mt-12 md:mt-0">
            <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">{{ $t('footer.legal.title') }}</h3>
            <ul role="list" class="mt-4 space-y-4">
              <li>
                <NuxtLink to="/legal/terms-of-sale" class="text-base text-gray-500 hover:text-gray-900">
                  {{ $t('footer.legal.terms_of_sale') }}
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/legal/terms-of-use" class="text-base text-gray-500 hover:text-gray-900">
                  {{ $t('footer.legal.terms_of_use') }}
                </NuxtLink>
              </li>

              <li>
                <NuxtLink to="/legal/privacy-policy" class="text-base text-gray-500 hover:text-gray-900">
                  {{ $t('footer.legal.privacy_policy') }}
                </NuxtLink>
              </li>


              <li>
                <NuxtLink to="/legal/data-processing-agreement-dpa" class="text-base text-gray-500 hover:text-gray-900">
                  {{ $t('footer.legal.data_processing_agreement') }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-12 border-t border-gray-200 py-8">
      <p class="text-base text-gray-400 xl:text-center">&copy; 2024 Humbly Arrogant Software Limited. All rights reserved.</p>
    </div>
  </div>
</footer>
</template>

<style scoped>

</style>

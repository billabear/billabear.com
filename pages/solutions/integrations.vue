<script setup lang="ts">

import IntegrationsOverall from "~/components/features/Integrations/IntegrationsOverall.vue";
import IntegrationsSlack from "~/components/features/Integrations/IntegrationsSlack.vue";
import IntegrationsEmail from "~/components/features/Integrations/IntegrationsEmail.vue";
import IntegrationsPdf from "~/components/features/Integrations/IntegrationsPdf.vue";
import IntegrationsStripe from "~/components/features/Integrations/IntegrationsStripe.vue";
const { locale, setLocale, t } = useI18n()
useHead({
  title: t('pages.integrations.browser_title'),
});
</script>

<template>
  <PageHero>
    <template v-slot:title>
      {{ $t('pages.integrations.title') }}
    </template>
    <template v-slot:subtitle>
      {{ $t('pages.integrations.subtitle') }}
    </template>
  </PageHero>
  <div class="mt-24 relative">
    <IntegrationsOverall />
  </div>
  <div class="mt-24">
    <IntegrationsEmail />
  </div>
  <div class="mt-24">
    <IntegrationsSlack />
  </div>
  <div class="mt-24">
    <IntegrationsStripe />
  </div>
  <div class="mt-24">
    <IntegrationsPdf />
  </div>
</template>

<style scoped>

</style>

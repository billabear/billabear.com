<template>
  <PageHero>
    <template v-slot:title>
      {{ $t('departments.marketing.title') }}
    </template>
    <template v-slot:subtitle>
      {{ $t('departments.marketing.subtitle') }}
    </template>
  </PageHero>
  <div class="mt-12 overflow-hidden">
    <BrandingOverall />
  </div>
  <div class="mt-12 overflow-hidden">
    <EmailTemplates />
  </div>
  <div class="mt-12 overflow-hidden">
    <IntegrationsEmail />
  </div>
</template>

<script setup lang="ts">
import BrandingOverall from "~/components/features/Branding/BrandingOverall.vue";
import EmailTemplates from "~/components/features/Branding/EmailTemplates.vue";
import IntegrationsEmail from "~/components/features/Integrations/IntegrationsEmail.vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('departments.marketing.browser_title'),
});
</script>


<style scoped>

</style>

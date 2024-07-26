<script setup lang="ts">

import DocTemplates from "~/components/features/Branding/DocTemplates.vue";
import EmailTemplates from "~/components/features/Branding/EmailTemplates.vue";
import SubscriptionManagementOverall
  from "~/components/features/SubscriptionManagement/SubscriptionManagementOverall.vue";
import BrandingOverall from "~/components/features/Branding/BrandingOverall.vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('templates.browser_title'),
});
</script>

<template>
    <PageHero>
      <template v-slot:title>
        {{ $t('pages.branding.title') }}
      </template>
      <template v-slot:subtitle>
        {{ $t('pages.branding.subtitle') }}
      </template>
    </PageHero>
    <div class="relative overflow-hidden">
      <div class="mt-24 overflow-hidden">
        <BrandingOverall />
      </div>
      <div class="mt-24 overflow-hidden">
        <EmailTemplates />
      </div>
      <div class="mt-24 relative">
        <DocTemplates />
      </div>
    </div>
</template>

<style scoped>

</style>

<template>
  <PageHero>
    <template v-slot:title>
      {{ $t('departments.customer_support.title') }}
    </template>
    <template v-slot:subtitle>
      {{ $t('departments.customer_support.subtitle') }}
    </template>
  </PageHero>
  <div class="mt-24 overflow-hidden">
    <SubscriptionManagementOverall />
  </div>
  <div class="mt-24 overflow-hidden">
    <IntegrationsEmail />
  </div>
  <div class="mt-24 overflow-hidden">
    <SubscriptionCancel />
  </div>
</template>

<script setup lang="ts">
import BrandingOverall from "~/components/features/Branding/BrandingOverall.vue";
import EmailTemplates from "~/components/features/Branding/EmailTemplates.vue";
import IntegrationsEmail from "~/components/features/Integrations/IntegrationsEmail.vue";
import SubscriptionManagement from "~/pages/solutions/subscription-management.vue";
import SubscriptionCancel from "~/components/features/SubscriptionManagement/SubscriptionCancel.vue";
import SubscriptionManagementOverall
  from "~/components/features/SubscriptionManagement/SubscriptionManagementOverall.vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('departments.customer_support.browser_title'),
});
</script>


<style scoped>

</style>

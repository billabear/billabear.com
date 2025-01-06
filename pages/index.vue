<script setup lang="ts">
import DocTemplates from "~/components/features/Branding/DocTemplates.vue";
import WorkflowOverall from "~/components/features/Workflow/WorkflowOverall.vue";
import SubscriptionManagementOverall
  from "~/components/features/SubscriptionManagement/SubscriptionManagementOverall.vue";
import TaxOverall from "~/components/features/Tax/TaxOverall.vue";
import ReportsOverall from "~/components/features/Reports/ReportsOverall.vue";
import IntegrationsOverall from "~/components/features/Integrations/IntegrationsOverall.vue";
import Branding from "~/pages/solutions/branding.vue";
import BrandingOverall from "~/components/features/Branding/BrandingOverall.vue";
import IntegrationsStripe from "~/components/features/Integrations/IntegrationsStripe.vue";
import TechSdk from "~/components/features/Tech/TechSdk.vue";
const { locale, setLocale, t } = useI18n()
useHead({
  title: t('index.browser_title'),
});

</script>

<template>
</template>

<style scoped>
</style>

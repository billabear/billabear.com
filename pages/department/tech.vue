<template>
  <PageHero>
    <template v-slot:title>
      {{ $t('departments.tech.title') }}
    </template>
    <template v-slot:subtitle>
      {{ $t('departments.tech.subtitle') }}
    </template>
  </PageHero>
  <div class="mt-12 overflow-hidden">
    <WorkflowOverall />
  </div>
  <div class="mt-12 overflow-hidden">
    <IntegrationsOverall />
  </div>
  <div class="mt-12 overflow-hidden">
    <TaxOverall />
  </div>
  <div class="mt-12 overflow-hidden">
    <WorkflowEdit />
  </div>
  <div class="mt-12 overflow-hidden">
    <SubscriptionMassChange />
  </div>
  <div class="mt-12 overflow-hidden">
    <TechSdk />
  </div>
</template>

<script setup lang="ts">
import WorkflowOverall from "~/components/features/Workflow/WorkflowOverall.vue";
import TaxOverall from "~/components/features/Tax/TaxOverall.vue";
import IntegrationsOverall from "~/components/features/Integrations/IntegrationsOverall.vue";
import SubscriptionMassChange from "~/components/features/SubscriptionManagement/SubscriptionMassChange.vue";
import WorkflowEdit from "~/components/features/Workflow/WorkflowEdit.vue";
import TechSdk from "~/components/features/Tech/TechSdk.vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('departments.tech.browser_title'),
});
</script>

<style scoped>

</style>

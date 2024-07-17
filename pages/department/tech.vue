<template>
  <PageHero>
    <template v-slot:title>
      {{ $t('departments.tech.title') }}
    </template>
    <template v-slot:subtitle>
      {{ $t('departments.tech.subtitle') }}
    </template>
  </PageHero>
  <div class="mt-24">
    <WorkflowOverall />
  </div>
  <div class="mt-24">
    <IntegrationsOverall />
  </div>
  <div class="mt-24">
    <TaxOverall />
  </div>
</template>

<script setup lang="ts">
import WorkflowOverall from "~/components/features/Workflow/WorkflowOverall.vue";
import TaxOverall from "~/components/features/Tax/TaxOverall.vue";
import IntegrationsOverall from "~/components/features/Integrations/IntegrationsOverall.vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('departments.tech.browser_title'),
});
</script>

<style scoped>

</style>

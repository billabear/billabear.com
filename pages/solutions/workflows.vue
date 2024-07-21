
<script setup lang="ts">
import WorkflowOverall from "~/components/features/Workflow/WorkflowOverall.vue";
import WorkflowEdit from "~/components/features/Workflow/WorkflowEdit.vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('pages.workflow.browser_title'),
});
</script>


<template>
  <PageHero>
    <template v-slot:title>
      {{ $t('pages.workflow.title') }}
    </template>
    <template v-slot:subtitle>
      {{ $t('pages.workflow.subtitle') }}
    </template>
  </PageHero>
    <div class="relative mt-24 overflow-hidden">
      <div class="relative">
        <WorkflowOverall />
      </div>
      <div class="mt-24 overflow-hidden">
        <WorkflowEdit />
      </div>
    </div>
</template>

<style scoped>

</style>

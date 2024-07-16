
<script setup lang="ts">
import WorkflowOverall from "~/components/features/Workflow/WorkflowOverall.vue";
import WorkflowEdit from "~/components/features/Workflow/WorkflowEdit.vue";

const { locale, setLocale, t } = useI18n()
useHead({
  title: t('pages.workflow.browser_title'),
});
</script>


<template>
  <section class="">

    <div class="relative pt-16 pb-32 overflow-hidden">
      <div class="relative">
        <WorkflowOverall />
      </div>
      <div class="mt-24">
        <WorkflowEdit />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>

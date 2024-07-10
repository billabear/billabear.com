
<script setup lang="ts">
import WorkflowOverall from "~/components/features/Workflow/WorkflowOverall.vue";

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
    </div>
  </section>
</template>

<style scoped>

</style>

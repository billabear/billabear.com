<script setup lang="ts">

import SubscriptionManagementOverall
  from "~/components/features/SubscriptionManagement/SubscriptionManagementOverall.vue";
import SubscriptionMassChange from "~/components/features/SubscriptionManagement/SubscriptionMassChange.vue";
</script>

<template>
  <div class="relative">
    <SubscriptionManagementOverall />
  </div>
  <div class="mt-24">
    <SubscriptionMassChange />
  </div>
</template>

<style scoped>

</style>

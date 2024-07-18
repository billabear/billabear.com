<template>

  <div class="py-12 mb-28 bg-gradient-to-r from-cyan-600 to-teal-600">
    <div class="mx-auto max-w-4xl">
      <h1 class="text-center text-4xl text-white">
        <slot name="title"></slot>
      </h1>
      <h2 class="text-2xl text-center mt-3 text-slate-300" >
        <slot name="subtitle"></slot>
      </h2>
      <p class="text-center text-white text-xl">Written by {{author}} on {{formattedDate  }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import moment from "moment";
const props = defineProps({
  date: String,
  author: String
})
const formattedDate =moment(props.date).format('LL')
</script>

<style scoped>

</style>

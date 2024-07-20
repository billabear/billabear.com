<template>
  <div class="lg:mx-auto lg:max-w-7xl lg:px-8 relative">
    <ContentList :query="query" >
      <template #default="{ list }">
        <div class="my-5 relative clear-both" v-for="article in list" :key="article._path">
          <NuxtLink :to="article._path" class="mb-5 text-3xl font-medium">{{ article.title }}</NuxtLink>
          <p class="my-5">{{ article.description }}</p>
        </div>
      </template>

      <template #not-found>
        <p>No articles found.</p>
      </template>

    </ContentList>

  </div>
</template>

<script setup lang="ts">

import type {QueryBuilderParams} from "@nuxt/content";

const query: QueryBuilderParams = { path: '/blog', where: [{ _draft: false }], limit: 5, sort: [{ date: -1 }] }
useHead({
  title: 'BillaBear - Blog',
});
</script>

<style scoped>

</style>

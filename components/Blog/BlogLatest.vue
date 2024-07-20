<template>

  <div>
    <div class="bg-teal-500 text-white font-bold p-5 text-xl">{{ $t('blog.latest.title') }}</div>
    <div class="my-5">

      <ContentList :query="query" >
        <template #default="{ list }">

          <ul class="list-disc">
            <li class="ml-5 my-2 relative clear-both" v-for="article in list" :key="article._path">
              <NuxtLink :to="article._path" class="mb-5 font-medium hover:underline">{{ article.title }}</NuxtLink>
            </li>
          </ul>
        </template>

        <template #not-found>
          <p>No articles found.</p>
        </template>

      </ContentList>
    </div>
  </div>
</template>

<script setup lang="ts">

import type {QueryBuilderParams} from "@nuxt/content";

const query: QueryBuilderParams = { path: '/blog', where: [{ _draft: false }], limit: 5, sort: [{ date: -1 }] }
</script>

<style scoped>

</style>

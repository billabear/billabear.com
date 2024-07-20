<template>
  <div>
    <PageHero>
      <template v-slot:title>
        {{ $t('blog.list.title') }}
      </template>
      <template v-slot:subtitle>
        {{ $t('blog.list.subtitle') }}
      </template>
    </PageHero>
    <div class="mt-24 lg:mx-auto lg:max-w-7xl lg:px-8 relative lg:grid lg:grid-cols-4 ">
        <div class="col-span-3 mr-7">
      <ContentList :query="query" >
        <template #default="{ list }">
          <div class="my-5 relative clear-both" v-for="article in list" :key="article._path">
            <NuxtLink :to="article._path" class="mb-5 text-3xl font-medium underline">{{ article.title }}</NuxtLink>
            <p class="my-5 text-slate-600">{{ article.description }}</p>
            <NuxtLink :to="article._path" class="mb-5 text-md font-medium hover:underline">{{ $t('blog.list.read_more') }}</NuxtLink>

          </div>
        </template>

        <template #not-found>
          <p>No articles found.</p>
        </template>

      </ContentList>
        </div>
      <div>
        <BlogTop/>
      </div>
    </div>
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

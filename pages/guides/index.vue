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
      <ContentList :query="query">
        <template #default="{ list }">
          <div class="my-5 relative clear-both" v-for="article in list" :key="article._path">
            <NuxtLink :to="article._path" class="mb-5 text-3xl font-medium underline">{{ article.title }}</NuxtLink>
            <p class="my-5 text-slate-600">{{ article.description }}</p>
            <NuxtLink :to="article.slug" class="mb-5 text-md font-medium hover:underline">{{ $t('blog.list.read_more') }}</NuxtLink>

          </div>
        </template>

        <template #not-found>
          <p>No articles found.</p>
        </template>

      </ContentList>


          <nav v-if="totalPages > 1" aria-label="Pagination">

            <ul class="flex">
              <li class="p-2 page-item" v-if="page != 1 ">
                <button @click="page--"   class="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              <li class="p-2 page-item" v-for="n in totalPages" :key="n">
                <button @click="page = n"  class="border rounded-lg p-2 font-medium hover:bg-gray-200" :class="{ active: n === page }" v-if="n !== page">{{ n }}</button>
                <button disabled class="border rounded-lg p-2 text-gray-500" v-else>{{ n }}</button>
              </li>
              <li class="p-2 page-item" v-if="page !== totalPages">
                <button @click="page++" class="page-link" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      <div>
        <BlogTop/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue';
import type { QueryBuilderParams } from "@nuxt/content";

useHead({
  title: 'BillaBear - Guides',
});
const postsPerPage = 5;
const page = ref(Number(useRoute().query.page) || 1); // Get page from route or default to 1

const skip = (page.value - 1) * postsPerPage; // Calculate skip based on page number
const query: QueryBuilderParams = {
  path: '/guides',
  where: [{seo: false}],
  limit: postsPerPage,
  sort: [{date: -1}],
  skip
};

// Calculate total pages based on total articles count (optional)
const totalArticles = await queryContent('guides').where({seo: false}).count();
const totalPages = Math.ceil(totalArticles / postsPerPage);
watch(page, (newValue, oldValue) => {
  window.location.search = '?page=' + newValue;
})
</script>

<style scoped>

</style>

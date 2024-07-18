<template>
  <BlogHero :author="article.author.display_name" :date="article.date">

    <template v-slot:title>
      {{ article.title }}
    </template>
    <template v-slot:subtitle>
      {{ article.meta.description }}
    </template>
  </BlogHero>


  <div class="lg:mx-auto lg:max-w-7xl lg:px-8 relative lg:grid lg:grid-cols-4 ">
    <div class="col-span-3 mr-7">
      <ContentRenderer :value="article">
        <h1>{{ article.title }}</h1>
        <ContentRendererMarkdown :value="article" />
      </ContentRenderer>
    </div>
    <div>
      <div class="bg-teal-500 text-white font-bold p-5 text-xl">Latest Posts</div>
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
  </div>
</template>

<script setup lang="ts">

const route = useRoute()
const slug = route.params.slug

const article = await queryContent('blog')
    .where({slug: slug})
    .findOne()

if (!article) {
  // Handle the case where no article is found with the slug
  console.error(`Article with slug "${slug}" not found.`)
  // You can redirect to a 404 page here:
  // return useRouter().push('/404')
}

useHead({
  title: 'BillaBear - Blog - ' + article.title,
});


import type {QueryBuilderParams} from "@nuxt/content";

const query: QueryBuilderParams = { path: '/blog', where: [{ _draft: false }], limit: 5, sort: [{ date: -1 }] }
</script>

<style>

h1 {
  @apply text-4xl mb-5;
}
h2 {
  @apply text-3xl my-5 underline;
}
h3 {
  @apply text-2xl font-bold my-5;
}
p{
  @apply my-3;
}
img {
  @apply my-2;
}

thead th {
  @apply bg-teal-500 text-white font-medium p-3;
}
tbody td:nth-child(1) {

  @apply bg-teal-500 text-white font-medium;
}
tbody td {
  @apply p-2 border border-teal-500;
}
pre {
  @apply my-5 bg-black p-3 overflow-auto;
}
</style>

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
      <BlogLatest />
      <BlogTop />
    </div>
  </div>
</template>

<script setup lang="ts">

const route = useRoute()
const slug = route.params.slug

const article = await queryContent('blog')
    .where({slug: slug, _draft: false})
    .findOne()

if (!article) {
  // Handle the case where no article is found with the slug
  console.error(`Article with slug "${slug}" not found.`)
  // You can redirect to a 404 page here:
  useRouter().push('/')
}

useHead({
  title: 'BillaBear - Blog - ' + article.title,
});


import type {QueryBuilderParams} from "@nuxt/content";

const query: QueryBuilderParams = { path: '/blog', where: [{ _draft: false }], limit: 5, sort: [{ date: -1 }] }
</script>

<style scoped>

h1 {
  @apply text-4xl mb-5;
}
h2 {
  @apply text-3xl my-5 underline;
}
h3 {
  @apply text-2xl font-bold my-5;
}
h4 {
  @apply text-2xl font-bold my-5;
}
ul {
  @apply list-disc;
}
ol {
  @apply list-decimal;
}
li {
  @apply p-1 ml-5;
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

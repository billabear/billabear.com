<template>
  <div class="bg-gradient-to-r from-fuchsia-900 to-fuchsia-950 w-full m-auto">
    <div class="w-3/4 py-24 m-auto grid grid-cols-2 gap-5">
      <div class="my-auto">
        <h1 class="text-5xl text-white  headline">
          <slot name="title"></slot>
        </h1>

        <h2 class="text-2xl text-white py-5 subtext">
          <slot name="subtitle"></slot>
        </h2>
        <div>
          <slot name="buttons"></slot>
        </div>
      </div>
      <div class="m-auto">
        <slot name="image"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

.headline {
  font-family: "DM Serif Text", serif;
}
.subtext {
  font-family: "Open Sans", serif;
}
</style>

<!-- @format -->

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  sectionClass: {
    type: String,
  },
});
</script>

<template>
  <div
    class="w-full h-full p-16 flex flex-col justify-start items-start shadow-sm shadow-black/20 gap-8"
    :class="sectionClass">
    <h2 v-if="title" class="text-3xl text-white">{{ title }}</h2>
    <slot />
  </div>
</template>

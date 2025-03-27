<!-- @format -->

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  sectionClass: {
    type: String,
  },
  padding: {
    type: String,
    default: "px-8 lg:px-16 2xl:px-48 py-16 lg:py-24",
  },
});
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-start items-center lg:items-start shadow-sm shadow-black/20 gap-8"
    :class="[sectionClass, padding]">
    <h2 v-if="title" class="text-3xl lg:text-5xl text-white">{{ title }}</h2>
    <slot />
  </div>
</template>

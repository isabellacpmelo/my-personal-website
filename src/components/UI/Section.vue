<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  light: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="w-full h-full flex flex-col justify-center items-center shadow-sm shadow-black/20 gap-8 p-4 sm:p-8 md:p-12 lg:p-16 2xl:p-24 text-sm 2xl:text-base"
    :class="{
      'bg-secondary text-darkText': light,
      'bg-primary text-lightText': !light,
    }">
    <h2
      v-if="title"
      class="text-3xl lg:text-5xl"
      :class="{
        'text-primary': light,
        'text-secondary': !light,
      }">
      {{ title }}
    </h2>
    <slot />
  </div>
</template>

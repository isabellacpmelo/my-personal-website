<!-- @format -->

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  light: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="min-h-screen md:h-screen w-full flex flex-col justify-start items-center md:items-start shadow-sm shadow-black/20 gap-8 p-4 sm:p-8 md:p-12 lg:p-16 xl:p-24 text-sm md:text-base"
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

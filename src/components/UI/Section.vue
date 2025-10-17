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
    class="w-full h-full flex flex-col justify-start items-center md:items-start gap-8 p-4 sm:p-8 md:p-12 lg:p-16 2xl:p-28 text-[12px] md:text-base lg:text-[16px] 2xl:text-[20px] mx-auto"
    :class="{
      'bg-lightText text-darkText': light,
      'bg-primary text-lightText': !light,
    }">
    <h2
      v-if="title"
      class="text-3xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-12 md:mt-0 sm:my-8 lg:my-12 2xl:my-16 font-[400]"
      :class="{
        'text-primary': light,
        'text-lightText': !light,
      }">
      {{ title }}
    </h2>
    <slot />
  </div>
</template>

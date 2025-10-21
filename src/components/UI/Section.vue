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
    class="w-full h-full flex flex-col justify-start items-center py-14 px-4 sm:p-8 md:p-12 lg:p-16 text-[12px] lg:text-[14px] 2xl:text-[18px]"
    :class="{
      'bg-lightText text-darkText': light,
      'bg-primary text-lightText': !light,
    }">
    <h2
      v-if="title"
      class="text-3xl lg:text-4xl 2xl:text-6xl font-[350] mb-10 md:mb-8 2xl:my-16"
      :class="{
        'text-primary': light,
        'text-lightText': !light,
      }">
      {{ title }}
    </h2>
    <slot />
  </div>
</template>

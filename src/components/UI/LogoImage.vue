<script setup>
const props = defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
});
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    v-bind="$attrs"
    class="h-14 md:h-16 xl:h-20 2xl:h-24 hover:scale-[1.02] hover:opacity-70 transition-all ease-in-out duration-700 hover:blur-xs" />
</template>

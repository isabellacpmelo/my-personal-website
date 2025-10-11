<script setup>
const props = defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
})
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    v-bind="$attrs"
    class="h-14 hover:scale-[1.05] hover:opacity-75 transition-all ease-in-out duration-1000" />
</template>

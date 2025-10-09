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
  <img :src="src" :alt="alt" v-bind="$attrs" class="h-14" />
</template>

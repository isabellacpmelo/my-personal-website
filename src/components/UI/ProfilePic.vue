<script setup>
const props = defineProps({
  isMinimized: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="bg-mustard rounded-full"
    :class="{
      'h-10 w-10 md:w-12 md:h-12': isMinimized,
      'h-44 w-44 md:h-52 md:w-52 lg:h-64 lg:w-64 2xl:h-96 2xl:w-96':
        !isMinimized,
    }">
    <img src="@/assets/img/profile-pic.png" />
  </div>
</template>

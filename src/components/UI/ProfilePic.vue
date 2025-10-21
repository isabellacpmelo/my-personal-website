<script setup>
const props = defineProps({
  isMinimized: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div class="relative group" style="opacity: 1; transform: none">
    <div
      class="absolute inset-0 rounded-full bg-mustard group-hover:blur-sm transition duration-700 delay-75 ease-in-out"></div>
    <div
      class="relative rounded-full overflow-hidden"
      :class="{
        'h-8 w-8 2xl:h-10 2xl:w-10': isMinimized,
        'h-44 w-44 md:h-52 md:w-52 lg:h-64 lg:w-64 2xl:h-96 2xl:w-96':
          !isMinimized,
      }">
      <img
        src="@/assets/img/profile-pic.png"
        alt="My profile pic"
        class="w-full h-full rounded-full object-cover" />
    </div>
  </div>
</template>

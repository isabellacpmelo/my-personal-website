<script setup>
const props = defineProps({
  label: {
    type: String,
    default: 'Label here',
  },
  icon: {
    type: String,
    default: '',
  },
  light: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div>
    <!-- <button
      :disabled="disabled"
      :class="[textColor, bgColor]"
      class="rounded-md group hover:shadow-sm hover:shadow-black/30">
      <div
        class="flex px-1.5 lg:px-3 py-1 rounded-md hover:bg-black/25 transition-colors duration-300">
        <div class="group-hover:animate-shake">{{ label }}</div>
        <div class="group-hover:animate-shake">
          <i :class="icon" class="ml-2" />
        </div>
      </div>
    </button> -->
    <button
      class="border transition-all delay-75 px-2 py-1 rounded-full flex justify-center items-center gap-1 font-medium"
      :class="{
        'border-secondary hover:border-mustard text-secondary hover:text-mustard':
          light,
        'border-darkText hover:border-mustard text-darkText hover:text-mustard':
          !light,
      }">
      <i v-if="icon" :class="icon" />
      <span>{{ label }}</span>
    </button>
  </div>
</template>

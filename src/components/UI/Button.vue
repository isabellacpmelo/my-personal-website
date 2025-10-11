<script setup>
const props = defineProps({
  label: {
    type: String,
  },
  icon: {
    type: String,
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
    <button
      :disabled="disabled"
      class="border transition duration-700 ease-in-out delay-75 rounded-full font-medium"
      :class="{
        'border-secondary hover:border-mustard text-secondary hover:text-mustard':
          light,
        'border-darkText hover:border-mustard text-darkText hover:text-mustard':
          !light,
      }">
      <div
        v-if="label || icon"
        class="px-2 py-1 flex justify-center items-center gap-1">
        <i v-if="icon" :class="icon" />
        <span v-if="label">{{ label }}</span>
      </div>
      <slot></slot>
    </button>
  </div>
</template>

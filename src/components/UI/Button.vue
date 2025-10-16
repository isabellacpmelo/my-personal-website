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
      class="border-[1.5px] transition duration-700 ease-in-out delay-75 rounded-full font-medium"
      :class="{
        'hover:border-mustard hover:text-mustard': !disabled,
        'border-lightText  text-lightText ': light,
        'border-darkText text-darkText ': !light,
        'cursor-not-allowed opacity-60': disabled,
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

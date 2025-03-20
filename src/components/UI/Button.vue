<!-- @format -->
<script setup>
const props = defineProps({
  label: {
    type: String,
    default: "Label here",
  },
  icon: {
    type: String,
    default: "bi-box-arrow-up-right",
  },
  textColor: {
    type: String,
    default: "text-blue-500",
  },
  bgColor: {
    type: String,
    default: "bg-white",
  },
  iconLeft: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div>
    <button
      :disabled="disabled"
      :class="[textColor, bgColor]"
      class="flex px-3 py-1 rounded-md font-medium">
      <div>{{ label }}</div>
      <div>
        <i :class="icon" class="ml-2" />
      </div>
    </button>
  </div>
</template>

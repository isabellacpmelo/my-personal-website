<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: "bi-list",
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
  title: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div>
    <button
      :disabled="disabled"
      :class="[textColor, bgColor]"
      :title="title"
      :aria-label="title"
      class="px-1.5 lg:px-3 py-1 rounded-md font-medium">
      <div>
        <i :class="icon" />
      </div>
    </button>
  </div>
</template>

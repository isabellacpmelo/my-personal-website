<script setup>
const props = defineProps({
  href: {
    type: String,
    default: '/',
  },
  label: {
    type: String,
    default: 'Link',
  },
  icon: {
    type: String,
    default: 'bi-box-arrow-up-right',
  },
  color: {
    type: String,
    default: 'text-blue-500',
  },
  fontSize: {
    type: String,
    default: 'text-sm',
  },
  iconLeft: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div>
    <a
      :href="href"
      target="_blank"
      class="flex items-center gap-2 hover:font-semibold w-fit"
      :class="[
        color,
        fontSize,
        {
          'flex-row-reverse justify-end': iconLeft == true,
        },
      ]">
      <span>{{ label }}</span>
      <i :class="icon" />
    </a>
  </div>
</template>

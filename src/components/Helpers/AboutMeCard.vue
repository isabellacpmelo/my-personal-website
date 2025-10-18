<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  icon: {
    type: String,
  },
  cardClasses: {
    type: String,
    default: 'from-primary/20 via-white to-mustard/20',
  },
  borderCard: {
    type: String,
    default: 'border-lightBlue/20 hover:border-lightBlue/40',
  },
  iconClasses: {
    type: String,
    default: 'from-primary to-lightBlue',
  },
})
</script>

<template>
  <div
    class="group bg-white rounded-2xl shadow-lg hover:shadow-xl overflow-hidden border"
    :class="props.borderCard">
    <div
      class="p-3 2xl:p-6 bg-gradient-to-br transition-all duration-300"
      :class="props.cardClasses">
      <slot name="content" />
      <div
        v-if="!$slots.content"
        class="flex items-center gap-2 2xl:gap-3 mb-2 2xl:mb-6">
        <div
          class="w-6 h-6 bg-gradient-to-br rounded-full flex items-center justify-center shadow-lg"
          :class="props.iconClasses">
          <i class="bi text-lightText text-sm" :class="props.icon" />
        </div>
        <h3 class="text-md font-semibold text-darkText">
          {{ props.title }}
        </h3>
      </div>
      <div>
        <p
          v-if="!$slots.default && !props.content"
          class="text-darkText/80 leading-relaxed">
          {{ props.description }}
        </p>
        <slot />
      </div>
    </div>
  </div>
</template>

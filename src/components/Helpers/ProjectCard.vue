<script setup>
const props = defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
  title: {
    type: String,
  },
  linkSite: {
    type: String,
  },
  linkRep: {
    type: String,
  },
});
</script>

<template>
  <div class="bg-primary rounded-2xl h-[350px] flex flex-col items-center py-4">
    <ImageFrameComputer :src="src" :alt="alt" class="hidden sm:flex" />
    <ImageFrameMobile :src="src" :alt="alt" class="flex sm:hidden" />
    <div
      class="w-60 h-full flex flex-col items-center justify-between text-center text-secondary mt-4 w-[320px] max-w-[320px]">
      <h3 class="font-semibold">
        {{ title }}
      </h3>
      <div class="flex flex-col gap-1.5">
        <a
          v-if="linkSite"
          :href="linkSite"
          target="_blank"
          rel="noopener noreferrer">
          Visitar projeto
        </a>
        <a
          v-if="linkRep"
          :href="linkRep"
          target="_blank"
          rel="noopener noreferrer">
          Visitar repositório
        </a>
      </div>
    </div>
  </div>
</template>

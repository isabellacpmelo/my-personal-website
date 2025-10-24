<script setup>
const props = defineProps({
  item: {
    item: String,
  },
})
</script>

<template>
  <div class="px-2">
    <div
      class="group bg-gradient-to-br from-lightBlue/25 to-lightBlue/10 rounded-xl p-3 border border-lightBlue/30 transition-all duration-300 transform hover:-translate-y-1 max-w-sm h-[330px] flex flex-col justify-between">
      <div class="mb-2 flex justify-center">
        <div>
          <ImageFrameComputer
            :src="item.img"
            :alt="item.alt"
            class="hidden sm:flex" />
          <ImageFrameMobile
            :src="item.img"
            :alt="item.alt"
            class="flex sm:hidden" />
        </div>
      </div>

      <div class="flex flex-col gap-3 h-full justify-between">
        <div class="text-center">
          <h3
            class="font-bold text-darkText group-hover:text-primary transition-colors">
            {{ item.title }}
          </h3>
        </div>

        <p class="text-darkText/80 leading-relaxed line-clamp-2 text-center">
          {{ item.description }}
        </p>

        <div class="flex justify-center flex-wrap gap-1 pb-2">
          <span
            v-for="tag in item.tags.slice(0, 4)"
            :key="tag"
            class="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded border border-primary/20">
            {{ tag }}
          </span>
        </div>
      </div>
      <div class="flex justify-center gap-2 pt-2 w-full">
        <a
          v-if="item.linkSite"
          :href="item.linkSite"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-gradient-to-r from-primary to-lightBlue text-lightText rounded-md font-medium hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 text-xs w-[45%] flex items-center justify-center py-1 gap-1">
          <i class="bi bi-box-arrow-up-right" />
          <span>Ver Projeto</span>
        </a>
        <a
          v-if="item.linkRep"
          :href="item.linkRep"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-gradient-to-r from-mustard/90 to-mustard text-white rounded-md font-medium hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 text-xs w-[45%] flex items-center justify-center py-1 gap-1">
          <i class="bi bi-github" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </div>
</template>

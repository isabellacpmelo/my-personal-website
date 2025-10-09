<script setup>
const props = defineProps({
  project: {
    type: Object,
  },
})
</script>
<template>
  <Card class="hover:animate-shake">
    <div
      class="flex flex-col justify-between items-center rounded-2xl w-full h-full text-white gap-3 p-8 bg-black/50 shadow-md shadow-white/10">
      <div class="flex justify-center w-full h-2/5">
        <img
          :src="project.img"
          :alt="project.alt"
          class="h-[150px] w-[280px] border-2 border-gray-500 rounded-xl" />
      </div>
      <div class="h-2/5 flex flex-col items-center">
        <div class="h-2/3 text-center">
          <h2 class="font-semibold text-lg">{{ project.title }}</h2>
          <p class="mt-2 text-[14px]">{{ project.description }}</p>
        </div>
        <div class="flex flex-col gap-1 mt-4 h-1/3">
          <ExternalLink :href="project?.linkSite" label="Visitar projeto" />
          <ExternalLink :href="project.linkRep" label="Visitar repositório" />
        </div>
      </div>
      <div class="">
        <ul class="flex gap-2">
          <li
            v-for="(tag, index) in project.tags"
            :key="index"
            class="bg-sky-950 px-2 rounded-full h-6 flex items-center text-[10px]">
            {{ tag }}
          </li>
        </ul>
      </div>
    </div>
  </Card>
</template>

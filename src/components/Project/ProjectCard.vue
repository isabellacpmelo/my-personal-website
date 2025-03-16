<!-- @format -->

<script setup>
const props = defineProps({
  project: {
    type: Object,
  },
});
</script>
<template>
  <div
    class="flex flex-col justify-between items-center rounded-2xl w-[350px] hover:w-[351px] h-[420px] text-white gap-3 p-8 bg-black/50 shadow-md shadow-white/10">
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
      <div class="flex flex-col gap-1 mt-2 h-1/3">
        <a
          href="/"
          class="flex items-center gap-2 text-blue-500 text-sm hover:font-semibold">
          <span>Visitar projeto</span>
          <i class="bi bi-box-arrow-up-right" />
        </a>
        <a
          href="/"
          class="flex items-center gap-2 text-blue-500 hover:text-blue-800 text-sm hover:font-semibold">
          <span>Visitar repositório</span>
          <i class="bi bi-box-arrow-up-right" />
        </a>
      </div>
    </div>
    <div class="">
      <ul class="flex gap-2">
        <li
          v-for="(tag, index) in project.tags"
          :key="index"
          class="bg-sky-950 px-2 rounded-full h-5 flex items-center text-[10px]">
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>

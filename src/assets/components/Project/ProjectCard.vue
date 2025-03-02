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
    class="flex flex-col justify-between items-start rounded-2xl w-[400px] hover:w-[401px] text-white gap-3 p-8 bg-black my-4">
    <div class="flex justify-center w-full">
      <img
        :src="project.img"
        :alt="project.alt"
        class="h-[180px] w-[350px] border-2 border-gray-500 rounded-xl" />
    </div>
    <div>
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
      <div class="flex flex-col gap-1">
        <a href="/">
          <!-- <span>ícone de link externo</span> -->
          Repositório
        </a>
        <a href="/">
          <!-- <span>ícone de link externo</span> -->
          Link Projeto
        </a>
      </div>
    </div>
    <div>
      <ul class="flex gap-2">
        <li
          v-for="(tag, index) in project.tags"
          :key="index"
          class="bg-sky-950 px-3 pb-0.5 rounded-full h-8 flex items-center">
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>

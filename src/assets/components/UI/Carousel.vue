<!-- @format -->

<script setup>
import ProjectCard from "@/assets/components/Project/ProjectCard.vue";

const props = defineProps({
  items: {
    type: Array,
  },
});

const currentIndex = ref(0);
const itemsPerPage = 3;

const next = () => {
  if (currentIndex.value < Math.ceil(props.items.length / itemsPerPage) + 1) {
    currentIndex.value++;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};
</script>

<template>
  <div v-if="items && items?.length > 0">
    <div class="mt-10 relative w-full overflow-hidden">
      <div
        class="flex transition-transform"
        :style="`transform: translateX(-${
          currentIndex * (100 / itemsPerPage)
        }%)`">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="w-1/3 flex-shrink-0 p-2">
          <ProjectCard :project="item" class="h-[450px]" />
        </div>
      </div>
    </div>

    <!-- Controles do Carrossel -->
    <div class="mt-4 flex justify-between">
      <button @click="prev" class="px-4 py-2 bg-gray-700 text-white rounded">
        Anterior
      </button>
      <button @click="next" class="px-4 py-2 bg-gray-700 text-white rounded">
        Próximo
      </button>
    </div>
  </div>
  <div v-else class="bg-black/50 text-white w-full flex justify-center">
    <p>Não há elementos para serem exibidos.</p>
  </div>
</template>

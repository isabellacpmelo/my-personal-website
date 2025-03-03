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
  <div
    v-if="items && items?.length > 0"
    class="flex items-center w-full justify-between">
    <div>
      <button
        @click="prev"
        class="h-8 w-8 bg-gray-950/70 text-white rounded-full flex items-center justify-center">
        <
      </button>
    </div>

    <div class="overflow-hidden w-10/12">
      <div
        class="flex transition-transform"
        :style="`transform: translateX(-${
          currentIndex * (100 / itemsPerPage)
        }%)`">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="w-1/3 flex-shrink-0">
          <ProjectCard :project="item" />
        </div>
      </div>
    </div>
    <div>
      <button
        @click="next"
        class="h-8 w-8 bg-gray-950/70 text-white rounded-full flex items-center justify-center">
        >
      </button>
    </div>
  </div>
  <div v-else class="bg-black/50 text-white w-full flex justify-center">
    <p>Não há elementos para serem exibidos.</p>
  </div>
</template>

<style scoped>
.flex {
  transition: transform 0.9s ease-in-out;
}
</style>

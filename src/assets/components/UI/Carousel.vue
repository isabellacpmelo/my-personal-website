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
const totalPages = props.items.length
  ? Math.ceil(props.items.length / itemsPerPage) + 1
  : 0;

const next = () => {
  if (currentIndex.value < totalPages) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = totalPages;
  }
};

let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    next();
  }, 3500);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div v-if="items && items?.length > 0" class="w-full">
    <div class="flex items-center w-full justify-between">
      <div>
        <button
          @click="prev"
          class="h-8 w-8 bg-gray-950/70 text-white rounded-full flex items-center justify-center">
          <
        </button>
      </div>

      <div class="overflow-hidden w-10/12 h-[430px]">
        <div
          class="flex transition-transform"
          :style="`transform: translateX(-${
            currentIndex * (100 / itemsPerPage)
          }%)`">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="w-1/3 mr-4 flex-shrink-0">
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
    <!-- div das bolinhas -->
    <div class="w-full flex items-center justify-center gap-2 mt-10">
      <div
        v-for="(item, index) in totalPages + 1"
        :key="index"
        class="rounded-full"
        :class="
          index === currentIndex
            ? 'bg-white h-2 w-2'
            : 'bg-gray-800 h-1.5 w-1.5'
        " />
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

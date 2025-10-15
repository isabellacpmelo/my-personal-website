<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const carouselRef = ref(null);
const currentIndex = ref(0);

const itemsPerView = ref(1);

const updateItemsPerView = () => {
  if (window.innerWidth >= 1024) {
    itemsPerView.value = 3;
  } else if (window.innerWidth >= 768) {
    itemsPerView.value = 2;
  } else {
    itemsPerView.value = 1;
  }
};

const maxIndex = computed(() => {
  return Math.max(0, props.items.length - itemsPerView.value);
});

const canGoPrev = computed(() => currentIndex.value > 0);
const canGoNext = computed(() => currentIndex.value < maxIndex.value);

const goToPrev = () => {
  if (canGoPrev.value) {
    currentIndex.value--;
    updateCarouselPosition();
  }
};

const goToNext = () => {
  if (canGoNext.value) {
    currentIndex.value++;
    updateCarouselPosition();
  }
};

const updateCarouselPosition = () => {
  if (carouselRef.value) {
    const itemWidth = 320;
    const gap = 24;
    const translateX = currentIndex.value * (itemWidth + gap);

    carouselRef.value.style.transform = `translateX(-${translateX}px)`;
  }
};

const handleResize = () => {
  const prevItemsPerView = itemsPerView.value;
  updateItemsPerView();

  if (currentIndex.value > maxIndex.value) {
    currentIndex.value = maxIndex.value;
    updateCarouselPosition();
  }
};

onMounted(() => {
  updateItemsPerView();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div class="relative w-full">
    <div
      class="overflow-hidden"
      :style="{
        width: `${itemsPerView * 320 + (itemsPerView - 1) * 24}px`,
        margin: '0 auto',
      }">
      <div
        ref="carouselRef"
        class="flex transition-transform duration-300 ease-in-out gap-6"
        :style="{ width: `${items.length * (320 + 24)}px` }">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex-shrink-0 w-[320px]">
          <slot :item="item" :index="index" />
        </div>
      </div>
    </div>

    <div
      v-if="items.length > itemsPerView"
      class="flex justify-center gap-4 mt-6">
      <button
        @click="goToPrev"
        :disabled="!canGoPrev"
        class="px-4 py-2 rounded-lg bg-primary text-secondary disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 transition-opacity">
        ← Anterior
      </button>

      <button
        @click="goToNext"
        :disabled="!canGoNext"
        class="px-4 py-2 rounded-lg bg-primary text-secondary disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-80 transition-opacity">
        Próximo →
      </button>
    </div>

    <div
      v-if="items.length > itemsPerView && maxIndex > 0"
      class="flex justify-center gap-2 mt-4">
      <button
        v-for="n in maxIndex + 1"
        :key="n - 1"
        @click="
          currentIndex = n - 1;
          updateCarouselPosition();
        "
        class="w-3 h-3 rounded-full transition-colors"
        :class="currentIndex === n - 1 ? 'bg-primary' : 'bg-gray-300'"></button>
    </div>
  </div>
</template>

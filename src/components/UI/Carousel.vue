<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  autoPlay: {
    type: Boolean,
    default: false,
  },
  autoPlayInterval: {
    type: Number,
    default: 3000,
  },
});

const carouselRef = ref(null);
const currentIndex = ref(0);
const itemsPerView = ref(1);
const isPlaying = ref(props.autoPlay);
const autoPlayTimer = ref(null);

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
  } else if (isPlaying.value) {
    currentIndex.value = 0;
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

const startAutoPlay = () => {
  if (props.items.length > itemsPerView.value) {
    autoPlayTimer.value = setInterval(() => {
      goToNext();
    }, props.autoPlayInterval);
  }
};

const stopAutoPlay = () => {
  if (autoPlayTimer.value) {
    clearInterval(autoPlayTimer.value);
    autoPlayTimer.value = null;
  }
};

const toggleAutoPlay = () => {
  isPlaying.value = !isPlaying.value;

  if (isPlaying.value) {
    startAutoPlay();
  } else {
    stopAutoPlay();
  }
};

const handleManualNavigation = (callback) => {
  const wasPlaying = isPlaying.value;
  stopAutoPlay();
  callback();

  if (wasPlaying) {
    setTimeout(() => {
      if (isPlaying.value) {
        startAutoPlay();
      }
    }, 3000);
  }
};

const handleResize = () => {
  const prevItemsPerView = itemsPerView.value;
  updateItemsPerView();

  if (currentIndex.value > maxIndex.value) {
    currentIndex.value = maxIndex.value;
    updateCarouselPosition();
  }

  if (isPlaying.value) {
    stopAutoPlay();
    startAutoPlay();
  }
};

onMounted(() => {
  updateItemsPerView();
  window.addEventListener("resize", handleResize);

  if (isPlaying.value) {
    startAutoPlay();
  }
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  stopAutoPlay();
});
</script>

<template>
  <div class="relative w-full flex items-center justify-center">
    <button
      v-if="items.length > itemsPerView && canGoPrev"
      @click="handleManualNavigation(goToPrev)"
      class="absolute z-10 h-6 w-6 rounded-full bg-primary text-lightText hover:opacity-80 transition-opacity shadow-lg"
      :style="{
        left: `calc(50% - ${
          (itemsPerView * 320 + (itemsPerView - 1) * 24) / 2
        }px - 32px)`,
      }">
      <i class="bi bi-arrow-left-short" />
    </button>

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

    <button
      v-if="items.length > itemsPerView && canGoNext"
      @click="handleManualNavigation(goToNext)"
      class="absolute z-10 h-6 w-6 rounded-full bg-primary text-lightText hover:opacity-80 transition-opacity shadow-lg"
      :style="{
        left: `calc(50% + ${
          (itemsPerView * 320 + (itemsPerView - 1) * 24) / 2
        }px + 10px)`,
      }">
      <i class="bi bi-arrow-right-short" />
    </button>
    <div
      v-if="items.length > itemsPerView"
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center gap-4 mt-6"
      style="transform: translate(-50%, 60px)">
      <button
        v-if="autoPlay"
        @click="toggleAutoPlay"
        class="px-4 py-2 rounded-lg bg-lightText text-primary hover:opacity-80 transition-opacity border border-primary">
        {{ isPlaying ? "⏸️ Pausar" : "▶️ Play" }}
      </button>
    </div>

    <div
      v-if="items.length > itemsPerView && maxIndex > 0"
      class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center gap-2"
      style="transform: translate(-50%, 40px)">
      <button
        v-for="n in maxIndex + 1"
        :key="n - 1"
        @click="
          handleManualNavigation(() => {
            currentIndex = n - 1;
            updateCarouselPosition();
          })
        "
        class="w-2 h-2 rounded-full transition-colors"
        :class="currentIndex === n - 1 ? 'bg-primary' : 'bg-gray-300'"></button>
    </div>
  </div>
</template>

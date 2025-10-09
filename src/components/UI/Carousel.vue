<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const currentIndex = ref(0)
const itemsPerPage = ref(3)

const totalPages = computed(() =>
  props.items.length
    ? Math.ceil(props.items.length / itemsPerPage.value) + 1
    : 0
)

const updateItemsPerPage = () => {
  const width = window.innerWidth
  if (width < 1025) {
    itemsPerPage.value = 1
  } else if (width < 1425) {
    itemsPerPage.value = 2
  } else {
    itemsPerPage.value = 3
  }
}

const next = () => {
  if (currentIndex.value < totalPages.value) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = totalPages.value
  }
}

const touchStartX = ref(0)
const touchEndX = ref(0)
const minSwipeDistance = 50

const onTouchStart = (event) => {
  touchStartX.value = event.touches[0].clientX
}

const onTouchMove = (event) => {
  touchEndX.value = event.touches[0].clientX
}

const onTouchEnd = () => {
  const distance = touchStartX.value - touchEndX.value

  if (Math.abs(distance) > minSwipeDistance) {
    if (distance > 0) {
      next()
    } else {
      prev()
    }
  }
}

onMounted(() => {
  updateItemsPerPage()
  window.addEventListener('resize', updateItemsPerPage)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateItemsPerPage)
})
</script>

<template>
  <div v-if="items && items.length > 0" class="w-full">
    <div class="flex items-center gap-3">
      <div class="">
        <button
          @click="prev"
          class="h-8 w-8 bg-gray-950/70 text-white rounded-full flex items-center justify-center">
          <
        </button>
      </div>

      <div
        class="overflow-hidden w-[300px] lg:w-[950px] 2xl:w-[1330px] h-full"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd">
        <div
          class="flex transition-transform"
          :style="`transform: translateX(-${
            currentIndex * (100 / itemsPerPage)
          }%)`">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="flex-shrink-0 mr-[2px]"
            :style="{ width: `${100 / itemsPerPage}%` }">
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

    <!-- Indicadores -->
    <div class="w-full flex items-center justify-center gap-2 mt-10">
      <div
        v-for="(_, index) in totalPages + 1"
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

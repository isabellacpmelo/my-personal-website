<script setup>
const props = defineProps({
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
})
</script>

<template>
  <div>
    <div class="group transition duration-700 ease-in-out">
      <div class="translate-x-10 translate-y-1 flex items-center gap-2">
        <div
          class="h-1.5 w-5 rounded-xl bg-gray-500 group-hover:bg-lightBlue transition duration-900"></div>
        <div
          class="h-1.5 w-5 rounded-xl bg-gray-500 group-hover:bg-lightBlue transition duration-900"></div>
      </div>
      <div class="flex items-center">
        <div
          class="bg-gray-500 group-hover:bg-lightBlue transition duration-900 h-12 rounded-lg w-2.5 flex flex-col items-center justify-center gap-1 translate-x-2.5 z-10">
          <div class="w-0.5 h-1 bg-white/50 animate-pulse" />
          <div class="w-0.5 h-4 bg-white/50 animate-pulse" />
        </div>
        <div
          class="rounded-2xl border-[4px] border-gray-500 group-hover:border-lightBlue bg-gray-500 group-hover:bg-black/60 h-32 w-64 flex items-center justify-between transition duration-900">
          <div
            class="h-[99.5%] w-[99.5%] overflow-hidden rounded-xl bg-gray-500 group-hover:bg-black/60">
            <img
              :src="src"
              :alt="alt"
              v-bind="$attrs"
              class="w-full h-full object-cover object-center group-hover:scale-[1.01] transition duration-300 ease-in-out" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

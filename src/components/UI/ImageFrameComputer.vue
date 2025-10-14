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
    <div class="border-2 border-lightBlue h-36 w-72 group">
      <div
        class="bg-lightBlue group-hover:bg-primary w-full h-[10%] flex justify-between items-center px-1 transition duration-700 ease-in-out border-[0.5px] border-lightBlue">
        <div class="h-full flex items-center gap-1">
          <div
            class="w-2 h-2 bg-lightText group-hover:bg-red-300 rounded-full group-hover:animate-pulse transition duration-700 ease-in-out delay-75" />
          <div
            class="w-2 h-2 bg-lightText group-hover:bg-yellow-300 rounded-full group-hover:animate-pulse transition duration-700 ease-in-out delay-100" />
          <div
            class="w-2 h-2 bg-lightText group-hover:bg-green-300 rounded-full group-hover:animate-pulse transition duration-700 ease-in-out delay-150" />
        </div>
        <div
          class="h-full flex items-center group-hover:opacity-75 transition duration-700 ease-in-out">
          <div class="text-lightText bi-dash" />
          <div class="text-lightText bi-x" />
        </div>
      </div>
      <div class="flex justify-between h-[90%] w-full overflow-hidden">
        <div class="w-[97%] overflow-hidden">
          <img
            :src="src"
            :alt="alt"
            v-bind="$attrs"
            class="w-full h-full object-cover object-center group-hover:scale-[1.01] transition duration-300 ease-in-out" />
        </div>

        <div
          class="border-l border-lightBlue w-[3%] h-full flex items-start bg-white">
          <div
            class="bg-lightBlue h-12 w-full mt-2 group-hover:bg-primary transition duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  </div>
</template>

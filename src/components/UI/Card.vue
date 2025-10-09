<template>
  <div
    class="group relative aspect-square h-[480px] 2xl:h-[500px] w-[290px] md:w-[300px] lg:w-[390] 2xl:w-[400px]"
    style="transform: none">
    <div
      class="absolute inset-0 rounded-2xl border border-[#4ADE80]/40 transition-all duration-400 group-hover:border-[#4ADE80]/80 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.25)]">
      <slot />
    </div>
  </div>
</template>

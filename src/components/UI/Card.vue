<!-- @format -->

<template>
  <div
    class="group relative aspect-square h-[420px] w-[330px] md:w-[350px]"
    style="transform: none">
    <div
      class="absolute inset-0 rounded-2xl border border-[#4ADE80]/40 transition-all duration-400 group-hover:border-[#4ADE80]/80 group-hover:shadow-[0_0_50px_rgba(74,222,128,0.25)]">
      <slot />
    </div>
  </div>
</template>

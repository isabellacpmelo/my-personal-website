<!-- @format -->
<script setup>
const iconsFoder = `${baseUrl}/src/assets/img/language-icon/`;

const languages = [
  {
    name: "Português",
    desc: "pt-br",
    icon: `${iconsFoder}/pt-br.png`,
  },
  {
    name: "Español",
    desc: "es",
    icon: `${iconsFoder}/es.png`,
  },
  {
    name: "English",
    desc: "en",
    icon: `${iconsFoder}/en.png`,
  },
];
</script>

<template>
  <div
    class="bg-white/10 w-full flex items-center gap-4 justify-between px-4 lg:px-16 2xl:px-24 py-2 text-white">
    <div class="flex items-center gap-6 lg:gap-12">
      <div class="relative group" style="opacity: 1; transform: none">
        <div
          class="absolute inset-0 rounded-full bg-gradient-to-r from-[#4a54de] via-[#ff2ee3] to-[#ec5cff] blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
        <div class="relative w-12 h-12 rounded-full overflow-hidden">
          <img
            src="/src/assets/img/my-pic-02.png"
            alt="Isabella Melo"
            class="w-full h-full rounded-full object-cover" />
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-tr from-[#4ADE80]/20 via-transparent to-[#2EBDFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
      <div
        class="hidden w-10 md:w-auto md:flex items-center gap-2 md:gap-4 lg:gap-8 text-sm xl:text-normal">
        <a href="#about-me">Sobre mim</a>
        <a href="#my-projects">Meus projetos</a>
        <a href="#contact">Contato</a>
      </div>
    </div>
    <div class="hidden md:flex items-center gap-8">
      <Button
        bg-color="bg-teal-700"
        text-color="text-white"
        label="Conheça meu
      currículo"
        icon="bi-download"
        class="text-[13px]"
        @click="downloadCurriculum" />
      <!-- <div class="flex items-center justify-end">
        <input
          type="text"
          id="site-search"
          name="q"
          class="relative text-black rounded-sm bg-white/80 pr-8" />
        <button disable class="absolute -translate-x-2 text-sm">
          <i class="bi-search text-black" />
        </button>
      </div> -->
      <button
        type="button"
        disabled
        class="flex items-center gap-2 text-sm xl:text-normal">
        <img
          :src="languages[0].icon"
          :alt="`${languages[0].desc}`"
          class="h-7 lg:h-8" />
        <span>{{ languages[0].name }}</span>
      </button>
    </div>
    <div class="flex md:hidden">
      <div>
        <ButtonIcon />
      </div>
    </div>
  </div>
</template>

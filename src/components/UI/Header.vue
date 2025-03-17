<!-- @format -->
<script setup>
const baseUrl = window.origin;
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
    class="bg-white/10 w-full flex items-center justify-between px-16 text-white">
    <div class="flex items-center gap-12">
      <div>
        <img
          src="/src/assets/img/my-pic-02.png"
          alt="My profile pic"
          class="h-12" />
      </div>
      <div class="flex items-center gap-8">
        <a href="#about-me">Sobre mim</a>
        <a href="#my-projects">Meus projetos</a>
        <a href="#contact">Contato</a>
      </div>
    </div>
    <div class="flex items-center gap-8">
      <div class="flex items-center justify-end">
        <input
          type="text"
          id="site-search"
          name="q"
          class="relative text-black rounded-sm bg-white/80 pr-8" />
        <button class="absolute -translate-x-2 text-sm">
          <i class="bi-search text-black" />
        </button>
      </div>
      <button class="flex items-center gap-2">
        <img
          :src="languages[0].icon"
          :alt="`${languages[0].desc}`"
          class="h-8" />
        <span>{{ languages[0].name }}</span>
      </button>
    </div>
  </div>
</template>

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
  <div class="bg-white/10 w-full flex items-center justify-between px-16">
    <div class="flex items-center gap-4">
      <div>icone</div>
      <div class="flex items-center gap-2">
        <div>Sobre mim</div>
        <div>Meus projetos</div>
        <div>Contato</div>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <div>Barra Pesquisa</div>
      <div class="flex items-center">
        <div>Idioma:</div>
        <div>
          <img
            :src="languages[0].icon"
            :alt="`${languages[0].desc}`"
            class="h-10" />
        </div>
      </div>
    </div>
  </div>
</template>

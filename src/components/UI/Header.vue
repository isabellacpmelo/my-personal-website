<script setup>
const iconsFoder = `${baseUrl}/img/language-icon/`;

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

const openMenu = ref(false);
const menuRef = ref(null);

const toggleMenu = (event) => {
  event.stopPropagation();
  openMenu.value = !openMenu.value;
};

const handleClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    openMenu.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div
    class="bg-primary/40 backdrop-blur-md border-b border-white/20 w-full flex items-center gap-4 justify-between px-8 lg:px-16 2xl:px-48 py-2 text-white relative">
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
      <div><ButtonIcon @click.stop="toggleMenu" /></div>
    </div>

    <!-- menu que só abre no mobile -->
    <transition
      enter-active-class="transition-opacity duration-300 ease-out transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-200 ease-in transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <div
        v-if="openMenu"
        ref="menuRef"
        class="top-16 right-8 absolute"
        @click.stop>
        <div
          class="bg-white p-4 text-black rounded-md grid grid-cols-1 shadow-lg">
          <div class="grid gap-2">
            <a
              href="#about-me"
              class="border-b border-black"
              @click="openMenu = false"
              >Sobre mim</a
            >
            <a
              href="#my-projects"
              class="border-b border-black"
              @click="openMenu = false"
              >Meus projetos</a
            >
            <a
              href="#contact"
              class="border-b border-black"
              @click="openMenu = false"
              >Contato</a
            >
          </div>

          <Button
            bg-color="bg-teal-700"
            text-color="text-white"
            label="Conheça meu currículo"
            icon="bi-download"
            class="text-[13px] my-4"
            @click="downloadCurriculum" />

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
      </div>
    </transition>
  </div>
</template>

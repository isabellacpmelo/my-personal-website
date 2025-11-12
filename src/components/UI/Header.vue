<script setup>
import ProfilePic from "./ProfilePic.vue";
import { useI18n } from "vue-i18n";
// @ts-ignore
import pkg from "../../../package.json";

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

const scrollToSection = inject("scrollToSection", null);

const navigateToSection = (sectionName, event) => {
  event.preventDefault();
  if (scrollToSection) {
    scrollToSection(sectionName);
  }
  openMenu.value = false;
};

const toggleMenu = (event) => {
  event.stopPropagation();
  openMenu.value = !openMenu.value;
};

const handleClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    openMenu.value = false;
  }
};

const { t } = useI18n();

const mappedSections = computed(() => [
  { name: "home", label: t("header.home") },
  { name: "about-me", label: t("header.aboutMe") },
  { name: "technologies", label: t("header.technologies") },
  { name: "my-projects", label: t("header.projects") },
  { name: "contact", label: t("header.contact") },
]);

const version = pkg.version;

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
      <button
        @click="navigateToSection('home', $event)"
        class="cursor-pointer"
        :title="t('header.backToTop')">
        <ProfilePic is-minimized />
      </button>
      <div
        v-for="section in mappedSections"
        :key="section.name"
        class="hidden w-10 md:w-auto md:flex items-center gap-2 md:gap-4 lg:gap-8 text-sm xl:text-[16px] tracking-wider">
        <button
          @click="navigateToSection(section.name, $event)"
          class="hover:text-mustard transition ease-in-out duration-700 delay-75">
          {{ section.label }}
        </button>
      </div>
    </div>

    <div class="hidden md:flex items-center gap-8">
      <ResumeButton class="max-h-8 text-xs" />
      <LanguageButton language="pt-BR" />
      <div class="text-xs text-gray-400">v{{ version }}</div>
    </div>
    <div class="flex md:hidden">
      <div>
        <ButtonIcon
          @click.stop="toggleMenu"
          bg-color="bg-lightBlue/40"
          text-color="text-lightText" />
      </div>
    </div>

    <!-- menu that only opens on mobile -->
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
        class="top-16 right-8 absolute bg-white rounded-lg"
        @click.stop>
        <div
          class="bg-primary/90 p-4 text-lightText rounded-md grid grid-cols-1 shadow-lg">
          <div
            v-for="section in mappedSections"
            :key="section.name"
            class="grid gap-2">
            <button
              @click="navigateToSection(section.name, $event)"
              class="border-b border-lightText hover:bg-gray-100 transition-colors p-2 rounded w-full text-center">
              {{ section.label }}
            </button>
          </div>

          <ResumeButton class="mt-4 text-xs mx-auto" />

          <LanguageButton language="pt-BR" class="mt-4 mx-auto" />
          <div class="text-xs text-gray-400 mt-4 mx-auto">v{{ version }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

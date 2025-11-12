<script setup>
import { useI18n } from "vue-i18n";
import portuguese from "@/assets/img/language-icon/pt-br.png";
import english from "@/assets/img/language-icon/en.png";
import spanish from "@/assets/img/language-icon/es.png";

const { locale, t } = useI18n();
const {
  changeLanguage,
  getLanguageFromUrl,
  getLanguageFromStorage,
  updateUrlWithLanguage,
} = useLanguage();
const route = useRoute();

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
});

const languages = computed(() => [
  {
    name: t("languages.portuguese"),
    src: portuguese,
    locale: "pt-BR",
    urlCode: "pt-br",
  },
  {
    name: t("languages.english"),
    src: english,
    locale: "en",
    urlCode: "en",
  },
  {
    name: t("languages.spanish"),
    src: spanish,
    locale: "es",
    urlCode: "es",
  },
]);

const isOpen = ref(false);
const dropdownRef = ref(null);

const currentLanguage = computed(() => {
  return (
    languages.value.find((lang) => lang.locale === locale.value) ||
    languages.value[0]
  );
});

const toggleDropdown = (event) => {
  if (props.disabled) return;
  event.stopPropagation();
  isOpen.value = !isOpen.value;
};

const selectLanguage = (language) => {
  changeLanguage(language.locale);
  isOpen.value = false;
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

const initializeLanguage = () => {
  
  const urlLanguage = getLanguageFromUrl();
  const storedLanguage = getLanguageFromStorage();

  let targetLanguage = "pt-BR"; 

  if (urlLanguage) {
    targetLanguage = urlLanguage;
  } else if (storedLanguage) {
    targetLanguage = storedLanguage;
 
    updateUrlWithLanguage(storedLanguage);
  }

  if (locale.value !== targetLanguage) {
    locale.value = targetLanguage;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  initializeLanguage();
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});

watch(
  () => route.query.lang,
  (newLang) => {
    if (newLang) {
      const language = languages.value.find((lang) => lang.urlCode === newLang);
      if (language && locale.value !== language.locale) {
        locale.value = language.locale;
        saveLanguageToStorage(language.locale);
      }
    } else {
      if (locale.value !== "pt-BR") {
        locale.value = "pt-BR";
        saveLanguageToStorage("pt-BR");
      }
    }
  }
);
</script>

<template>
  <div class="relative" ref="dropdownRef">
    <button
      @click="toggleDropdown"
      :disabled="disabled"
      :class="{
        'cursor-not-allowed opacity-30': disabled,
        'hover:brightness-110 cursor-pointer': !disabled,
      }"
      class="flex items-center justify-between gap-1.5 h-6 pr-1.5 text-xs transition-all duration-200">
      <div class="h-full w-6 rounded-full overflow-hidden">
        <img
          :src="currentLanguage.src"
          class="object-cover object-center h-full w-auto"
          :alt="currentLanguage.name" />
      </div>
      <div class="text-[12px] font-medium">{{ currentLanguage.name }}</div>
      <i
        class="bi bi-chevron-down text-[10px] transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        v-if="!disabled"></i>
    </button>

    <!-- Dropdown Menu -->
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 scale-95 translate-y-[-10px]"
      enter-to-class="opacity-100 scale-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 scale-100 translate-y-0"
      leave-to-class="opacity-0 scale-95 translate-y-[-10px]">
      <div
        v-if="isOpen && !disabled"
        class="absolute top-full mt-2 right-0 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-white/20 min-w-[140px] z-50 overflow-hidden">
        <div
          v-for="language in languages"
          :key="language.locale"
          @click="selectLanguage(language)"
          :class="{
            'bg-primary/10 text-primary': language.locale === locale,
            'hover:bg-primary/5': language.locale !== locale,
          }"
          class="flex items-center gap-3 px-3 py-2 cursor-pointer transition-colors duration-200">
          <div class="w-5 h-5 rounded-full overflow-hidden flex-shrink-0">
            <img
              :src="language.src"
              class="object-cover object-center w-full h-full"
              :alt="language.name" />
          </div>
          <span class="text-sm font-medium text-darkText">{{
            language.name
          }}</span>
          <i
            v-if="language.locale === locale"
            class="bi bi-check text-primary ml-auto text-sm"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

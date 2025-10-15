<script setup>
import portuguese from '@/assets/img/language-icon/pt-br.png'
import english from '@/assets/img/language-icon/en.png'
import spanish from '@/assets/img/language-icon/es.png'

const props = defineProps({
  language: {
    type: String,
    default: 'pr-BR',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const languages = [
  {
    name: 'Português',
    src: portuguese,
    locale: 'pt-BR',
  },
  {
    name: 'English',
    src: english,
    locale: 'en',
  },
  {
    name: 'Español',
    src: spanish,
    locale: 'es',
  },
]

const chosenLanguage =
  languages.find(
    (lang) => lang.locale.toLowerCase() === props.language.toLowerCase()
  ) || languages.find((lang) => lang.locale === 'pt-BR')
</script>

<template>
  <button
    :disabled="disabled"
    :class="{
      'cursor-not-allowed opacity-30': disabled,
      'hover:brightness-110': !disabled,
    }">
    <div class="flex items-center justify-between gap-1.5 h-6 pr-1.5 text-xs">
      <div class="h-full w-6 rounded-full overflow-hidden">
        <img
          :src="chosenLanguage.src"
          class="object-cover object-center h-full w-auto"
          :alt="chosenLanguage.name" />
      </div>
      <div class="text-[12px] font-medium">{{ chosenLanguage.name }}</div>
    </div>
  </button>
</template>

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
    default: true,
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
  <Button light :disabled="disabled">
    <div class="flex items-center justify-between gap-1.5 h-5 pr-1.5 text-xs">
      <div class="h-full w-5 rounded-full overflow-hidden">
        <img
          :src="chosenLanguage.src"
          class="object-cover object-center h-6 w-auto -translate-y-0.5 -translate-x-[1.1px]"
          :alt="chosenLanguage.name" />
      </div>
      <div>{{ chosenLanguage.name }}</div>
    </div>
  </Button>
</template>

<script setup>
import javascriptLogo from '@/assets/img/dev-icons/javascript.svg'
import typescriptLogo from '@/assets/img/dev-icons/typescript.svg'
import htmlLogo from '@/assets/img/dev-icons/html.svg'
import cssLogo from '@/assets/img/dev-icons/css.svg'
import bootstrapLogo from '@/assets/img/dev-icons/bootstrap.svg'
import tailwindLogo from '@/assets/img/dev-icons/tailwind.svg'
import vueLogo from '@/assets/img/dev-icons/vue.svg'
import nuxtLogo from '@/assets/img/dev-icons/nuxt.svg'
import vuetifyLogo from '@/assets/img/dev-icons/vuetify.svg'
import reactLogo from '@/assets/img/dev-icons/react.svg'
import angularLogo from '@/assets/img/dev-icons/angular.svg'
import pythonLogo from '@/assets/img/dev-icons/python.svg'
import djangoLogo from '@/assets/img/dev-icons/django.svg'
import rustLogo from '@/assets/img/dev-icons/rust.svg'
import tauriLogo from '@/assets/img/dev-icons/tauri.svg'

const devLogos = [
  {
    src: javascriptLogo,
    alt: 'logo-javascript',
    title: 'Javascript',
    ariaLabel: 'Logo Javascript',
  },
  {
    src: typescriptLogo,
    alt: 'logo-typescript',
    title: 'Typescript',
    ariaLabel: 'Logo Typescript',
  },
  {
    src: htmlLogo,
    alt: 'logo-html',
    title: 'Html',
    ariaLabel: 'Logo Html',
  },
  {
    src: cssLogo,
    alt: 'logo-css',
    title: 'CSS',
    ariaLabel: 'Logo CSS',
  },
  {
    src: bootstrapLogo,
    alt: 'logo-bootstrap',
    title: 'Bootstrap',
    ariaLabel: 'Logo Bootstrap',
  },
  {
    src: tailwindLogo,
    alt: 'logo-tailwind',
    title: 'tailwind',
    ariaLabel: 'Logo tailwind',
  },
  {
    src: vueLogo,
    alt: 'logo-vue',
    title: 'Vue',
    ariaLabel: 'Logo Vue',
  },
  {
    src: nuxtLogo,
    alt: 'logo-nuxt',
    title: 'Nuxt',
    ariaLabel: 'Logo Nuxt',
  },
  {
    src: vuetifyLogo,
    alt: 'logo-vuetify',
    title: 'Vuetify',
    ariaLabel: 'Logo Vuetify',
  },
  {
    src: reactLogo,
    alt: 'logo-react',
    title: 'React',
    ariaLabel: 'Logo React',
  },
  {
    src: angularLogo,
    alt: 'logo-angular',
    title: 'Angular',
    ariaLabel: 'Logo Angular',
  },
  {
    src: pythonLogo,
    alt: 'logo-python',
    title: 'Python',
    ariaLabel: 'Logo Python',
  },
  {
    src: djangoLogo,
    alt: 'logo-django',
    title: 'Django',
    ariaLabel: 'Logo Django',
  },
  {
    src: rustLogo,
    alt: 'logo-rust',
    title: 'Rust',
    ariaLabel: 'Logo Rust',
  },
  {
    src: tauriLogo,
    alt: 'logo-tauri',
    title: 'Tauri',
    ariaLabel: 'Logo Tauri',
  },
]
</script>

<template>
  <Section title="Tecnologias">
    <div class="h-full w-full flex justify-center items-center">
      <ul
        class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 md:gap-16 2xl:gap-28">
        <li v-for="logo in devLogos" :key="logo.alt">
          <LogoImage
            :src="logo.src"
            :alt="logo.alt"
            :title="logo.title"
            :aria-label="logo.ariaLabel" />
        </li>
      </ul>
    </div>
  </Section>
</template>

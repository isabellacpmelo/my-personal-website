<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

import javascriptLogo from "@/assets/img/dev-icons/javascript.svg";
import typescriptLogo from "@/assets/img/dev-icons/typescript.svg";
import htmlLogo from "@/assets/img/dev-icons/html.svg";
import cssLogo from "@/assets/img/dev-icons/css.svg";
import bootstrapLogo from "@/assets/img/dev-icons/bootstrap.svg";
import tailwindLogo from "@/assets/img/dev-icons/tailwind.svg";
import vueLogo from "@/assets/img/dev-icons/vue.svg";
import nuxtLogo from "@/assets/img/dev-icons/nuxt.svg";
import vuetifyLogo from "@/assets/img/dev-icons/vuetify.svg";
import reactLogo from "@/assets/img/dev-icons/react.svg";
import angularLogo from "@/assets/img/dev-icons/angular.svg";
import pythonLogo from "@/assets/img/dev-icons/python.svg";
import djangoLogo from "@/assets/img/dev-icons/django.svg";
import rustLogo from "@/assets/img/dev-icons/rust.svg";
import tauriLogo from "@/assets/img/dev-icons/tauri.svg";
import nextLogo from "@/assets/img/dev-icons/next.svg";
import quasarLogo from "@/assets/img/dev-icons/quasar.svg";
import viteLogo from "@/assets/img/dev-icons/vite.svg";

const devLogos = [
  {
    src: javascriptLogo,
    alt: "logo-javascript",
    title: "Javascript",
    ariaLabel: "Logo Javascript",
    docLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    src: typescriptLogo,
    alt: "logo-typescript",
    title: "Typescript",
    ariaLabel: "Logo Typescript",
    docLink: "https://www.typescriptlang.org/docs/",
  },
  {
    src: htmlLogo,
    alt: "logo-html",
    title: "HTML5",
    ariaLabel: "Logo HTML5",
    docLink: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    src: cssLogo,
    alt: "logo-css",
    title: "CSS3",
    ariaLabel: "Logo CSS3",
    docLink: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    src: vueLogo,
    alt: "logo-vue",
    title: "Vue.js",
    ariaLabel: "Logo Vue.js",
    docLink: "https://vuejs.org/guide/introduction.html",
  },
  {
    src: reactLogo,
    alt: "logo-react",
    title: "React",
    ariaLabel: "Logo React",
    docLink: "https://reactjs.org/docs/getting-started.html",
  },
  {
    src: angularLogo,
    alt: "logo-angular",
    title: "Angular",
    ariaLabel: "Logo Angular",
    docLink: "https://angular.dev/overview",
  },
  {
    src: nuxtLogo,
    alt: "logo-nuxt",
    title: "Nuxt.js",
    ariaLabel: "Logo Nuxt.js",
    docLink: "https://nuxt.com/docs/getting-started/installation",
  },
  {
    src: nextLogo,
    alt: "logo-next",
    title: "Next.js",
    ariaLabel: "Logo Next.js",
    docLink: "https://nextjs.org/docs/getting-started",
  },
  {
    src: quasarLogo,
    alt: "logo-quasar",
    title: "Quasar",
    ariaLabel: "Logo Quasar",
    docLink: "https://quasar.dev/docs",
  },
  {
    src: viteLogo,
    alt: "logo-vite",
    title: "Vite",
    ariaLabel: "Logo Vite",
    docLink: "https://vitejs.dev/guide/",
  },
  {
    src: pythonLogo,
    alt: "logo-python",
    title: "Python",
    ariaLabel: "Logo Python",
    docLink: "https://www.python.org/doc/",
  },
  {
    src: djangoLogo,
    alt: "logo-django",
    title: "Django",
    ariaLabel: "Logo Django",
    docLink: "https://www.djangoproject.com/start/overview/",
  },
  {
    src: rustLogo,
    alt: "logo-rust",
    title: "Rust",
    ariaLabel: "Logo Rust",
    docLink: "https://www.rust-lang.org/learn",
  },
  {
    src: tauriLogo,
    alt: "logo-tauri",
    title: "Tauri",
    ariaLabel: "Logo Tauri",
    docLink: "https://tauri.app/start/",
  },
  {
    src: bootstrapLogo,
    alt: "logo-bootstrap",
    title: "Bootstrap",
    ariaLabel: "Logo Bootstrap",
    docLink: "https://getbootstrap.com/docs/5.3/getting-started/introduction/",
  },
  {
    src: tailwindLogo,
    alt: "logo-tailwind",
    title: "Tailwind CSS",
    ariaLabel: "Logo Tailwind CSS",
    docLink: "https://tailwindcss.com/docs",
  },
  {
    src: vuetifyLogo,
    alt: "logo-vuetify",
    title: "Vuetify",
    ariaLabel: "Logo Vuetify",
    docLink: "https://vuetifyjs.com/en/introduction/why-vuetify/",
  },
];
</script>

<template>
  <Section :title="t('technologies.title')">
    <div class="h-full w-full flex justify-center items-start">
      <ul
        class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 2xl:gap-16">
        <li v-for="logo in devLogos" :key="logo.alt" class="tech-item group">
          <a
            :href="logo.docLink || '#'"
            target="_blank"
            rel="noopener noreferrer"
            :title="`${t('technologies.learnMore')} ${logo.title}`">
            <div
              class="tech-card bg-white/5 backdrop-blur-sm rounded-xl p-3 2xl:p-4 border border-white/10 transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-xl hover:shadow-white/20 hover:scale-110">
              <img
                :src="logo.src"
                :alt="logo.alt"
                class="h-8 xl:h-10 2xl:h-16 w-auto mx-auto transition-all duration-300 group-hover:brightness-125 group-hover:drop-shadow-lg" />
              <p
                class="text-xs md:text-sm text-center text-lightText/70 group-hover:text-lightText transition-colors duration-300 mt-2 font-medium">
                {{ logo.title }}
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </Section>
</template>

<style scoped>
.tech-card {
  cursor: pointer;
}

.tech-card:hover {
  transform: translateY(-8px) scale(1.05);
}

.tech-item:hover img {
  filter: brightness(1.3) drop-shadow(0 0 20px rgba(255, 255, 255, 0.5));
}

.tech-item:hover p {
  color: rgb(255, 255, 255);
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.tech-card,
.tech-card img,
.tech-card p {
  transition: all 0.3s ease;
}

@media (max-width: 768px) {
  .grid {
    gap: 1.5rem;
  }
}

@media (max-width: 640px) {
  .grid {
    gap: 1rem;
  }
}
</style>

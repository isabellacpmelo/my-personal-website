<script setup>
import { ref, onMounted } from 'vue'

const socials = [
  {
    name: 'LinkedIn',
    label: 'Conectar no LinkedIn',
    icon: 'bi-linkedin',
    url: import.meta.env.VITE_LINKEDIN_URL,
    color: 'from-blue-600 to-blue-800',
    description: 'Vamos nos conectar profissionalmente',
  },
  {
    name: 'GitHub',
    label: 'Ver meus repositórios',
    icon: 'bi-github',
    url: import.meta.env.VITE_GITHUB_URL,
    color: 'from-gray-700 to-gray-900',
    description: 'Explore meus projetos open source',
  },
  {
    name: 'Email',
    label: 'Enviar um email',
    icon: 'bi-envelope-at-fill',
    url: `mailto:${import.meta.env.VITE_PERSONAL_EMAIL}`,
    color: 'from-red-500 to-red-700',
    description: 'Vamos conversar sobre oportunidades',
  },
]

const hoveredCard = ref(null)
const mousePosition = ref({ x: 0, y: 0 })

const handleMouseMove = (event) => {
  mousePosition.value = {
    x: event.clientX,
    y: event.clientY,
  }
}

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(import.meta.env.VITE_PERSONAL_EMAIL)
    // Posteriormente, adicionar uma notificação de sucesso
  } catch (err) {
    console.error('Falha ao copiar email:', err)
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <Section>
    <div
      class="mt-14 md:mt-4 sm:my-10 w-full h-full flex flex-col justify-center items-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-10 left-10 w-32 h-32 bg-mustard rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div
          class="absolute top-20 right-20 w-40 h-40 bg-lightBlue rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
        <div
          class="absolute bottom-10 left-1/2 w-36 h-36 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
      </div>

      <div class="relative z-10 w-full max-w-6xl mx-auto text-center">
        <div class="mb-12 lg:mb-16 xl:mb-20">
          <h2
            class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-mustard via-lightBlue to-mustard bg-clip-text text-transparent mb-4 lg:mb-6">
            Vamos Conversar?
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-mustard to-lightBlue mx-auto rounded-full"></div>
        </div>

        <div
          class="grid md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-12 lg:mb-16">
          <div
            v-for="(social, index) in socials"
            :key="index"
            @mouseenter="hoveredCard = index"
            @mouseleave="hoveredCard = null"
            class="group relative">
            <div
              class="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 h-full border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-mustard/20">
              <div
                :class="`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`"></div>
              <div class="relative mb-4 lg:mb-6">
                <div
                  class="w-16 h-16 lg:w-20 lg:h-20 mx-auto bg-gradient-to-br from-mustard/20 to-lightBlue/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <i
                    :class="social.icon"
                    class="text-2xl lg:text-3xl text-mustard group-hover:scale-110 transition-transform duration-300"></i>
                </div>
              </div>

              <h3
                class="text-xl lg:text-2xl font-semibold text-secondary mb-2 lg:mb-3">
                {{ social.name }}
              </h3>
              <p class="text-sm lg:text-base text-secondary/80 mb-4 lg:mb-6">
                {{ social.description }}
              </p>

              <a
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-gradient-to-r from-mustard to-lightBlue text-primary font-medium rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <span class="text-sm lg:text-base">{{ social.label }}</span>
                <i class="bi bi-arrow-up-right text-sm lg:text-base"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          class="bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-white/10 max-w-md mx-auto">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-3 h-3 bg-mustard rounded-full animate-ping"></div>
            <div class="w-2 h-2 bg-mustard rounded-full"></div>
          </div>
          <h3 class="text-lg lg:text-xl font-semibold text-secondary mb-2">
            Baseada em
          </h3>
          <p class="text-mustard font-medium text-lg lg:text-xl">
            São Paulo, Brasil
          </p>
          <p class="text-secondary/70 text-sm lg:text-base mt-2">
            Disponível para projetos remotos
          </p>
        </div>

        <div class="mt-12 lg:mt-16">
          <p class="text-lg lg:text-xl text-secondary/90 mb-6">
            Tem uma ideia incrível? Vamos transformá-la em realidade! 🚀
          </p>
          <button
            @click="copyEmail"
            class="group inline-flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 bg-white/10 backdrop-blur-md border border-mustard/50 rounded-full text-secondary hover:bg-mustard/20 hover:border-mustard transition-all duration-300">
            <i
              class="bi bi-clipboard text-lg group-hover:scale-110 transition-transform"></i>
            <span class="font-medium">Copiar email</span>
          </button>
        </div>
      </div>
    </div>
  </Section>
</template>

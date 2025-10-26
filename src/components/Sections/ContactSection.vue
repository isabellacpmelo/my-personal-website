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
  <Section class="mb-32 md:mb-0">
    <div class="mt-8 2xl:mt-24 h-auto">
      <div class="mx-auto text-center">
        <div class="mb-8 2xl:mb-16">
          <h2
            class="text-4xl md:text-5xl 2xl:text-6xl font-bold bg-gradient-to-r from-mustard via-lightBlue to-mustard bg-clip-text text-transparent mb-4 lg:mb-6">
            Vamos Conversar?
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-mustard to-lightBlue mx-auto rounded-full"></div>
        </div>

        <div
          class="grid md:grid-cols-3 gap-4 lg:gap-5 2xl:gap-10 mb-5 2xl:mb-12">
          <div
            v-for="(social, index) in socials"
            :key="index"
            @mouseenter="hoveredCard = index"
            @mouseleave="hoveredCard = null"
            class="group">
            <div
              class="bg-white/10 backdrop-blur-md rounded-2xl p-3 h-full border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-mustard/20">
              <div class="mb-4 lg:mb-4">
                <div
                  class="w-10 h-10 2xl:w-12 2xl:h-12 mx-auto bg-gradient-to-br from-mustard/20 to-lightBlue/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-500">
                  <i
                    :class="social.icon"
                    class="text-lg 2xl:text-xl mt-0.5 text-mustard group-hover:scale-105 transition-transform duration-300"></i>
                </div>
              </div>

              <h3
                class="font-semibold text-secondary mb-1 2xl:mb-2 flex items-center justify-center gap-2">
                {{ social.name }}
                <button
                  v-if="social.name.toLocaleLowerCase() === 'email'"
                  @click="copyEmail"
                  title="Copiar email"
                  aria-label="Copiar email"
                  class="group text-secondary hover:text-mustard transition-all duration-300 hidden md:inline-flex">
                  <i
                    class="bi bi-clipboard group-hover:scale-110 transition-transform"></i>
                </button>
              </h3>
              <p class="text-secondary/80 mb-3 2xl:mb-4">
                {{ social.description }}
              </p>

              <a
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-mustard to-lightBlue text-primary font-medium rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <span class="text-sm lg:text-base">{{ social.label }}</span>
                <i class="bi bi-arrow-up-right text-sm lg:text-base"></i>
              </a>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12 2xl:gap-16">
          <div
            class="bg-white/5 backdrop-blur-sm rounded-2xl p-3 2xl:p-8 border border-white/10 max-w-md w-full">
            <div class="flex items-center justify-center gap-3 mb-2 2xl:mb-4">
              <div class="w-3 h-3 bg-mustard rounded-full animate-ping"></div>
              <div class="w-2 h-2 bg-mustard rounded-full"></div>
            </div>
            <p class="text-mustard font-medium text-lg lg:text-xl">
              São Paulo, Brasil
            </p>
            <p class="text-secondary/70 text-sm lg:text-base mt-2">
              Disponível para projetos remotos
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

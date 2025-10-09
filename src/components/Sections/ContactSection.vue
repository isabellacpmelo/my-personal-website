<script setup>
const socials = [
  {
    name: 'Linkedin',
    label: 'Ir para Linkedin',
    icon: 'bi-linkedin',
    url: import.meta.env.VITE_LINKEDIN_URL,
  },
  {
    name: 'Github',
    label: 'Ir para Github',
    icon: 'bi-github',
    url: import.meta.env.VITE_GITHUB_URL,
  },
  {
    name: 'Email',
    label: 'Enviar email',
    icon: 'bi-envelope-at-fill',
    url: `mailto:${import.meta.env.VITE_PERSONAL_EMAIL}`,
  },
  // {
  //   name: 'Whatsapp',
  //   label: 'Enviar Whatsapp',
  //   icon: 'bi-whatsapp',
  //   url: '',
  // },
]
</script>

<template>
  <Section>
    <div class="h-full w-full flex flex-col md:flex-row md:items-end">
      <div class="md:w-1/2 2xl:1/3 mb-8 lg:mt-0 md:text-xl 2xl:text-3xl">
        <h3
          class="text-xl md:text-3xl xl:text-5xl 2xl:text-7xl text-mustard mb-4 lg:mb-8 font-semibold">
          Entre em contato comigo
        </h3>
        <p class="my-2">São Paulo - SP</p>
        <div class="w-full flex items-center gap-4">
          <div
            v-for="(social, index) in socials"
            :key="index"
            class="hover:text-mustard transition-all delay-100">
            <a
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :title="social.name">
              <i :class="social.icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

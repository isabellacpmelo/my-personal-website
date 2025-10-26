<script setup>
const projects = ref([
  {
    Title: 'My Portfolio',
    description: 'Meu portfólio pessoal, onde você está agora!',
    tags: ['javascript', 'vue', 'tailwind'],
    img: 'https://i.imgur.com/wRXJ8nT.gif',
    alt: 'my-portfolio-cover',
    linkSite: '#',
    linkRep: 'https://github.com/isabellacpmelo/my-personal-website',
  },
  {
    title: 'Chronos Pomodoro',
    description:
      'Aplicativo de gerenciamento de tempo baseado na técnica Pomodoro.',
    tags: ['react', 'typescript', 'tailwind'],
    img: 'https://i.imgur.com/f7QOqsq.gif',
    alt: 'chronos-pomodoro-cover',
    linkSite: 'https://chronos-pomodoro-lac.vercel.app/',
    linkRep: 'https://github.com/isabellacpmelo/chronos-pomodoro',
  },
  {
    title: 'Naruto Game',
    description: 'Jogo de corrida com o personagem Naruto Uzumaki',
    tags: ['javascript', 'vue', 'tailwind', 'quasar', 'game'],
    img: 'https://i.imgur.com/B69eDgF.gif',
    alt: 'narutinho-game-cover',
    linkSite: 'https://naruto-running-game.netlify.app/#/',
    linkRep: 'https://github.com/isabellacpmelo/naruto-game',
  },
  {
    title: 'Star Wars Catalogue',
    description: 'Catálogo de personagens de Star Wars utilizando a API SWAPI.',
    tags: ['javascript', 'vue', 'tailwind', 'nuxt'],
    img: 'https://imgur.com/6euXN8I.gif',
    alt: 'star-wars-catalogue-cover',
    linkSite: 'https://star-wars-catal.netlify.app/',
    linkRep: 'https://github.com/isabellacpmelo/starwars',
  },

  {
    title: 'Cripto Coin',
    description:
      'Conversor de criptomoedas que permite que o usuário saiba a cotação do criptoativo desejado.',
    tags: ['javascript', 'vue', 'tailwind', 'quasar'],
    img: 'https://imgur.com/quyQC6J.gif',
    alt: 'cripto-coin-cover',
    linkSite: 'https://cryptor-converter.netlify.app/',
    linkRep: 'https://github.com/isabellacpmelo/conversor-criptomoedas',
  },
  {
    title: 'Cupcake Shop',
    description:
      'Cupcake Shop é uma lojinha de cupcakes fictícia e em progresso',
    tags: ['javascript', 'vue', 'tailwind', 'nuxt'],
    img: 'https://i.imgur.com/q4TtbyL.gif',
    alt: 'cupcake-shop-cover',
    linkSite: 'https://cupcack-store.netlify.app/#/',
    linkRep: 'https://github.com/isabellacpmelo/cupcake-store',
  },
  {
    title: 'Space Shooter',
    description: 'Jogo de tiro espacial desenvolvido em JavaScript puro',
    tags: ['javascript', 'game'],
    img: 'https://i.imgur.com/sKvx4ue.gif',
    alt: 'space-shooter-cover',
    linkRep: 'https://github.com/isabellacpmelo/jogo-space-shooter',
    linkSite: 'https://isabellacpmelo.github.io/jogo-space-shooter/',
  },
  // {
  //   title: 'Landing Page',
  //   description:
  //     'Exemplo de landing page simples em desenvolvimento utilizando React',
  //   tags: ['javascript', 'react'],
  //   img: landingPageCover,
  //   alt: 'landing-page-cover',
  //   linkSite: 'https://react-landing-page-exemplo.netlify.app/',
  //   linkRep: 'https://github.com/isabellacpmelo/landing-page-react',
  // },
])

const githubUrl = import.meta.env.VITE_GITHUB_URL
</script>

<template>
  <Section title="Meus Projetos" light>
    <div class="w-full flex flex-col items-center mb-12 md:mb-8 2xl:mb-12">
      <div class="max-w-4xl text-center">
        <p class="text-darkText/90 leading-relaxed">
          Aqui estão alguns dos meus projetos mais recentes. Cada um representa
          uma jornada de
          <span class="font-semibold text-primary">aprendizado</span> e
          <span class="font-semibold text-mustard">inovação</span>. Sinta-se à
          vontade para explorá-los!
        </p>
      </div>
    </div>
    <Carousel :items="projects">
      <template #default="{ item }">
        <ProjectCard :item="item" />
      </template>
    </Carousel>
    <a
      :href="githubUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="text-center group mt-24 md:hidden 2xl:inline-block">
      <div
        class="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-lightBlue/20 group-hover:from-primary/20 group-hover:to-lightBlue/30 rounded-xl px-4 py-2 border border-primary/20 group-hover:border-primary/30 transition duration-300 delay-75">
        <div
          class="w-8 h-8 bg-gradient-to-br from-lightBlue to-primary group-hover:from-primary group-hover:to-lightBlue rounded-lg flex items-center justify-center text-lightText">
          <i class="bi bi-github" />
        </div>
        <div class="text-left">
          <p class="text-sm font-semibold text-darkText">
            Quer acompanhar meus projetos?
          </p>
          <p class="text-xs text-darkText/70">Visite meu perfil no GitHub!</p>
        </div>
      </div>
    </a>
  </Section>
</template>

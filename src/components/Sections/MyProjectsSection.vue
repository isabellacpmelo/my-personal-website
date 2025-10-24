<script setup>
import criptoCoinCover from '@/assets/img/projects-cover/cripto-coin.png'
import cupcakeShopCover from '@/assets/img/projects-cover/cupcake-shop.png'
import landingPageCover from '@/assets/img/projects-cover/landing-page-cover.png'
import narutinhoGameCover from '@/assets/img/projects-cover/narutinho-game.png'
import spaceShooterCover from '@/assets/img/projects-cover/space-shooter.gif'
import starWarsCatalogueCover from '@/assets/img/projects-cover/star-wars-catalogue.png'

const projects = ref([
  {
    title: 'Star Wars Catalogue',
    description: 'Catalog of characters from the Star Wars universe',
    tags: ['javascript', 'vue', 'tailwind', 'nuxt'],
    img: starWarsCatalogueCover,
    alt: 'star-wars-catalogue-cover',
    linkSite: 'https://star-wars-catal.netlify.app/',
    linkRep: 'https://github.com/isabellacpmelo/starwars',
  },
  {
    title: 'Naruto Game',
    description: "Naruto's racing game, based on T-Rex Game",
    tags: ['javascript', 'vue', 'tailwind', 'quasar', 'game'],
    img: narutinhoGameCover,
    alt: 'narutinho-game-cover',
    linkSite: 'https://naruto-running-game.netlify.app/#/',
    linkRep: 'https://github.com/isabellacpmelo/naruto-game',
  },
  {
    title: 'Cripto Coin',
    description:
      'Conversor de criptomoedas que permite que o usuário saiba a cotação do criptoativo desejado.',
    tags: ['javascript', 'vue', 'tailwind', 'quasar'],
    img: criptoCoinCover,
    alt: 'cripto-coin-cover',
    linkSite: 'https://cryptor-converter.netlify.app/',
    linkRep: 'https://github.com/isabellacpmelo/conversor-criptomoedas',
  },
  {
    title: 'Cupcake Shop',
    description:
      'Cupcake Shop é uma lojinha de cupcakes fictícia e em progresso',
    tags: ['javascript', 'vue', 'tailwind', 'nuxt'],
    img: cupcakeShopCover,
    alt: 'cupcake-shop-cover',
    linkSite: 'https://cupcack-store.netlify.app/#/',
    linkRep: 'https://github.com/isabellacpmelo/cupcake-store',
  },
  {
    title: 'Space Shooter',
    description: 'Jogo de tiro espacial',
    tags: ['javascript', 'game'],
    img: spaceShooterCover,
    alt: 'space-shooter-cover',
    linkRep: 'https://github.com/isabellacpmelo/jogo-space-shooter',
    linkSite: 'https://isabellacpmelo.github.io/jogo-space-shooter/',
  },
  {
    title: 'Landing Page React',
    description: 'Exemplo de landing page feita em react',
    tags: ['javascript', 'react'],
    img: landingPageCover,
    alt: 'landing-page-cover',
    linkSite: 'https://react-landing-page-exemplo.netlify.app/',
    linkRep: 'https://github.com/isabellacpmelo/landing-page-react',
  },
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

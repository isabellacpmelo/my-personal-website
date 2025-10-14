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
</script>

<template>
  <Section title="Meus Projetos" light>
    Lorem ipsum dolor sit amet consectetur gendi ipsam voluptate, asperiores
    tempore dicta sequi dolore dolorem?

    <ProjectCard
      :src="projects[1].img"
      :title="projects[0].title"
      :link-site="projects[0].linkSite"
      :link-rep="projects[0].linkRep" />
  </Section>
</template>

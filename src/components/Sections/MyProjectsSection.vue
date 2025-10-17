<script setup>
import criptoCoinCover from "@/assets/img/projects-cover/cripto-coin.png";
import cupcakeShopCover from "@/assets/img/projects-cover/cupcake-shop.png";
import landingPageCover from "@/assets/img/projects-cover/landing-page-cover.png";
import narutinhoGameCover from "@/assets/img/projects-cover/narutinho-game.png";
import spaceShooterCover from "@/assets/img/projects-cover/space-shooter.gif";
import starWarsCatalogueCover from "@/assets/img/projects-cover/star-wars-catalogue.png";

const projects = ref([
  {
    title: "Star Wars Catalogue",
    description: "Catalog of characters from the Star Wars universe",
    tags: ["javascript", "vue", "tailwind", "nuxt"],
    img: starWarsCatalogueCover,
    alt: "star-wars-catalogue-cover",
    linkSite: "https://star-wars-catal.netlify.app/",
    linkRep: "https://github.com/isabellacpmelo/starwars",
  },
  {
    title: "Naruto Game",
    description: "Naruto's racing game, based on T-Rex Game",
    tags: ["javascript", "vue", "tailwind", "quasar", "game"],
    img: narutinhoGameCover,
    alt: "narutinho-game-cover",
    linkSite: "https://naruto-running-game.netlify.app/#/",
    linkRep: "https://github.com/isabellacpmelo/naruto-game",
  },
  {
    title: "Cripto Coin",
    description:
      "Conversor de criptomoedas que permite que o usuário saiba a cotação do criptoativo desejado.",
    tags: ["javascript", "vue", "tailwind", "quasar"],
    img: criptoCoinCover,
    alt: "cripto-coin-cover",
    linkSite: "https://cryptor-converter.netlify.app/",
    linkRep: "https://github.com/isabellacpmelo/conversor-criptomoedas",
  },
  {
    title: "Cupcake Shop",
    description:
      "Cupcake Shop é uma lojinha de cupcakes fictícia e em progresso",
    tags: ["javascript", "vue", "tailwind", "nuxt"],
    img: cupcakeShopCover,
    alt: "cupcake-shop-cover",
    linkSite: "https://cupcack-store.netlify.app/#/",
    linkRep: "https://github.com/isabellacpmelo/cupcake-store",
  },
  {
    title: "Space Shooter",
    description: "Jogo de tiro espacial",
    tags: ["javascript", "game"],
    img: spaceShooterCover,
    alt: "space-shooter-cover",
    linkRep: "https://github.com/isabellacpmelo/jogo-space-shooter",
    linkSite: "https://isabellacpmelo.github.io/jogo-space-shooter/",
  },
  {
    title: "Landing Page React",
    description: "Exemplo de landing page feita em react",
    tags: ["javascript", "react"],
    img: landingPageCover,
    alt: "landing-page-cover",
    linkSite: "https://react-landing-page-exemplo.netlify.app/",
    linkRep: "https://github.com/isabellacpmelo/landing-page-react",
  },
]);
</script>

<template>
  <Section title="Meus Projetos" light>
    <div class="relative">
      <!-- Background decorative elements - mais sutis -->
      <div
        class="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-mustard/10 to-lightBlue/10 rounded-full opacity-50 blur-xl"></div>
      <div
        class="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-tr from-primary/10 to-mustard/10 rounded-full opacity-50 blur-xl"></div>

      <!-- Header section simplificado -->
      <div class="w-full flex flex-col items-center mb-8 2xl:mb-12">
        <!-- Stats cards compactos -->
        <div class="flex justify-center gap-3 mb-6">
          <div
            class="bg-primary/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary/20">
            <div class="text-center">
              <div class="text-lg font-bold text-primary">
                {{ projects.length }}
              </div>
              <div class="text-xs text-darkText/70">Projetos</div>
            </div>
          </div>
          <div
            class="bg-mustard/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-mustard/20">
            <div class="text-center">
              <div class="text-lg font-bold text-mustard">5+</div>
              <div class="text-xs text-darkText/70">Tecnologias</div>
            </div>
          </div>
          <div
            class="bg-lightBlue/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-lightBlue/20">
            <div class="text-center">
              <div class="text-lg font-bold text-lightBlue">100%</div>
              <div class="text-xs text-darkText/70">Open Source</div>
            </div>
          </div>
        </div>

        <!-- Descrição mais simples -->
        <div class="max-w-3xl text-center">
          <p
            class="text-sm md:text-base lg:text-lg 2xl:text-xl text-darkText/90 leading-relaxed">
            Aqui estão alguns dos meus projetos mais recentes. Cada um
            representa uma jornada de
            <span class="font-semibold text-primary">aprendizado</span> e
            <span class="font-semibold text-mustard">inovação</span>. Sinta-se à
            vontade para explorá-los!
          </p>
        </div>

        <!-- Technology tags menores -->
        <div class="flex flex-wrap justify-center gap-2 mt-4 max-w-2xl">
          <span
            class="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
            >Vue.js</span
          >
          <span
            class="px-2 py-1 bg-lightBlue/10 text-lightBlue text-xs rounded-md border border-lightBlue/20"
            >React</span
          >
          <span
            class="px-2 py-1 bg-mustard/10 text-mustard text-xs rounded-md border border-mustard/20"
            >JavaScript</span
          >
          <span
            class="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md border border-primary/20"
            >Tailwind</span
          >
          <span
            class="px-2 py-1 bg-lightBlue/10 text-lightBlue text-xs rounded-md border border-lightBlue/20"
            >Nuxt</span
          >
        </div>
      </div>

      <!-- Carousel simplificado -->
      <div class="relative">
        <Carousel :items="projects">
          <template #default="{ item }">
            <div class="px-2">
              <!-- Card de projeto mais simples e controlado -->
              <div
                class="group relative bg-gradient-to-br from-secondary/80 to-white rounded-xl p-4 shadow-lg border border-lightBlue/20 hover:border-primary/30 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 max-w-sm mx-auto">
                <!-- Imagem do projeto -->
                <div class="relative mb-4">
                  <div class="bg-white rounded-lg p-2 shadow-md">
                    <ImageFrameComputer
                      :src="item.img"
                      :alt="item.alt"
                      class="hidden sm:flex" />
                    <ImageFrameMobile
                      :src="item.img"
                      :alt="item.alt"
                      class="flex sm:hidden" />
                  </div>
                </div>

                <!-- Informações do projeto -->
                <div class="space-y-3">
                  <!-- Título com ícone -->
                  <div class="flex items-center gap-2">
                    <div
                      class="w-6 h-6 bg-gradient-to-br from-primary to-lightBlue rounded-md flex items-center justify-center flex-shrink-0">
                      <svg
                        class="w-3 h-3 text-lightText"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                      </svg>
                    </div>
                    <h3
                      class="font-bold text-base text-darkText group-hover:text-primary transition-colors">
                      {{ item.title }}
                    </h3>
                  </div>

                  <!-- Descrição -->
                  <p
                    class="text-sm text-darkText/80 leading-relaxed line-clamp-2">
                    {{ item.description }}
                  </p>

                  <!-- Tags -->
                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="tag in item.tags.slice(0, 4)"
                      :key="tag"
                      class="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded border border-primary/20">
                      {{ tag }}
                    </span>
                  </div>

                  <!-- Botões de ação -->
                  <div class="flex gap-2 pt-2">
                    <a
                      v-if="item.linkSite"
                      :href="item.linkSite"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex-1 bg-gradient-to-r from-primary to-lightBlue text-lightText text-center py-2 px-3 rounded-md font-medium hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 text-xs">
                      <span class="flex items-center justify-center gap-1">
                        <svg
                          class="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                        Ver Projeto
                      </span>
                    </a>
                    <a
                      v-if="item.linkRep"
                      :href="item.linkRep"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex-1 bg-gradient-to-r from-mustard/90 to-mustard text-white text-center py-2 px-3 rounded-md font-medium hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 text-xs">
                      <span class="flex items-center justify-center gap-1">
                        <svg
                          class="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        GitHub
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Carousel>
      </div>

      <!-- Call to action simples -->
      <div class="text-center mt-8">
        <div
          class="inline-flex items-center gap-2 bg-gradient-to-r from-primary/5 to-lightBlue/5 backdrop-blur-sm rounded-xl px-6 py-3 border border-primary/20">
          <div
            class="w-8 h-8 bg-gradient-to-br from-lightBlue to-primary rounded-lg flex items-center justify-center">
            <svg
              class="w-4 h-4 text-lightText"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <div class="text-left">
            <p class="text-sm font-semibold text-darkText">
              Quer ver mais projetos?
            </p>
            <p class="text-xs text-darkText/70">Visite meu perfil no GitHub!</p>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>

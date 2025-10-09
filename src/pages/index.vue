<!-- @format -->

<script setup>
// criar componente para tabelas
// criar componente para botões
// Criar componente para imagens (quadradas e redondas  )
// instalar biblioteca de idiomas
// criar componente para language switcher
// criar componente para barra de pesquisa
// Criar componente para o filtro
// criar env

const projectsFolder = `${baseUrl}/img/projects-cover/`

const projects = ref([
  {
    title: 'Star Wars Catalogue',
    description: 'Catalog of characters from the Star Wars universe',
    tags: ['javascript', 'vue', 'tailwind', 'nuxt'],
    img: `${projectsFolder}/star-wars-catalogue.png`,
    alt: 'star-wars-catalogue-cover',
    linkSite: 'https://star-wars-catal.netlify.app/',
    linkRep: 'https://github.com/isabellacpmelo/starwars',
  },
  {
    title: 'Naruto Game',
    description: "Naruto's racing game, based on T-Rex Game",
    tags: ['javascript', 'vue', 'tailwind', 'quasar', 'game'],
    img: `${projectsFolder}/narutinho-game.png`,
    alt: 'narutinho-game-cover',
    linkSite: 'https://naruto-running-game.netlify.app/#/',
    linkRep: 'https://github.com/isabellacpmelo/naruto-game',
  },
  {
    title: 'Cripto Coin',
    description:
      'Conversor de criptomoedas que permite que o usuário saiba a cotação do criptoativo desejado.',
    tags: ['javascript', 'vue', 'tailwind', 'quasar'],
    img: `${projectsFolder}/cripto-coin.png`,
    alt: 'cripto-coin-cover',
    linkSite: 'https://cryptor-converter.netlify.app/',
    linkRep: 'https://github.com/isabellacpmelo/conversor-criptomoedas',
  },
  {
    title: 'Cupcake Shop',
    description:
      'Cupcake Shop é uma lojinha de cupcakes fictícia e em progresso',
    tags: ['javascript', 'vue', 'tailwind', 'nuxt'],
    img: `${projectsFolder}/cupcake-shop.png`,
    alt: 'cupcake-shop-cover',
    linkSite: 'https://cupcack-store.netlify.app/#/',
    linkRep: 'https://github.com/isabellacpmelo/cupcake-store',
  },
  {
    title: 'Space Shooter',
    description: 'Jogo de tiro espacial',
    tags: ['javascript', 'game'],
    img: `${projectsFolder}/space-shooter.gif`,
    alt: 'space-shooter-cover',
    linkRep: 'https://github.com/isabellacpmelo/jogo-space-shooter',
    linkSite: 'https://isabellacpmelo.github.io/jogo-space-shooter/',
  },
  {
    title: 'Landing Page React',
    description: 'Exemplo de landing page feita em react',
    tags: ['javascript', 'react'],
    img: `${projectsFolder}/landing-page-cover.png`,
    alt: 'landing-page-cover',
    linkSite: 'https://react-landing-page-exemplo.netlify.app/',
    linkRep: 'https://github.com/isabellacpmelo/landing-page-react',
  },
])

const tagsType = ref([
  'javascript',
  'vue',
  'tailwind',
  'nuxt',
  'quasar',
  'game',
  'react',
])

const selectedTag = ref('all')

const filteredProjects = computed(() => {
  if (selectedTag.value === 'all') {
    return projects.value
  }
  return projects.value.filter((project) =>
    project.tags.includes(selectedTag.value)
  )
})

const currentIndex = ref(0)
const itemsPerPage = 3

const next = () => {
  if (
    currentIndex.value <
    Math.ceil(filteredProjects.value.length / itemsPerPage) + 1
  ) {
    currentIndex.value++
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const contacts = ref([
  {
    title: 'Linkedin',
    description: import.meta.env.VITE_LINKEDIN_USER,
    alt: 'linkedin-logo',
    url: import.meta.env.VITE_LINKEDIN_URL,
    icon: 'bi-linkedin',
  },
  {
    title: 'Email',
    description: import.meta.env.VITE_PERSONAL_EMAIL,
    alt: 'email-logo',
    url: `mailto:${import.meta.env.VITE_PERSONAL_EMAIL}`,
    icon: 'bi-envelope-open-fill',
  },
  {
    title: 'Github',
    description: import.meta.env.VITE_GITHUB_USER,
    alt: 'github-logo',
    url: import.meta.env.VITE_GITHUB_URL,
    icon: 'bi-github',
  },
])

var date = new Date()
var year = date.getFullYear()
</script>

<template>
  <!-- <div class="bg-red-300 fixed bottom-0 right-0">Voltar para o inicio</div> -->
  <!-- <Header /> -->
  <PresentationSection />
  <AboutMeSection />
  <TechnologiesSection />
  <MyProjectsSection />
  <ContactSection />

  <!-- <Button
    bg-color="bg-cyan-800"
    text-color="text-white"
    label="Conheça meu currículo"
    icon="bi-download"
    @click="downloadCurriculum" /> -->

  <!-- vite -->
  <!-- next -->
  <!-- quasar -->
  <!-- Criar componente para as imgs de tecnologia -->

  <!-- <Section title="Meus projetos" id="my-projects">
    <div class="text-white flex w-[95%] justify-center lg:justify-start gap-2">
      <i class="bi bi-funnel" />
      <span>Tipo de projeto:</span>
      <select
        v-model="selectedTag"
        class="text-white capitalize rounded-lg bg-black/50 text-center">
        <option value="all">Todos</option>
        <option
          v-for="tag in tagsType"
          :key="tag"
          :value="tag"
          class="capitalize">
          {{ tag }}
        </option>
      </select>
    </div>
    <div class="flex items-center justify-center w-full">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <ProjectCard
          v-for="(project, index) in filteredProjects"
          :key="index"
          :project="project" />
      </div>
    </div>
  </Section> -->

  <!-- <Section title="Entre em contato" id="contact">
    <div class="flex items-center justify-center w-full">
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-12 text-white">
        <div v-for="(contact, index) in contacts" :key="index">
          <CardB class="h-24">
            <a :href="contact.url" target="_blank">
              <div
                class="flex items-center gap-3 w-[330px] p-2 hover:bg-black/30 rounded-lg">
                <div
                  class="text-3xl bg-black/40 rounded-lg flex items-center justify-center h-14 w-14"
                  :class="contact.icon" />
                <div>
                  <h2>{{ contact.title }}</h2>
                  <p class="font-medium">{{ contact.description }}</p>
                </div>
              </div>
            </a>
          </CardB>
        </div>
      </div>
    </div>
  </Section> -->

  <!-- <Section sectionClass="bg-[#191F04]" padding="py-4">
    <div class="text-white lg:text-xl flex justify-center w-full">
      Copyright &copy; {{ year }} Isabella Melo
    </div>
  </Section> -->
</template>

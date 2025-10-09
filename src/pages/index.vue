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

const text1 = 'Olá!'
const text2Part1 = 'Sou '
const text2Part2 = 'Isabella Melo,'
const text3 = 'Desenvolvedora fullstack'

const displayText1 = ref('')
const displayText2Part1 = ref('')
const displayText2Part2 = ref('')
const displayText3 = ref('')

const typingSpeed = 50

function typeEffect(text, refValue, callback) {
  let index = 0
  function type() {
    if (index < text.length) {
      refValue.value += text[index]
      index++
      setTimeout(type, typingSpeed)
    } else if (callback) {
      setTimeout(callback, 300) // Pausa antes de ir para o próximo
    }
  }
  type()
}

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

onMounted(() => {
  typeEffect(text1, displayText1, () => {
    typeEffect(text2Part1, displayText2Part1, () => {
      typeEffect(text2Part2, displayText2Part2, () => {
        typeEffect(text3, displayText3)
      })
    })
  })
})
</script>

<template>
  <!-- <div class="bg-red-300 fixed bottom-0 right-0">Voltar para o inicio</div> -->
  <!-- <Header /> -->
  <Section class="h-screen">
    <div
      class="h-full w-full flex flex-col justify-center items-center gap-16 md:gap-20 2xl:gap-36">
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-32">
        <div>apresentação aqui</div>
        <ProfilePic />
      </div>
      <div>
        <Button icon="bi bi-file-earmark-arrow-down" label="Currículo" light />
      </div>
    </div>

    <!-- <div class="flex flex-col md:flex-row items-center justify-center w-full">
      <div class="text-xl lg:text-3xl xl:text-5xl">
        <p class="text-white"><span v-text="displayText1"></span></p>
        <p class="text-white">
          <span v-text="displayText2Part1"></span>
          <strong class="text-amber-100" v-text="displayText2Part2"></strong>
        </p>
        <p class="text-white"><span v-text="displayText3"></span></p>
      </div>
      <img
        src="/src/assets/img/my-pic-02.png"
        alt="My profile pic"
        class="h-72" />
    </div> -->
  </Section>

  <Section title="Sobre mim" light>
    <div class="h-full flex items-start">
      <!-- vite -->
      <!-- next -->
      <!-- quasar -->
      <!-- Criar componente para as imgs de tecnologia -->

      <div
        class="w-full flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-16 2xl:gap-36 2xl:py-8">
        <div class="text-justify w-full md:w-2/3">
          <p class="mb-4 md:mb-6 xl:mb-8">
            Sou uma Desenvolvedora Full Stack , com o objetivo de transformar
            desafios complexos em soluções de software eficientes e escaláveis.
            Minha jornada profissional é focada em construir produtos que não
            apenas funcionam bem, mas que também geram um impacto real e
            positivo para os usuários e o negócio.
          </p>
          <p class="mb-4 md:mb-6 xl:mb-8">
            Atuo em todo o ciclo de desenvolvimento: no frontend, utilizo meu
            conhecimento em Vue.js, React e Angular para criar interfaces de
            alta performance, otimizando o tempo de carregamento de páginas e
            garantindo uma experiência de usuário fluida. No backend, construo a
            espinha dorsal das aplicações com Node.js e Python, desenvolvendo
            APIs RESTful seguras e garantindo a escalabilidade de plataformas
            digitais.
          </p>
          <p class="mb-4 md:mb-6 xl:mb-8">
            Além do desenvolvimento web tradicional, tenho explorado o futuro
            das aplicações desktop com Rust e Tauri e integrado o poder da
            Inteligência Artificial generativa para automatizar processos e
            criar soluções mais inteligentes.
          </p>
          <p>
            Acredito no poder da colaboração ágil e do código limpo para
            impulsionar a inovação. Estou sempre em busca de projetos
            desafiadores onde eu possa aplicar minhas habilidades para construir
            tecnologia de ponta
          </p>
        </div>
        <div>
          <img
            src="@/assets/img/notebook-illustration.png"
            alt=""
            class="h-32 w-auto md:h-40 lg:h-60 2xl:h-80" />
        </div>
      </div>
    </div>
  </Section>

  <Section title="Tecnologias">
    <div class="h-full w-full flex justify-center items-center">
      <ul class="grid grid-cols-4 gap-16">
        <li>
          <img
            src="@/assets/img/dev-icons/javascript.svg"
            alt="logo-javascript"
            title="Javascript"
            aria-label="Logo Javascript"
            class="h-14" />
        </li>
        <li>
          <img
            src="@/assets/img/dev-icons/typescript.svg"
            alt="logo-typescript"
            title="Typescript"
            aria-label="Logo Typescript"
            class="h-14" />
        </li>
        <li>
          <img
            src="@/assets/img/dev-icons/html.svg"
            alt="logo-html"
            title="Html"
            aria-label="Logo Html"
            class="h-14" />
        </li>
        <li>
          <img
            src="@/assets/img/dev-icons/css.svg"
            alt="logo-css"
            title="CSS"
            aria-label="Logo CSS"
            class="h-14" />
        </li>
        <li>
          <img
            src="@/assets/img/dev-icons/bootstrap.svg"
            alt="logo-bootstrap"
            title="Bootstrap"
            aria-label="Logo Bootstrap"
            class="h-14" />
        </li>
        <li>
          <img
            src="@/assets/img/dev-icons/tailwind.svg"
            alt="logo-tailwind"
            title="tailwind"
            aria-label="Logo tailwind"
            class="h-14" />
        </li>
        <li>
          <img
            src="@/assets/img/dev-icons/vue.svg"
            alt="logo-vue"
            title="Vue"
            aria-label="Logo Vue"
            class="h-14" />
        </li>
        <li>
          <img
            src="@/assets/img/dev-icons/nuxt.svg"
            alt="logo-nuxt"
            title="Nuxt"
            aria-label="Logo Nuxt"
            class="h-14" />
        </li>
        <li>
          <img
            src="@/assets/img/dev-icons/vuetify.svg"
            alt="logo-vuetify"
            title="Vuetify"
            aria-label="Logo Vuetify"
            class="h-14" />
        </li>
        <li>
          <img
            src="@/assets/img/dev-icons/nuxt.svg"
            alt="logo-nuxt"
            title="Nuxt"
            aria-label="Logo Nuxt"
            class="h-14" />
        </li>
        <li>
          <img
            src="@/assets/img/dev-icons/react.svg"
            alt="logo-react"
            title="React"
            aria-label="Logo React"
            class="h-14" />
        </li>
        <li>
          <img
            src="@/assets/img/dev-icons/angular.svg"
            alt="logo-angular"
            title="Angular"
            aria-label="Logo Angular"
            class="h-14" />
        </li>
        <li>
          <img
            src="@/assets/img/dev-icons/python.svg"
            alt="logo-python"
            title="Python"
            aria-label="Logo Python"
            class="h-14" />
        </li>
        <li>
          <img
            src="@/assets/img/dev-icons/django.svg"
            alt="logo-django"
            title="Django"
            aria-label="Logo Django"
            class="h-14" />
        </li>
        <li>
          <img
            src="@/assets/img/dev-icons/rust.svg"
            alt="logo-rust"
            title="Rust"
            aria-label="Logo Rust"
            class="h-14" />
        </li>
        <li>
          <img
            src="@/assets/img/dev-icons/tauri.svg"
            alt="logo-tauri"
            title="Tauri"
            aria-label="Logo Tauri"
            class="h-14" />
        </li>
      </ul>
    </div>
  </Section>

  <Section title="Meus Projetos" light>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere
    illo sapiente, minima harum reprehenderit explicabo eaque neque at, fugiat
    quam! Eligendi ipsam voluptate, asperiores tempore dicta sequi dolore
    dolorem?
  </Section>

  <Section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere
    illo sapiente, minima harum reprehenderit explicabo eaque neque at, fugiat
    quam! Eligendi ipsam voluptate, asperiores tempore dicta sequi dolore
    dolorem?
  </Section>

  <!-- <Section title="Sobre mim" id="about-me">
    <div
      class="flex flex-col justify-center items-start w-full text-white gap-8 text-sm sm:text-md lg:text-xl">
      <div>
        Sou uma desenvolvedora de software especializada no desenvolvimento de
        interfaces front-end para produtos digitais. Minha carreira é marcada
        pela contribuição em projetos que abrangem desde interfaces web
        dinâmicas até sistemas back-end robustos e soluções desktop de alto
        desempenho.
      </div>
      <div>
        No front-end, destaco minha experiência com Vue.js, Nuxt.js, Vuetify e
        Quasar, criando interfaces intuitivas e responsivas. No back-end,
        trabalho com Node.js, Python e Django, desenvolvendo APIs escaláveis e
        seguras. Além disso, tenho expertise em desenvolvimento desktop,
        utilizando Rust com o framework Tauri para criar aplicações leves e
        eficientes.
      </div>
      <div>
        Minha paixão por tecnologia é acompanhada por um compromisso constante
        com a inovação e as melhores práticas de desenvolvimento, contribuindo
        para a excelência dos produtos em que atuo.
      </div>
      <div class="mt-10 mx-auto">
        <Button
          bg-color="bg-cyan-800"
          text-color="text-white"
          label="Conheça meu currículo"
          icon="bi-download"
          @click="downloadCurriculum" />
      </div>
    </div>
  </Section> -->

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

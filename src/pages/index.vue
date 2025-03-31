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

const text1 = "Olá!";
const text2Part1 = "Sou ";
const text2Part2 = "Isabella Melo,";
const text3 = "Desenvolvedora front-end";

const displayText1 = ref("");
const displayText2Part1 = ref("");
const displayText2Part2 = ref("");
const displayText3 = ref("");

const typingSpeed = 50;

function typeEffect(text, refValue, callback) {
  let index = 0;
  function type() {
    if (index < text.length) {
      refValue.value += text[index];
      index++;
      setTimeout(type, typingSpeed);
    } else if (callback) {
      setTimeout(callback, 300); // Pausa antes de ir para o próximo
    }
  }
  type();
}

const projectsFolder = `${baseUrl}/img/projects-cover/`;

const projects = ref([
  {
    title: "Star Wars Catalogue",
    description: "Catalog of characters from the Star Wars universe",
    tags: ["javascript", "vue", "tailwind", "nuxt"],
    img: `${projectsFolder}/star-wars-catalogue.png`,
    alt: "star-wars-catalogue-cover",
    linkSite: "https://star-wars-catal.netlify.app/",
    linkRep: "https://github.com/isabellacpmelo/starwars",
  },
  {
    title: "Naruto Game",
    description: "Naruto's racing game, based on T-Rex Game",
    tags: ["javascript", "vue", "tailwind", "quasar", "game"],
    img: `${projectsFolder}/narutinho-game.png`,
    alt: "narutinho-game-cover",
    linkSite: "https://naruto-running-game.netlify.app/#/",
    linkRep: "https://github.com/isabellacpmelo/naruto-game",
  },
  {
    title: "Cripto Coin",
    description:
      "Conversor de criptomoedas que permite que o usuário saiba a cotação do criptoativo desejado.",
    tags: ["javascript", "vue", "tailwind", "quasar"],
    img: `${projectsFolder}/cripto-coin.png`,
    alt: "cripto-coin-cover",
    linkSite: "https://cryptor-converter.netlify.app/",
    linkRep: "https://github.com/isabellacpmelo/conversor-criptomoedas",
  },
  {
    title: "Cupcake Store",
    description:
      "Cupcake Store é uma lojinha de cupcakes fictícia e em progresso",
    tags: ["javascript", "vue", "tailwind", "nuxt"],
    img: `${projectsFolder}/cupcake-store.png`,
    alt: "cupcake-store-cover",
    linkSite: "https://cupcack-store.netlify.app/#/",
    linkRep: "https://github.com/isabellacpmelo/cupcake-store",
  },
  {
    title: "Space Shooter",
    description: "Jogo de tiro espacial",
    tags: ["javascript", "game"],
    img: `${projectsFolder}/space-shooter.gif`,
    alt: "space-shooter-cover",
    linkRep: "https://github.com/isabellacpmelo/jogo-space-shooter",
    linkSite: "https://isabellacpmelo.github.io/jogo-space-shooter/",
  },
  {
    title: "Landing Page React",
    description: "Exemplo de landing page feita em react",
    tags: ["javascript", "react"],
    img: `${projectsFolder}/landing-page-cover.png`,
    alt: "landing-page-cover",
    linkSite: "https://react-landing-page-exemplo.netlify.app/",
    linkRep: "https://github.com/isabellacpmelo/landing-page-react",
  },
]);

const tagsType = ref([
  "javascript",
  "vue",
  "tailwind",
  "nuxt",
  "quasar",
  "game",
  "react",
]);

const selectedTag = ref("all");

const filteredProjects = computed(() => {
  if (selectedTag.value === "all") {
    return projects.value;
  }
  return projects.value.filter((project) =>
    project.tags.includes(selectedTag.value)
  );
});

const currentIndex = ref(0);
const itemsPerPage = 3;

const next = () => {
  if (
    currentIndex.value <
    Math.ceil(filteredProjects.value.length / itemsPerPage) + 1
  ) {
    currentIndex.value++;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const contacts = ref([
  {
    title: "Linkedin",
    description: import.meta.env.VITE_LINKEDIN_USER,
    alt: "linkedin-logo",
    url: import.meta.env.VITE_LINKEDIN_URL,
    icon: "bi-linkedin",
  },
  {
    title: "Email",
    description: import.meta.env.VITE_PERSONAL_EMAIL,
    alt: "email-logo",
    url: `mailto:${import.meta.env.VITE_PERSONAL_EMAIL}`,
    icon: "bi-envelope-open-fill",
  },
  {
    title: "Github",
    description: import.meta.env.VITE_GITHUB_USER,
    alt: "github-logo",
    url: import.meta.env.VITE_GITHUB_URL,
    icon: "bi-github",
  },
]);

var date = new Date();
var year = date.getFullYear();

onMounted(() => {
  typeEffect(text1, displayText1, () => {
    typeEffect(text2Part1, displayText2Part1, () => {
      typeEffect(text2Part2, displayText2Part2, () => {
        typeEffect(text3, displayText3);
      });
    });
  });
});
</script>

<template>
  <!-- <div class="bg-red-300 fixed bottom-0 right-0">Voltar para o inicio</div> -->
  <Header />
  <Section>
    <div class="flex flex-col md:flex-row items-center justify-center w-full">
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
    </div>
  </Section>

  <Section title="Sobre mim" id="about-me">
    <!-- fazer uma breve apresentação -->
    <!-- adicionar imagens -->
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
  </Section>
  <Section title="Meus projetos" id="my-projects">
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
    <!-- <div>
      <Carousel :items="filteredProjects" />
    </div> -->
  </Section>
  <Section title="Entre em contato" id="contact">
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
  </Section>
  <Section sectionClass="bg-[#191F04]" padding="py-4">
    <div class="text-white lg:text-xl flex justify-center w-full">
      Copyright &copy; {{ year }} Isabella Melo
    </div>
  </Section>
</template>

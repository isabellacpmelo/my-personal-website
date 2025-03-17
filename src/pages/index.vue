<!-- @format -->

<script setup>
// criar footer
// criar filtro para o carrossel
// Estilizar cards de projeto
// criar arquivo de utils
// Criar componente para link externo
// criar internacionalização
// deixar site responsivo
// estilizar barra de rolagem
// criar componente para tabelas
// criar componente para botões
// Criar componente para imagens (quadradas e redondas  )
// Colocar baseURL no utils.js
// criar componente para language switcher
// criar componente para barra de pesquisa

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
const baseUrl = window.origin;

const projectsFolder = `${baseUrl}/src/assets/img/projects-cover/`;

const projects = ref([
  {
    title: "Star Wars Catalogue",
    description: "Catalog of characters from the Star Wars universe",
    tags: ["javascript", "vue", "tailwind", "nuxt"],
    img: `${projectsFolder}/star-wars-catalogue.png`,
    alt: "star-wars-catalogue-cover",
    url: "",
  },
  {
    title: "Naruto Game",
    description: "Naruto's racing game, based on T-Rex Game",
    tags: ["javascript", "vue", "tailwind", "quasar", "game"],
    img: `${projectsFolder}/narutinho-game.png`,
    alt: "narutinho-game-cover",
    url: "",
  },
  {
    title: "Cripto Coin",
    description:
      "Conversor de criptomoedas que permite que o usuário saiba a cotação do criptoativo desejado.",
    tags: ["javascript", "vue", "tailwind", "quasar"],
    img: `${projectsFolder}/cripto-coin.png`,
    alt: "cripto-coin-cover",
    url: "",
  },
  {
    title: "Cupcake Store",
    description:
      "Cupcake Store é uma lojinha de cupcakes fictícia e em progresso",
    tags: ["javascript", "vue", "tailwind", "nuxt"],
    img: `${projectsFolder}/cupcake-store.png`,
    alt: "cupcake-store-cover",
    url: "",
  },
  {
    title: "Space Shooter",
    description: "Jogo de tiro espacial",
    tags: ["javascript", "game"],
    img: `${projectsFolder}/space-shooter.gif`,
    alt: "space-shooter-cover",
    url: "",
  },
  {
    title: "Landing Page React",
    description: "Exemplo de landing page feita em react",
    tags: ["javascript", "react"],
    img: `${projectsFolder}/landing-page-cover.png`,
    alt: "landing-page-cover",
    url: "",
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

const currentIndex = ref(0);
const itemsPerPage = 3;

const next = () => {
  if (
    currentIndex.value <
    Math.ceil(projects.value.length / itemsPerPage) + 1
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
    alt: "linkedin-logo",
    url: "https://www.linkedin.com/in/isabella-cpmelo/",
    icon: "bi-linkedin",
  },
  {
    title: "Email",
    alt: "email-logo",
    url: "mailto:isacpmelo@gmail.com",
    icon: "bi-envelope-at-fill",
  },
  {
    title: "Github",
    alt: "github-logo",
    url: "https://github.com/isabellacpmelo",
    icon: "bi-github",
  },
]);

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
  <Header />
  <Section>
    <template #default>
      <div class="flex items-center justify-center w-full">
        <div class="text-3xl">
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
    </template>
  </Section>
  <Section title="Sobre mim" id="about-me">
    <template #default>
      <!-- fazer uma breve apresentação -->
      <!-- adicionar imagens -->
      <div
        class="flex flex-col justify-center items-start w-full text-white gap-8">
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
      </div>
    </template>
  </Section>
  <Section title="Meus projetos" id="my-projects">
    <template #default>
      <div class="text-white flex w-[95%] justify-end gap-2">
        <i class="bi bi-funnel" />
        <span>Tipo de projeto:</span>
        <select name="Teste" class="text-black">
          <option value="all" selected>Todos</option>
          <option
            v-for="tag in tagsType"
            :value="tag"
            disabled
            class="capitalize">
            {{ tag }}
          </option>
        </select>
      </div>
      <Carousel :items="projects" />
    </template>
  </Section>
  <Section title="Entre em contato" id="contact">
    <template #default>
      <div class="flex justify-center items-center w-full text-white/85 gap-8">
        <div
          v-for="(contact, index) in contacts"
          :key="index"
          class="flex flex-col items-center justify-between h-32 w-32">
          <a :href="contact.url" target="_blank">
            <i
              class="bi bi-github text-[60px] hover:text-[70px] hover:text-white"
              :class="contact.icon" />
          </a>
        </div>
      </div>
    </template>
  </Section>
  <Section sectionClass="bg-[#191F04]">
    <template #default>
      <div class="text-white text-xl flex justify-center w-full">
        Feito por Isabella Melo
      </div>
    </template>
  </Section>
</template>

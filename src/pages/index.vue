<!-- @format -->

<script setup>
// criar footer
// criar filtro para o carrossel
// Estilizar cards de projeto
// adicionar biblioteca de ícones
// criar arquivo de utils
import ProjectCard from "@/assets/components/Project/ProjectCard.vue";
import Carousel from "@/assets/components/UI/Carousel.vue";
import Section from "@/assets/components/UI/Section.vue";

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
    img: "https://img.icons8.com/?size=200&id=108786&format=png&color=000000",
    alt: "linkedin-logo",
    url: "https://www.linkedin.com/in/isabella-cpmelo/",
  },
  {
    title: "Github",
    img: "https://img.icons8.com/?size=200&id=sbhfmWq4KRr1&format=png&color=000000",
    alt: "github-logo",
    url: "https://github.com/isabellacpmelo",
  },
  {
    title: "Email",
    img: "https://img.icons8.com/?size=200&id=OumT4lIcOllS&format=png&color=000000",
    alt: "email-logo",
    url: "mailto:isacpmelo@gmail.com",
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
  <Section title="Sobre mim">
    <template #default>
      <!-- fazer uma breve apresentação -->
      <!-- adicionar imagens -->
      <div
        class="flex flex-col justify-center items-center w-full text-white gap-8">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          pretium arcu porttitor volutpat accumsan. Quisque mi nunc, ullamcorper
          quis porta eu, condimentum eu quam. Etiam sit amet elementum sapien.
          Integer condimentum mi eget lobortis pharetra. Donec purus est,
          ullamcorper non est id, posuere condimentum metus. Nam interdum orci
          et justo ultrices, eu euismod urna gravida. Fusce sagittis dolor a
          urna sollicitudin suscipit.
        </div>
        <div>
          Ut gravida est nec enim ultricies, eget vehicula nunc hendrerit.
          Suspendisse potenti. Donec lobortis, erat in venenatis posuere, odio
          odio dapibus libero, vitae condimentum ligula nisl id dui. Curabitur
          condimentum placerat quam in elementum. Praesent ut convallis mauris.
          Duis eget augue ac ante pulvinar molestie. In sed augue ipsum.
          Pellentesque sit amet massa porta, mattis quam non, semper diam. In
          hac habitasse platea dictumst. Etiam auctor ac est et pellentesque.
          Proin tincidunt luctus nisi in tempor. Ut ullamcorper, sapien vitae
          tempor eleifend, nulla mi posuere neque, eu hendrerit purus augue eget
          massa. Nam sodales augue urna, eget auctor felis efficitur ac. Fusce
          elementum imperdiet ante non porta. Suspendisse et dui non erat
          egestas blandit.
        </div>
      </div>
    </template>
  </Section>
  <Section title="Meus projetos">
    <template #default>
      <Carousel :items="projects" />
    </template>
  </Section>
  <Section title="Entre em contato">
    <template #default>
      <div class="flex justify-center items-center w-full text-white gap-8">
        <div
          v-for="(contact, index) in contacts"
          :key="index"
          class="flex flex-col items-center justify-between h-32 w-32">
          <a :href="contact.url" target="_blank">
            <img
              :src="contact.img"
              :alt="contact.alt"
              class="h-24 hover:h-28" />
          </a>
          <!-- <h3>{{ contact.title }}</h3> -->
        </div>
      </div>
    </template>
  </Section>
  <Section sectionClass="bg-[#191F04]">
    <template #default>
      <div class="text-white text-xl">Footer aqui</div>
    </template>
  </Section>
</template>

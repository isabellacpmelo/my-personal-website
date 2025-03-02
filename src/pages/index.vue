<!-- @format -->

<script setup>
import ProjectCard from "@/assets/components/Project/ProjectCard.vue";

const text1 = "Olá!";
const text2Part1 = "Sou ";
const text2Part2 = "Isabella Melo,"; // Parte com cor diferente
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
const filterTag = ref("");
const itemsPerPage = 3;

const filteredProjects = computed(() => {
  return filterTag.value
    ? projects.value.filter((p) => p.tags.includes(filterTag.value))
    : projects.value;
});

const uniqueTags = computed(() => {
  return [...new Set(projects.value.flatMap((p) => p.tags))];
});

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
    img: "https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000",
    alt: "linkedin-logo",
    url: "",
  },
  {
    title: "Github",
    img: "https://img.icons8.com/?size=100&id=igYV9I849M8k&format=png&color=000000",
    alt: "github-logo",
    url: "",
  },
  {
    title: "Email",
    img: "https://img.icons8.com/?size=100&id=JeO1Kv9jsmLr&format=png&color=000000",
    alt: "email-logo",
    url: "",
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
  <div
    class="w-full h-[300px] flex justify-center items-center bg-black/10 shadow-md shadow-black/30">
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
  <div
    class="w-full h-full p-16 flex flex-col justify-start items-start bg-black/10 shadow-md shadow-black/30 gap-8">
    <h2 class="text-3xl text-white">Sobre mim</h2>
    <!-- fazer uma breve apresentação -->
    <!-- adicionar imagens -->
    <div
      class="flex flex-col justify-center items-center w-full text-white gap-8">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium
        arcu porttitor volutpat accumsan. Quisque mi nunc, ullamcorper quis
        porta eu, condimentum eu quam. Etiam sit amet elementum sapien. Integer
        condimentum mi eget lobortis pharetra. Donec purus est, ullamcorper non
        est id, posuere condimentum metus. Nam interdum orci et justo ultrices,
        eu euismod urna gravida. Fusce sagittis dolor a urna sollicitudin
        suscipit.
      </div>
      <div>
        Ut gravida est nec enim ultricies, eget vehicula nunc hendrerit.
        Suspendisse potenti. Donec lobortis, erat in venenatis posuere, odio
        odio dapibus libero, vitae condimentum ligula nisl id dui. Curabitur
        condimentum placerat quam in elementum. Praesent ut convallis mauris.
        Duis eget augue ac ante pulvinar molestie. In sed augue ipsum.
        Pellentesque sit amet massa porta, mattis quam non, semper diam. In hac
        habitasse platea dictumst. Etiam auctor ac est et pellentesque. Proin
        tincidunt luctus nisi in tempor. Ut ullamcorper, sapien vitae tempor
        eleifend, nulla mi posuere neque, eu hendrerit purus augue eget massa.
        Nam sodales augue urna, eget auctor felis efficitur ac. Fusce elementum
        imperdiet ante non porta. Suspendisse et dui non erat egestas blandit.
      </div>
    </div>
  </div>
  <div class="w-full p-16 bg-black/10 shadow-md shadow-black/30">
    <h2 class="text-3xl text-white">Meus projetos</h2>

    <!-- Filtro de tags -->
    <div class="mt-4 flex gap-2">
      <button
        v-for="tag in uniqueTags"
        :key="tag"
        @click="filterTag = tag"
        :class="{
          'bg-blue-500': filterTag === tag,
          'bg-gray-700': filterTag !== tag,
        }"
        class="px-3 py-1 text-white rounded">
        {{ tag }}
      </button>
      <button
        @click="filterTag = ''"
        class="px-3 py-1 bg-red-500 text-white rounded">
        Resetar
      </button>
    </div>

    <div class="mt-10 relative w-full overflow-hidden">
      <div
        class="flex transition-transform"
        :style="`transform: translateX(-${
          currentIndex * (100 / itemsPerPage)
        }%)`">
        <div
          v-for="(project, index) in filteredProjects"
          :key="index"
          class="w-1/3 flex-shrink-0 p-2">
          <ProjectCard :project="project" class="h-[450px]" />
        </div>
      </div>
    </div>

    <!-- Controles do Carrossel -->
    <div class="mt-4 flex justify-between">
      <button @click="prev" class="px-4 py-2 bg-gray-700 text-white rounded">
        Anterior
      </button>
      <button @click="next" class="px-4 py-2 bg-gray-700 text-white rounded">
        Próximo
      </button>
    </div>
  </div>
  <div
    class="w-full p-16 flex flex-col justify-start items-start bg-black/10 shadow-md shadow-black/30 gap-8">
    <h2 class="text-3xl text-white">Entre em contato</h2>
    <div class="flex justify-center items-center w-full text-white gap-10">
      <div
        v-for="(contact, index) in contacts"
        :key="index"
        class="flex flex-col items-center justify-center gap-2 border-b-4 border-gray-700/50 rounded-3xl w-40 h-40">
        <img :src="contact.img" :alt="contact.alt" class="h-24" />
        <h3>{{ contact.title }}</h3>
      </div>
    </div>
  </div>
  <!-- adicionar link do github, adicionar linkedin e email -->
  <!-- adiconar footer aqui -->
</template>

<style scoped>
.flex {
  display: flex;
  transition: transform 0.9s ease-in-out;
}
</style>

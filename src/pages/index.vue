<!-- @format -->

<script setup>
import { ref, onMounted } from "vue";

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

const projects = ref([
  {
    title: "Star Wars Catalogue",
    description: "Catalog of characters from the Star Wars universe",
    tags: ["javascript", "vue", "tailwind", "nuxt"],
    img: "star-wars-catalogue.png",
    url: "",
  },
  {
    title: "Naruto Game",
    description: "Naruto's racing game, based on T-Rex Game",
    tags: ["javascript", "vue", "tailwind", "quasar", "game"],
    img: "narutinho-game.png",
    url: "",
  },
  {
    title: "Cripto Coin",
    description:
      "Conversor de criptomoedas que permite que o usuário saiba a cotação do criptoativo desejado.",
    tags: ["javascript", "vue", "tailwind", "quasar"],
    img: "cripto-coin.png",
    url: "",
  },
  {
    title: "Cupcake Store",
    description:
      "Cupcake Store é uma lojinha de cupcakes fictícia e em progresso",
    tags: ["javascript", "vue", "tailwind", "nuxt"],
    img: "cupcake_store.png",
    url: "",
  },
  {
    title: "Space Shooter",
    description: "Jogo de tiro espacial",
    tags: ["javascript", "game"],
    img: "space_shooter.gif",
    url: "",
  },
  {
    title: "Landing Page React",
    description: "Exemplo de landing page feita em react",
    tags: ["javascript", "react"],
    img: "space_shooter.gif",
    url: "",
  },
]);

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
    <div class="mt-10">
      <div v-for="(project, index) in projects" :key="index">
        <!-- criar filtro por tags no carrossel -->
        <div
          class="flex flex-col items-start rounded-2xl w-[400px] hover:w-[401px] text-white gap-3 p-8 bg-black my-4">
          <div class="flex justify-center w-full">
            <div
              class="h-[170px] w-[370px] bg-cover bg-no-repeat border border-indigo-500 rounded-xl"
              :class="`bg-[url('/src/assets/img/projects-cover/${project.img}')]`" />
            <!-- <div
              class="h-[170px] w-[370px] bg-contain hover:bg-cover bg-no-repeat border border-indigo-500 rounded-xl bg-[url('/src/assets/img/projects-cover/narutinho_game.png')]" /> -->
          </div>
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <div>
            <ul class="flex gap-2">
              <li
                v-for="(tag, index) in project.tags"
                :key="index"
                class="bg-sky-950 px-2 rounded-full">
                {{ tag }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- criar um carrossel com imagens dos projetos, fazer breve apresentação, adicionar tags, adicionar link do github -->
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
    <!-- adicionar link do github, adicionar linkedin e email -->
  </div>
  <!-- adiconar footer aqui -->
</template>

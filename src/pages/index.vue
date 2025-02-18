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
  <div
    class="w-full p-16 flex flex-col justify-start items-start bg-black/10 shadow-md shadow-black/30 gap-8">
    <h2 class="text-3xl text-white">Meus projetos</h2>
    <div class="flex justify-center items-center w-full text-white gap-8">
      <div>Projeto 1</div>
      <div>Projeto 2</div>
      <div>Projeto 3</div>
      <div>Projeto 4</div>
      <div>Projeto 5</div>
      <div>Projeto 6</div>
      <div>Projeto 7</div>
      <div>Projeto 8</div>
    </div>
    <!-- criar um carrossel com imagens dos projetos, fazer breve apresentação, adicionar tags, adicionar link do github -->
  </div>
  <div
    class="w-full p-16 flex flex-col justify-start items-start bg-black/10 shadow-md shadow-black/30 gap-8">
    <h2 class="text-3xl text-white">Entre em contato</h2>
    <div class="flex justify-center items-center w-full text-white gap-8">
      <div>Linkedin</div>
      <div>Github</div>
      <div>Email</div>
    </div>
    <!-- adicionar link do github, adicionar linkedin e email -->
  </div>
  <!-- adiconar footer aqui -->
</template>

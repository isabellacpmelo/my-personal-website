<!-- @format -->

// eslint-disable-next-line vue multi-word-component-names
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
    class="w-full h-[400px] flex justify-center items-center bg-black/10 shadow-md shadow-black/30">
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

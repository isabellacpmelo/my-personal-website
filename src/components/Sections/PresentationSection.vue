<script setup>
const text1 = 'Olá!'
const text2Part1 = 'Sou '
const text2Part2 = 'Isabella Melo'
const text2Part3 = ','
const text3 = 'Desenvolvedora fullstack'

const displayText1 = ref('')
const displayText2Part1 = ref('')
const displayText2Part2 = ref('')
const displayText2Part3 = ref('')
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
onMounted(() => {
  typeEffect(text1, displayText1, () => {
    typeEffect(text2Part1, displayText2Part1, () => {
      typeEffect(text2Part2, displayText2Part2, () => {
        typeEffect(text2Part3, displayText2Part3, () => {
          typeEffect(text3, displayText3)
        })
      })
    })
  })
})
</script>

<template>
  <Section class="h-screen">
    <div
      class="h-full w-full flex flex-col justify-center items-center gap-16 md:gap-20 2xl:gap-36">
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-32">
        <div class="text-xl lg:text-3xl xl:text-5xl text-center md:text-start">
          <p class="text-secondary"><span v-text="displayText1"></span></p>
          <p class="text-secondary">
            <span v-text="displayText2Part1"></span>
            <strong class="text-mustard" v-text="displayText2Part2"></strong>
            <span class="text-secondary" v-text="displayText2Part3"></span>
          </p>
          <p class="text-secondary"><span v-text="displayText3"></span></p>
        </div>
        <ProfilePic />
      </div>
      <div>
        <ResumeButton />
        <!-- <LanguageButton language="pt-BR" /> -->
      </div>
    </div>
  </Section>
</template>

<script setup>
import criptoCoinCover from '@/assets/img/projects-cover/cripto-coin.png'
</script>

<template>
  <Section title="Meus Projetos" light>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur facere
    illo sapiente, minima harum reprehenderit explicabo eaque neque at, fugiat
    quam! Eligendi ipsam voluptate, asperiores tempore dicta sequi dolore
    dolorem?

    <div class="flex gap-9">
      <ImageFrameComputer
        :src="criptoCoinCover"
        alt="teste"
        class="hidden sm:inline" />
      <ImageFrameMobile
        :src="criptoCoinCover"
        alt="teste"
        class="inline sm:hidden" />
    </div>
  </Section>
</template>

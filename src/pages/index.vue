<script setup>
// criar componente para tabelas
// criar componente para botões
// Criar componente para imagens (quadradas e redondas  )
// instalar biblioteca de idiomas
// criar componente para language switcher
// criar componente para barra de pesquisa
// Criar componente para o filtro
// criar env

const projectsFolder = `${baseUrl}/img/projects-cover/`;

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

var date = new Date();
var year = date.getFullYear();
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50">
    <Header />
  </div>

  <div class="pt-20">
    <PresentationSection />
    <AboutMeSection />
    <TechnologiesSection />
    <MyProjectsSection />
    <ContactSection />
  </div>
</template>

<script setup>
// criar componente para tabelas
// criar componente para botões
// Criar componente para imagens (quadradas e redondas  )
// instalar biblioteca de idiomas
// criar componente para language switcher
// criar componente para barra de pesquisa
// Criar componente para o filtro
// criar env

const projectsFolder = `${baseUrl}/img/projects-cover/`

const tagsType = ref([
  'javascript',
  'vue',
  'tailwind',
  'nuxt',
  'quasar',
  'game',
  'react',
])

const selectedTag = ref('all')

const filteredProjects = computed(() => {
  if (selectedTag.value === 'all') {
    return projects.value
  }
  return projects.value.filter((project) =>
    project.tags.includes(selectedTag.value)
  )
})

const currentIndex = ref(0)
const itemsPerPage = 3

const next = () => {
  if (
    currentIndex.value <
    Math.ceil(filteredProjects.value.length / itemsPerPage) + 1
  ) {
    currentIndex.value++
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

var date = new Date()
var year = date.getFullYear()
</script>

<template>
  <!-- <div class="bg-red-300 fixed bottom-0 right-0">Voltar para o inicio</div> -->
  <!-- <Header /> -->
  <PresentationSection />
  <AboutMeSection />
  <TechnologiesSection />
  <MyProjectsSection />
  <ContactSection />

  <!-- <Button
    bg-color="bg-cyan-800"
    text-color="text-white"
    label="Conheça meu currículo"
    icon="bi-download"
    @click="downloadCurriculum" /> -->

  <!-- vite -->
  <!-- next -->
  <!-- quasar -->
  <!-- Criar componente para as imgs de tecnologia -->

  <!-- <Section title="Meus projetos" id="my-projects">
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
  </Section> -->

  <!-- <Section sectionClass="bg-[#191F04]" padding="py-4">
    <div class="text-white lg:text-xl flex justify-center w-full">
      Copyright &copy; {{ year }} Isabella Melo
    </div>
  </Section> -->
</template>

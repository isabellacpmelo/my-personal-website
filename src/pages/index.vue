<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const containerRef = ref(null);
const currentSection = ref(0);
const isScrolling = ref(false);
const sections = ["home", "about-me", "technologies", "my-projects", "contact"];

const scrollToSection = (index) => {
  if (isScrolling.value || !containerRef.value) return;

  isScrolling.value = true;
  const targetPosition = index * window.innerHeight;

  containerRef.value.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });

  currentSection.value = index;

  setTimeout(() => {
    isScrolling.value = false;
  }, 800);
};

let wheelTimeout;
const handleWheel = (e) => {
  if (isScrolling.value) {
    e.preventDefault();
    return;
  }

  clearTimeout(wheelTimeout);
  wheelTimeout = setTimeout(() => {
    const delta = e.deltaY;

    if (delta > 0 && currentSection.value < sections.length - 1) {
      // Scroll para baixo
      scrollToSection(currentSection.value + 1);
    } else if (delta < 0 && currentSection.value > 0) {
      // Scroll para cima
      scrollToSection(currentSection.value - 1);
    }
  }, 50);
};

const handleKeydown = (e) => {
  if (isScrolling.value) return;

  switch (e.key) {
    case "ArrowDown":
    case "PageDown":
      e.preventDefault();
      if (currentSection.value < sections.length - 1) {
        scrollToSection(currentSection.value + 1);
      }
      break;
    case "ArrowUp":
    case "PageUp":
      e.preventDefault();
      if (currentSection.value > 0) {
        scrollToSection(currentSection.value - 1);
      }
      break;
    case "Home":
      e.preventDefault();
      scrollToSection(0);
      break;
    case "End":
      e.preventDefault();
      scrollToSection(sections.length - 1);
      break;
  }
};

const handleScroll = () => {
  if (isScrolling.value || !containerRef.value) return;

  const scrollTop = containerRef.value.scrollTop;
  const sectionHeight = window.innerHeight;
  const newSection = Math.round(scrollTop / sectionHeight);

  if (
    newSection !== currentSection.value &&
    newSection >= 0 &&
    newSection < sections.length
  ) {
    currentSection.value = newSection;
  }
};

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener("wheel", handleWheel, {
      passive: false,
    });
    containerRef.value.addEventListener("scroll", handleScroll);
  }
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  if (containerRef.value) {
    containerRef.value.removeEventListener("wheel", handleWheel);
    containerRef.value.removeEventListener("scroll", handleScroll);
  }
  document.removeEventListener("keydown", handleKeydown);
  clearTimeout(wheelTimeout);
});

provide("scrollToSection", (sectionName) => {
  const index = sections.indexOf(sectionName);
  if (index !== -1) {
    scrollToSection(index);
  }
});

var date = new Date();
var year = date.getFullYear();
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50">
    <Header />
  </div>

  <div ref="containerRef" class="h-screen overflow-y-auto overflow-x-hidden">
    <div id="home" class="h-screen flex items-center justify-center">
      <PresentationSection />
    </div>

    <div id="about-me" class="h-screen flex items-center justify-center">
      <AboutMeSection />
    </div>

    <div id="technologies" class="h-screen flex items-center justify-center">
      <TechnologiesSection />
    </div>

    <div id="my-projects" class="h-screen flex items-center justify-center">
      <MyProjectsSection />
    </div>

    <div id="contact" class="h-screen flex items-center justify-center">
      <ContactSection />
    </div>
  </div>

  <!-- Indicador de seção atual (opcional) -->
  <div
    class="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
    <button
      v-for="(section, index) in sections"
      :key="section"
      @click="scrollToSection(index)"
      class="w-3 h-3 rounded-full border-2 border-white transition-all duration-300"
      :class="
        currentSection === index
          ? 'bg-white'
          : 'bg-transparent hover:bg-white/50'
      "
      :title="
        section.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())
      "></button>
  </div>
</template>

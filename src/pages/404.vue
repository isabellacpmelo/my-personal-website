<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const goHome = () => {
  window.location.href = "/";
};

const fallbackTexts = {
  title: "Página não encontrada",
  description: "Oops! Parece que a página que você está procurando não existe.",
  backToHome: "Voltar para o início",
};

const getTranslation = (key, fallbackKey) => {
  try {
    return t(key);
  } catch {
    return fallbackTexts[fallbackKey] || key;
  }
};
</script>

<template>
  <main
    class="min-h-screen bg-primary flex items-center justify-center px-4"
    role="main">
    <div class="max-w-lg w-full text-center">
      <div class="mb-8">
        <div class="relative">
          <h1
            class="text-8xl md:text-9xl font-bold text-transparent bg-gradient-to-r from-mustard via-lightBlue to-mustard bg-clip-text mb-4">
            404
          </h1>
          <div
            class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            <div
              class="w-12 h-12 bg-gradient-to-br from-mustard/20 to-lightBlue/20 rounded-full animate-bounce"></div>
          </div>
          <div class="absolute bottom-0 right-1/4 transform translate-y-4">
            <div
              class="w-8 h-8 bg-gradient-to-br from-lightBlue/30 to-primary/30 rounded-full animate-pulse"></div>
          </div>
          <div class="absolute bottom-0 left-1/4 transform translate-y-2">
            <div
              class="w-6 h-6 bg-gradient-to-br from-mustard/40 to-mustard/20 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      <div class="mb-8">
        <h2 class="text-2xl md:text-3xl font-semibold text-lightText mb-4">
          {{ getTranslation("error404.title", "title") }}
        </h2>
        <p class="text-lightText/80 text-lg mb-6 leading-relaxed">
          {{ getTranslation("error404.description", "description") }}
        </p>
        <p class="text-lightText/60 text-sm">
          {{ getTranslation("error404.suggestion", "suggestion") }}
        </p>
      </div>

      <div class="space-y-4">
        <button
          @click="goHome"
          class="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-mustard to-lightBlue text-primary font-semibold rounded-full hover:shadow-lg hover:shadow-mustard/25 transform hover:-translate-y-1 transition-all duration-300 group">
          <i
            class="bi bi-house-door-fill text-lg group-hover:scale-110 transition-transform"></i>
          <span>{{ getTranslation("error404.backToHome", "backToHome") }}</span>
        </button>

        <div class="mt-6">
          <a
            href="/"
            class="text-mustard hover:text-lightBlue transition-colors duration-300 text-sm underline underline-offset-4">
            {{
              getTranslation("error404.orClickHere", "orClickHere") ||
              "ou clique aqui para ir direto"
            }}
          </a>
        </div>
      </div>

      <div class="mt-12 opacity-30">
        <div class="flex justify-center items-center space-x-2">
          <div
            class="w-2 h-2 bg-mustard rounded-full animate-bounce"
            style="animation-delay: 0s"></div>
          <div
            class="w-2 h-2 bg-lightBlue rounded-full animate-bounce"
            style="animation-delay: 0.1s"></div>
          <div
            class="w-2 h-2 bg-mustard rounded-full animate-bounce"
            style="animation-delay: 0.2s"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Animação personalizada para o gradiente */
@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

h1 {
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
}
</style>

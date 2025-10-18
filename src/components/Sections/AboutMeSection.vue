<template>
  <Section title="Sobre mim" light>
    <!-- card 1 -->
    <div
      class="group relative p-4 bg-gradient-to-br from-secondary via-secondary/80 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-lightBlue/20">
      <div class="flex items-start gap-3">
        <div
          class="flex-shrink-0 w-9 h-9 bg-gradient-to-br from-primary to-lightBlue rounded-full flex items-center justify-center shadow-lg">
          <i class="bi bi-code-slash text-lightText" />
        </div>
        <div class="flex-1">
          <h3 class="text-lg font-semibold text-darkText mb-2">
            Desenvolvedora Full Stack
          </h3>
          <p class="text-darkText/80 leading-relaxed">
            Transformo desafios complexos em soluções de software eficientes e
            escaláveis. Minha jornada profissional é focada em construir
            produtos que não apenas funcionam bem, mas que também geram um
            impacto real e positivo para os usuários e o negócio.
          </p>
        </div>
      </div>
    </div>
    <!-- card 2 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <div
        class="group p-5 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl border border-lightBlue/20 hover:shadow-lg transition-all duration-300 hover:border-lightBlue/40">
        <div class="flex items-center gap-3 mb-3">
          <div
            class="w-10 h-10 bg-gradient-to-br from-lightBlue to-primary rounded-lg flex items-center justify-center">
            <i class="bi bi-display text-lightText" />
          </div>
          <h4 class="font-semibold text-darkText">Frontend</h4>
        </div>
        <p class="text-sm text-darkText/80">
          Vue.js, React e Angular para criar interfaces de alta performance,
          otimizando o tempo de carregamento e garantindo experiência fluida.
        </p>
      </div>

      <div
        class="group p-5 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl border border-primary/20 hover:shadow-lg transition-all duration-300 hover:border-primary/40">
        <div class="flex items-center gap-3 mb-3">
          <div
            class="w-10 h-10 bg-gradient-to-br from-primary to-lightBlue rounded-lg flex items-center justify-center">
            <i class="bi bi-pc-display text-lightText" />
          </div>
          <h4 class="font-semibold text-darkText">Backend</h4>
        </div>
        <p class="text-sm text-darkText/80">
          Node.js e Python para desenvolver APIs RESTful seguras e garantir a
          escalabilidade de plataformas digitais.
        </p>
      </div>
    </div>
    <!-- card 3 -->
    <div
      class="p-6 bg-gradient-to-br from-mustard/10 via-mustard/5 to-secondary rounded-xl border border-mustard/30 shadow-md hover:border-mustard/50 transition-all duration-300">
      <div class="flex items-start gap-4">
        <div
          class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-mustard to-mustard/80 rounded-xl flex items-center justify-center shadow-lg">
          <i class="bi bi-lightning-charge text-lightText" />
        </div>
        <div class="flex-1">
          <h4 class="font-semibold text-darkText mb-2">Inovação & Futuro</h4>
          <p class="text-darkText/80 text-sm leading-relaxed mb-3">
            Explorando o futuro das aplicações desktop com
            <span class="font-semibold text-primary">Rust e Tauri</span>
            e integrando o poder da
            <span class="font-semibold text-mustard/90"
              >Inteligência Artificial generativa</span
            >
            para automatizar processos e criar soluções mais inteligentes.
          </p>
          <div class="flex gap-2">
            <span
              class="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
              >Rust</span
            >
            <span
              class="px-3 py-1 bg-mustard/10 text-mustard text-xs font-medium rounded-full border border-mustard/20"
              >AI</span
            >
            <span
              class="px-3 py-1 bg-lightBlue/10 text-lightBlue text-xs font-medium rounded-full border border-lightBlue/20"
              >Tauri</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- card 4 -->
    <div
      class="p-6 bg-gradient-to-br from-lightBlue/10 via-lightBlue/5 to-secondary rounded-xl border border-lightBlue/30 shadow-md hover:border-lightBlue/50 transition-all duration-300">
      <div class="flex items-center gap-3 mb-4">
        <div
          class="w-10 h-10 bg-gradient-to-br from-lightBlue to-primary rounded-lg flex items-center justify-center">
          <i class="bi bi bi-person-arms-up text-lightText" />
        </div>
        <h4 class="font-semibold text-darkText">Filosofia de Trabalho</h4>
      </div>
      <p class="text-darkText/80 text-sm leading-relaxed">
        Acredito no poder da
        <span class="font-semibold text-lightBlue">colaboração ágil</span>
        e do
        <span class="font-semibold text-primary">código limpo</span> para
        impulsionar a inovação. Estou sempre em busca de projetos desafiadores
        onde eu possa aplicar minhas habilidades para construir tecnologia de
        ponta.
      </p>
    </div>
    <!-- Ilustração -->
    <div class="relative group">
      <div
        class="absolute inset-0 bg-gradient-to-br from-lightBlue/20 via-primary/15 to-mustard/20 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>

      <div
        class="relative bg-secondary rounded-3xl p-8 shadow-2xl border border-lightBlue/20">
        <img
          src="@/assets/img/notebook-illustration.png"
          alt="Ilustração de desenvolvimento"
          class="h-48 w-auto md:h-56 lg:h-64 xl:h-80 2xl:h-96 object-contain mx-auto transform group-hover:scale-105 transition-transform duration-300" />

        <div
          class="absolute top-4 right-4 w-4 h-4 bg-lightBlue rounded-full animate-pulse"></div>
        <div
          class="absolute bottom-8 left-4 w-3 h-3 bg-primary rounded-full animate-pulse"
          style="animation-delay: 0.5s"></div>
        <div
          class="absolute top-1/2 left-2 w-2 h-2 bg-mustard rounded-full animate-pulse"
          style="animation-delay: 1s"></div>
      </div>
    </div>
  </Section>
</template>

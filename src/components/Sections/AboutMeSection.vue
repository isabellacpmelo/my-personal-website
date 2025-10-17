<template>
  <Section title="Sobre mim" light>
    <div class="relative overflow-hidden">
      <div
        class="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-lightBlue/20 to-primary/20 rounded-full opacity-30 blur-xl"></div>
      <div
        class="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-mustard/20 to-lightBlue/20 rounded-full opacity-30 blur-xl"></div>

      <div
        class="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div class="lg:col-span-7 space-y-6">
          <div
            class="group relative p-6 bg-gradient-to-br from-secondary via-secondary/80 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-lightBlue/20">
            <div
              class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-lightBlue to-mustard rounded-t-2xl"></div>
            <div class="flex items-start gap-4">
              <div
                class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-lightBlue rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  class="w-6 h-6 text-lightText"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-xl font-bold text-darkText mb-3">
                  Desenvolvedora Full Stack
                </h3>
                <p class="text-darkText/80 leading-relaxed">
                  Transformo desafios complexos em soluções de software
                  eficientes e escaláveis. Minha jornada profissional é focada
                  em construir produtos que não apenas funcionam bem, mas que
                  também geram um impacto real e positivo para os usuários e o
                  negócio.
                </p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              class="group p-5 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl border border-lightBlue/20 hover:shadow-lg transition-all duration-300 hover:border-lightBlue/40">
              <div class="flex items-center gap-3 mb-3">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-lightBlue to-primary rounded-lg flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-lightText"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-darkText">Frontend</h4>
              </div>
              <p class="text-sm text-darkText/80">
                Vue.js, React e Angular para criar interfaces de alta
                performance, otimizando o tempo de carregamento e garantindo
                experiência fluida.
              </p>
            </div>

            <div
              class="group p-5 bg-gradient-to-br from-secondary to-secondary/70 rounded-xl border border-primary/20 hover:shadow-lg transition-all duration-300 hover:border-primary/40">
              <div class="flex items-center gap-3 mb-3">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-primary to-lightBlue rounded-lg flex items-center justify-center">
                  <svg
                    class="w-5 h-5 text-lightText"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                  </svg>
                </div>
                <h4 class="font-semibold text-darkText">Backend</h4>
              </div>
              <p class="text-sm text-darkText/80">
                Node.js e Python para desenvolver APIs RESTful seguras e
                garantir a escalabilidade de plataformas digitais.
              </p>
            </div>
          </div>

          <div
            class="p-6 bg-gradient-to-br from-mustard/10 via-mustard/5 to-secondary rounded-xl border border-mustard/30 shadow-md hover:border-mustard/50 transition-all duration-300">
            <div class="flex items-start gap-4">
              <div
                class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-mustard to-mustard/80 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-darkText mb-2">
                  Inovação & Futuro
                </h4>
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

          <div
            class="p-6 bg-gradient-to-br from-lightBlue/10 via-lightBlue/5 to-secondary rounded-xl border border-lightBlue/30 shadow-md hover:border-lightBlue/50 transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 bg-gradient-to-br from-lightBlue to-primary rounded-lg flex items-center justify-center">
                <svg
                  class="w-5 h-5 text-lightText"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h4 class="font-semibold text-darkText">Filosofia de Trabalho</h4>
            </div>
            <p class="text-darkText/80 text-sm leading-relaxed">
              Acredito no poder da
              <span class="font-semibold text-lightBlue">colaboração ágil</span>
              e do
              <span class="font-semibold text-primary">código limpo</span> para
              impulsionar a inovação. Estou sempre em busca de projetos
              desafiadores onde eu possa aplicar minhas habilidades para
              construir tecnologia de ponta.
            </p>
          </div>
        </div>

        <div class="lg:col-span-5 flex justify-center lg:justify-end">
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
        </div>
      </div>
    </div>
  </Section>
</template>

<template>
  <Section title="Sobre mim" light>
    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-6 -mt-4 md:-mt-10 2xl:mt-0">
      <div class="flex flex-col gap-2 md:gap-6 2xl:justify-between">
        <AboutMeCard
          title="Desenvolvedora Full Stack"
          description="Transformo desafios complexos em soluções de software eficientes e escaláveis. Minha jornada profissional é focada em construir produtos que não apenas funcionam bem, mas que também geram um impacto real e positivo para os usuários e o negócio."
          icon="bi-code-slash" />

        <AboutMeCard
          title="Inovação & Futuro"
          icon="bi-lightning-charge"
          iconClasses="from-mustard to-mustard/80"
          card-classes="from-mustard/25 via-white to-primary/20"
          border-card="border-mustard/50 hover:border-mustard/90">
          <div>
            <div>
              <p class="text-darkText/80 text-sm leading-relaxed mb-3">
                Explorando o futuro das aplicações desktop com
                <span class="font-semibold text-primary">Rust e Tauri</span>
                e integrando o poder da
                <span class="font-semibold text-mustard/90"
                  >Inteligência Artificial generativa</span
                >
                para automatizar processos e criar soluções mais inteligentes.
              </p>
            </div>
            <div class="flex gap-3 2xl:mt-6">
              <span
                class="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                >Rust</span
              >
              <span
                class="px-3 py-1 bg-mustard/20 text-primary text-xs font-medium rounded-full border border-mustard/80"
                >AI</span
              >
              <span
                class="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                >Tauri</span
              >
            </div>
          </div>
        </AboutMeCard>
      </div>

      <div class="flex flex-col gap-2 md:gap-6 justify-center">
        <AboutMeCard
          title="Filosofia de Trabalho"
          icon="bi-person-arms-up"
          iconClasses="from-mustard to-mustard/80"
          card-classes="from-mustard/25 via-white to-primary/20"
          border-card="border-mustard/50 hover:border-mustard/90">
          <div>
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
        </AboutMeCard>

        <AboutMeCard>
          <template #content>
            <div class="relative">
              <img
                src="@/assets/img/notebook-illustration.png"
                alt="Ilustração de desenvolvimento"
                class="h-36 w-auto md:h-56 lg:h-64 xl:h-48 2xl:h-56 object-contain mx-auto transform group-hover:scale-105 transition-transform duration-300" />
              <div
                class="absolute top-4 right-4 w-4 h-4 bg-lightBlue rounded-full animate-pulse" />
              <div
                class="absolute bottom-8 left-4 w-3 h-3 bg-primary rounded-full animate-pulse"
                style="animation-delay: 0.5s" />
              <div
                class="absolute top-1/2 left-2 w-2 h-2 bg-mustard rounded-full animate-pulse"
                style="animation-delay: 1s" />
            </div>
          </template>
        </AboutMeCard>
      </div>
    </div>
  </Section>
</template>

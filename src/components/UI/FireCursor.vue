<script setup>
const container = ref(null)
const particles = ref([])
const nextParticleId = ref(0)

const createParticle = (x, y) => {
  const particle = {
    id: nextParticleId.value++,
    x,
    y,
    size: Math.random() * 10 + 5,
    life: 1,
    color: `hsl(${Math.random() * 30 + 15}, 100%, 50%)`,
  }
  particles.value.push(particle)
}

const updateParticles = () => {
  particles.value = particles.value.filter((particle) => {
    particle.life -= 0.02
    particle.y -= 1
    return particle.life > 0
  })
}

const getParticleStyle = (particle) => {
  return {
    left: `${particle.x}px`,
    top: `${particle.y}px`,
    width: `${particle.size}px`,
    height: `${particle.size}px`,
    backgroundColor: particle.color,
    opacity: particle.life,
  }
}

let animationFrame = null
const mousePosition = ref({ x: 0, y: 0 })

const cursorStyle = computed(() => ({
  transform: `translate(${mousePosition.value.x}px, ${mousePosition.value.y}px)`,
}))

const handleMouseMove = (e) => {
  mousePosition.value = { x: e.clientX, y: e.clientY }
  createParticle(mousePosition.value.x, mousePosition.value.y)
}

const animate = () => {
  updateParticles()
  animationFrame = requestAnimationFrame(animate)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  animate()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  if (animationFrame) {
    cancelAnimationFrame(animationFrame)
  }
})
</script>

<template>
  <div class="fire-cursor" ref="container">
    <div
      v-for="particle in particles"
      :key="particle.id"
      class="particle"
      :style="getParticleStyle(particle)"></div>
    <div class="custom-cursor" :style="cursorStyle"></div>
    <div class="cursor-glow" :style="cursorStyle"></div>
  </div>
</template>

<style scoped>
.fire-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
}

.particle {
  position: absolute;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  filter: blur(2px);
}

.custom-cursor {
  position: fixed;
  width: 10px;
  height: 10px;
  background: rgb(255, 165, 0);
  border-radius: 50%;
  transform-origin: center;
  mix-blend-mode: screen;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.8);
}

.cursor-glow {
  position: fixed;
  width: 20px;
  height: 20px;
  background: radial-gradient(
    circle,
    rgba(255, 165, 0, 0.4) 0%,
    rgba(255, 165, 0, 0) 70%
  );
  border-radius: 50%;
  transform-origin: center;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.8;
  }
}
</style>

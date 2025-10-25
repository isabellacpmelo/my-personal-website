<template>
  <div class="fire-cursor" ref="container">
    <div
      v-for="particle in particles"
      :key="particle.id"
      class="particle"
      :style="getParticleStyle(particle)"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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
let lastMouseX = 0
let lastMouseY = 0

const handleMouseMove = (e) => {
  lastMouseX = e.clientX
  lastMouseY = e.clientY
  createParticle(lastMouseX, lastMouseY)
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
</style>

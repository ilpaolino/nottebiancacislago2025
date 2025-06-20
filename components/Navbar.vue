<template>
  <nav
    :class="['block py-4 w-full max-w-full rounded-none px-4 bg-transparent text-white fixed top-0 z-50 border-0 transition-transform duration-300', { '-translate-y-full': isHidden }]"
  >
    <div class="container mx-auto flex items-center justify-between">
      <p class="font-bold text-lg">Notte Bianca Cislago 2025</p>
      <ul class="ml-10 hidden lg:flex items-center gap-6 text-white">
        <li>
          <NuxtLink to="/attivita" class="flex items-center gap-2 font-medium">
            Attività
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/eventi" class="flex items-center gap-2 font-medium">
            Eventi
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isHidden = ref(false)
let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY
  isHidden.value = currentScrollY > lastScrollY && currentScrollY > 50
  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

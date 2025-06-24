<template>
  <footer class="pb-5 p-10 md:pt-10 bg-white">
    <div class="container mx-auto flex flex-col">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <RouterLink to="/" class="font-semibold text-gray-900 mb-4 md:mb-0">
          Notte Bianca Cislago 2025
        </RouterLink>
        <ul class="flex flex-wrap gap-4 mb-4 md:mb-0">
          <li><RouterLink to="/attivita" class="text-gray-700 hover:text-gray-900">Attività</RouterLink></li>
          <li><RouterLink to="/eventi" class="text-gray-700 hover:text-gray-900">Eventi</RouterLink></li>
        </ul>
      </div>
      <p class="text-center text-gray-700 mt-12">
        © 2025 Notte Bianca Cislago by
        <a href="https://www.mondoinformatico.com" target="_blank" class="text-blue-700 hover:underline">
          Mondo Informatico
        </a>.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// nessuna props
</script>

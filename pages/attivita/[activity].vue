<template>
  Pagina Attività {{ nomeAttivita }}
</template>

<script setup lang="ts">
const route = useRoute();

const nomeAttivita = route.params.activity as string;
</script>

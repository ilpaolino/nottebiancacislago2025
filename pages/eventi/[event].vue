<template>
  Pagina Evento {{ nomeEvento }}
</template>

<script setup lang="ts">
const route = useRoute()

const nomeEvento = route.params.event as string;
</script>

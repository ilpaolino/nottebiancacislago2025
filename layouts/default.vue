<template>
  <Navbar />
  <NuxtPage />
  <Footer />
</template>

<script lang="ts" setup>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

defineProps({
  layout: {
    type: String,
    default: 'default',
  },
})
</script>

<style scoped>

</style>

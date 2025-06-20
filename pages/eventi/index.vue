<template>
  <div class="relative min-h-screen w-full bg-[url('/img/cislago-bg.jpeg')] bg-cover bg-no-repeat bg-fixed">
    <div class="absolute inset-0 bg-gray-900/60"></div>
    <div class="relative container mx-auto py-20">
      <h2 class="text-3xl font-semibold text-white text-center mb-12">Eventi della serata</h2>
      <div class="grid gap-10 lg:grid-cols-3">
        <EventCard
          image="/img/events/sfilata.png"
          title="Sfilata"
          description="A cura di “Esempio” abbigliamento: scopri le nuove collezioni estive in passerella, tra luci, musica e stili all’avanguardia."
          location="Via Roma"
          time="21:00 - 23:00"
        />
        <EventCard
          image="/img/events/concerto.png"
          title="Rock Cartoon"
          description="Goditi il live set della band Rock Cartoon, con cover rock d’autore, mentre sorseggi cocktail e birra con le canzoni dei cartoni animati."
          location="Piazza Castelbarco"
          time="20:00 - 01:00"
        />
        <EventCard
          image="/img/events/luna-park.png"
          title="Giostre"
          description="Salta a bordo delle nostre giostre: un divertimento assicurato per tutta la famiglia, dalla ruota panoramica agli autoscontri."
          location="Piazza Toti"
          time="18:00 - 02:00"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import EventCard from '~/components/EventCard.vue';
</script>

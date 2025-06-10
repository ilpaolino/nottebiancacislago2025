<template>
  <section class="container mx-auto px-8 py-20">
    <h6 class="text-base font-semibold text-orange-500 text-center mb-6">Eventi da non perdere</h6>
    <h3 class="text-3xl font-semibold text-blue-gray-900 text-center mb-12">Eventi della serata</h3>

    <div class="grid gap-10 lg:grid-cols-3">
      <!-- Card 1 -->
      <div class="bg-white rounded-2xl overflow-hidden shadow-md">
        <img src="/img/events/sfilata.png" alt="" class="w-full h-48 object-cover"/>
        <div class="p-6">
          <h5 class="text-2xl font-semibold mb-2">Sfilata</h5>
          <p class="text-gray-500 mb-4">
            A cura di “Esempio” abbigliamento:
            scopri le nuove collezioni estive in passerella, tra luci, musica e stili all’avanguardia.
          </p>
          <div class="flex items-center gap-4">
            <img src="/img/icons/tour-pin-tear.svg" alt="avatar" class="w-12 h-12"/>
            <div>
              <h6 class="font-semibold">Via Roma</h6>
              <p class="text-sm text-gray-500">21:00 - 23:00</p>
            </div>
            <a class="ml-auto uppercase text-sm text-blue-600 text-center" href="#">
              APRI<br/>MAPPA
            </a>
          </div>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="bg-white rounded-2xl overflow-hidden shadow-md">
        <img src="/img/events/concerto.png" alt="" class="w-full h-48 object-cover"/>
        <div class="p-6">
          <h5 class="text-2xl font-semibold mb-2">Rock Cartoon</h5>
          <p class="text-gray-500 mb-4">
            Goditi il live set della band Rock Cartoon, con cover rock d’autore,
            mentre sorseggi cocktail e birra con le canzoni dei cartoni animati.
          </p>
          <div class="flex items-center gap-4">
            <img src="/img/icons/tour-pin-tear.svg" alt="avatar" class="w-12 h-12"/>
            <div>
              <h6 class="font-semibold">Piazza Castelbarco</h6>
              <p class="text-sm text-gray-500">20:00 - 01:00</p>
            </div>
            <a class="ml-auto uppercase text-sm text-blue-600 text-center" href="#">
              APRI<br/>MAPPA
            </a>
          </div>
        </div>
      </div>
      <!-- Card 3 -->
      <div class="bg-white rounded-2xl overflow-hidden shadow-md">
        <img src="/img/events/luna-park.png" alt="" class="w-full h-48 object-cover"/>
        <div class="p-6">
          <h5 class="text-2xl font-semibold mb-2">Giostre</h5>
          <p class="text-gray-500 mb-4">
            Salta a bordo delle nostre giostre: un divertimento assicurato per tutta la famiglia,
            dalla ruota panoramica agli autoscontri.
          </p>
          <div class="flex items-center gap-4">
            <img src="/img/icons/tour-pin-tear.svg" alt="avatar" class="w-12 h-12"/>
            <div>
              <h6 class="font-semibold">Piazza Toti</h6>
              <p class="text-sm text-gray-500">18:00 - 02:00</p>
            </div>
            <a class="ml-auto uppercase text-sm text-blue-600 text-center" href="#">
              APRI<br/>MAPPA
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// nessuna props
</script>

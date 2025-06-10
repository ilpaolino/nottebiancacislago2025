<template>
  <section class="container mx-auto flex flex-col items-center px-4 py-10">
    <h6 class="text-base font-semibold text-orange-500 mb-2">Vieni a vivere con noi l’inizio dell’estate...</h6>
    <h3 class="text-3xl font-semibold text-blue-gray-900 text-center mb-3">La nostra Notte Bianca</h3>
    <h6 class="text-base font-semibold text-orange-500 text-center mb-8">
      ...fra luci, colori e tanta voglia di divertirsi!
    </h6>
    <p class="text-xl text-gray-500 text-center lg:max-w-4xl mb-8">
      Organizzata dai commercianti di Cislago,
      la Notte Bianca trasforma le vie del centro in un grande palcoscenico a cielo aperto.
      Ogni zona del paese ospiterà spettacoli unici e punti di interesse:<br />
      dalla musica live ai momenti di intrattenimento per grandi e piccini,
      fino allo shopping serale nei negozi aperti straordinariamente.
    </p>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-white rounded-xl overflow-hidden shadow-md">
        <div class="h-[453px] p-5 bg-gray-900 flex flex-col justify-center items-center text-center">
          <h6 class="text-base font-semibold text-white mb-4">Eventi</h6>
          <h4 class="text-2xl font-semibold text-white mb-2">Spettacoli per tutti!</h4>
          <p class="text-white mb-10 lg:w-8/12">
            Musica live, performance teatrali e show itineranti animeranno le vie del centro:<br />
            scegli la tua zona preferita e lasciati sorprendere.
          </p>
          <button class="text-xs uppercase font-bold py-2 px-4 rounded-lg bg-white text-blue-gray-900 shadow hover:opacity-90">
            scopri tutti gli eventi
          </button>
        </div>
      </div>
      <div class="bg-white rounded-xl overflow-hidden shadow-md">
        <div class="h-[453px] p-5 bg-gray-900 flex flex-col justify-center items-center text-center">
          <h6 class="text-base font-semibold text-white mb-4">Acquisti</h6>
          <h4 class="text-2xl font-semibold text-white mb-2">Shopping by Night!</h4>
          <p class="text-white mb-10 lg:w-8/12">
            I negozi del centro rimarranno aperti fino a tardi con offerte esclusive e vetrine animate:<br />
            porta a casa un ricordo indimenticabile.
          </p>
          <button class="text-xs uppercase font-bold py-2 px-4 rounded-lg bg-white text-blue-gray-900 shadow hover:opacity-90">
            scopri tutte le attività
          </button>
        </div>
      </div>
      <div class="md:col-span-2 bg-white rounded-xl overflow-hidden shadow-md">
        <div class="h-[453px] p-5 bg-gray-900 flex flex-col justify-center items-center text-center">
          <h6 class="text-base font-semibold text-white mb-4">Food & Beverage</h6>
          <h4 class="text-2xl font-semibold text-white mb-2">Sapori sotto le stelle!</h4>
          <p class="text-white mb-10 lg:w-8/12">
            Delizia il palato dai nostri bar e locali, food-truck con degustazioni di vini, birre patatine e salamelle:
            un percorso gustativo per tutti i gusti.
          </p>
          <button class="text-xs uppercase font-bold py-2 px-4 rounded-lg bg-white text-blue-gray-900 shadow hover:opacity-90">
            view details
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// nessuna props
</script>

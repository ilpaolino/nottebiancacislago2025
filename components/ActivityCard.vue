<template>
  <div class="bg-gray-200 rounded-2xl overflow-hidden shadow-md">
    <a v-if="website" :href="website" target="_blank">
      <img :src="`/img/activities/${image}.png`" :alt="`Logo ${title}`" class="w-full h-48 object-contain bg-white">
    </a>
    <img v-else :src="`/img/activities/${image}.png`" :alt="`Logo ${title}`" class="w-full h-48 object-contain bg-white">
    <div class="p-6">
      <h3 class="text-2xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-700 mb-4" v-if="!menu">{{ description }}</p>
      <p class="text-gray-700 mb-4 text-center" v-if="menu">
        <a :href="`/img/activities/menu/${menu}`" target="_blank" class="inline-block px-15 py-3 bg-gray-800 text-white font-semibold text-sm rounded-xl hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 mx-auto text-center">
          Scopri il menù
        </a>
      </p>
      <div class="flex items-center gap-4">
        <img src="/img/icons/tour-pin-tear.svg" alt="location" class="w-12 h-12">
        <div>
          <span class="font-semibold">{{ location }}</span>
          <p class="text-sm text-gray-700">{{ time }}</p>
        </div>
        <a class="ml-auto uppercase text-sm text-indigo-700 text-center" target="_blank" :href="`https://www.google.com/maps/dir//${coordinates.latitude},${coordinates.longitude}/@${coordinates.latitude},${coordinates.longitude},172m/`">
          APRI<br>MAPPA
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  image: String,
  title: String,
  description: String,
  location: String,
  time: String,
  menu: String,
  website: String,
  coordinates: {
    type: Object as PropType<{
      latitude: string;
      longitude: string;
    }>
  }
});

const image = toRef(props, 'image');
const title = toRef(props, 'title');
const description = toRef(props, 'description');
const location = toRef(props, 'location');
const time = toRef(props, 'time');
const coordinates = toRef(props, 'coordinates');
const menu = toRef(props, 'menu');
const website = toRef(props, 'website');
</script>

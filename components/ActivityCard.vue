<template>
  <div class="bg-gray-200 rounded-2xl overflow-hidden shadow-md">
    <img :src="`/img/activities/${image}.png`" :alt="`Logo ${title}`" class="w-full h-48 object-contain bg-white">
    <div class="p-6">
      <h3 class="text-2xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-500 mb-4">{{ description }}</p>
      <div class="flex items-center gap-4">
        <img src="/img/icons/tour-pin-tear.svg" alt="location" class="w-12 h-12">
        <div>
          <h6 class="font-semibold">{{ location }}</h6>
          <p class="text-sm text-gray-500">{{ time }}</p>
        </div>
        <a class="ml-auto uppercase text-sm text-blue-600 text-center" target="_blank" :href="`https://www.google.com/maps/dir//${coordinates.latitude},${coordinates.longitude}/@${coordinates.latitude},${coordinates.longitude},172m/`">
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
</script>

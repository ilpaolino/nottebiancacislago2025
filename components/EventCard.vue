<template>
  <div class="bg-white rounded-2xl overflow-hidden shadow-md">
    <img :src="image" :alt="title" class="w-full h-48 object-cover">
    <div class="p-6">
      <h3 class="text-2xl font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-500 mb-4">{{ description }}</p>
      <div class="flex items-center gap-4">
        <img src="/img/icons/tour-pin-tear.svg" alt="location" class="w-12 h-12">
        <div>
          <span class="font-semibold">{{ location }}</span>
          <p class="text-sm text-gray-500">{{ time }}</p>
        </div>
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
  time: String
});

const image = toRef(props, 'image');
const title = toRef(props, 'title');
const description = toRef(props, 'description');
const location = toRef(props, 'location');
const time = toRef(props, 'time');
</script>

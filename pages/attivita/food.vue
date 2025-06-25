<template>
  <div class="relative min-h-screen w-full bg-[url('/img/cislago-bg.jpeg')] bg-cover bg-no-repeat bg-fixed">
    <div class="absolute inset-0 bg-gray-900/60"></div>
    <div class="relative container mx-auto py-20 px-4 sm:px-6">
      <h2 class="text-3xl font-semibold text-white text-center mb-12">Food & Beverage alla Notte Bianca</h2>

      <div v-if="loading" class="grid gap-10 lg:grid-cols-3" role="presentation">
        <div v-for="i in 6" :key="i" class="animate-pulse rounded-2xl bg-white/50 p-6 h-92"></div>
      </div>

      <div class="grid gap-10 lg:grid-cols-3" role="list">
        <ActivityCard
          v-for="activity in activities"
          :key="activity.id"
          :image="activity.logo_image"
          :title="activity.activity_name"
          :description="activity.event_description"
          :location="activity.address"
          :time="activity.phone"
          :coordinates="activity.coordinates"
          :menu="activity.menu"
          role="listitem"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import useActivities from '~/composables/useActivities';
import ActivityCard from '~/components/ActivityCard.vue';

const activities = ref([]);
const loading = ref(true);
const { getIsFood } = useActivities();

onMounted(() => {
  activities.value = getIsFood.value;
  loading.value = false;
});
</script>

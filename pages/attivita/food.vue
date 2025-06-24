<template>
          <div class="relative min-h-screen w-full bg-[url('/img/cislago-bg.jpeg')] bg-cover bg-no-repeat bg-fixed">
            <div class="absolute inset-0 bg-gray-900/60"></div>
            <div class="relative container mx-auto py-20 px-4 sm:px-6">
              <h2 class="text-3xl font-semibold text-white text-center mb-12">Food & Beverage alla Notte Bianca</h2>
              <div class="grid gap-10 lg:grid-cols-3">
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
                />
              </div>
            </div>
          </div>
        </template>

        <script setup lang="ts">
        import { computed } from 'vue';
        import useActivities from '~/composables/useActivities';
        import ActivityCard from '~/components/ActivityCard.vue';

        const { getIsFood } = useActivities();
        const activities = computed(() => getIsFood.value);
        </script>

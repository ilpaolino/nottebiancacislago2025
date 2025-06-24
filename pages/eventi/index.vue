<template>
            <div class="relative min-h-screen w-full bg-[url('/img/cislago-bg.jpeg')] bg-cover bg-no-repeat bg-fixed">
              <div class="absolute inset-0 bg-gray-900/60"></div>
              <div class="relative container mx-auto py-20 px-4 sm:px-6">
                <h2 class="text-3xl font-semibold text-white text-center mb-12">Eventi della serata</h2>
                <div class="grid gap-10 lg:grid-cols-3">
                  <EventCard
                    v-for="event in events"
                    :key="event.id"
                    :image="event.image"
                    :title="event.title"
                    :description="event.description"
                    :location="event.location"
                    :time="event.time"
                  />
                </div>
              </div>
            </div>
          </template>

          <script setup lang="ts">
          import EventCard from '~/components/EventCard.vue';
          import { useEvents } from '~/composables/useEvents';

          const { allEvents } = useEvents();
          const events = computed(() => allEvents.value);
          </script>

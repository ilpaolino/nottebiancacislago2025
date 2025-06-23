import { ref, computed } from 'vue';
import events from '~/store/events.json';

export function useEvents() {
  const allEvents = ref(events);

  // Funzione per ordinare gli eventi in base all'orario
  const sortedEvents = computed(() => {
    return [...allEvents.value].sort((a, b) => {
      const timeA = a.time.split(' - ')[0]; // Prende l'orario di inizio
      const timeB = b.time.split(' - ')[0];
      return timeA.localeCompare(timeB);
    });
  });

  return {
    allEvents,
    sortedEvents,
  };
}

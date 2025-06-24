import { ref, computed } from 'vue';
import activities from '~/store/activities.json';

export default function useActivities() {
  const allActivities = ref(activities);

  const getAll = computed(() => allActivities.value);

  const getIsFood = computed(() =>
    allActivities.value.filter(activity => activity.isFood).sort(() => Math.random() - 0.5)
  );

  const getWithMenu = computed(() =>
    allActivities.value.filter(activity => activity.menu !== null)
  );

  const getById = (id: string) => {
    return allActivities.value.find(activity => activity.id === id) || null;
  };

  const getAllUnsorted = computed(() => [...allActivities.value].sort(() => Math.random() - 0.5));

  return {
    getAll,
    getIsFood,
    getWithMenu,
    getById,
    getAllUnsorted,
  };
}

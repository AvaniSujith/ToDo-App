import { ref, computed, onMounted } from "vue";

import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);

  const currentFilter = ref("all");

  const filteredTask = computed(() => {
    if (currentFilter.value === "complete") {
      return tasks.value.filter((task) => task.completed);
    } else if (currentFilter.value === "incomplete") {
      return tasks.value.filter((task) => !task.completed);
    }
    return tasks.value;
  });

  const handleFilter = (filter) => (currentFilter.value = filter);

  onMounted(async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      let count = 0;
      data.forEach((task) => {
        if (count < 5) {
          tasks.value.push(task);
          count++;
        }
      });
    } catch (error) {
      console.error("Error fetching", error);
    }
  });

  return {
    tasks,
    currentFilter,
    filteredTask,
    handleFilter,
  };
});

import { ref } from "vue";

import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);

  const getTasks = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      tasks.value = data;
    } catch (error) {
      console.log("Error fetching tasks", error);
    }
  };

  return {
    tasks,
    getTasks,
  };
});

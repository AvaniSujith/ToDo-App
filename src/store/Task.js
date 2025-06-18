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
      tasks.value = data.slice(0, 5);
    } catch (error) {
      console.log("Error fetching tasks", error);
    }
  };

  const addTask = async (title) =>{
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title,
      completed: false,
    };
    tasks.value.unshift(newTask);
  }

  return {
    tasks,
    getTasks,
    addTask
  };

});

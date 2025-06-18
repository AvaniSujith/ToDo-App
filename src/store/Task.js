import { ref } from "vue";

import { defineStore } from "pinia";

import axios from "axios";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);
  const isLoading = ref(false);

  const getTasks = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      tasks.value = response.data.slice(0, 5);
    } catch (error) {
      console.error("Error fetching tasks", error);
    } finally {
      isLoading.value = false;
    }
  };

  const addTask = async (task) => {
    isLoading.value = true;
    try {
      await axios.post("https://jsonplaceholder.typicode.com/todos", task);
      await getTasks();
    } catch (error) {
      console.error("Failed to add task", error);
    } finally {
      isLoading.value = false;
    }
  };

  const deleteTask = async (id) => {
    isLoading.value = true;
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      await getTasks();
    } catch (error) {
      console.error("Error deleting task", error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    tasks,
    getTasks,
    addTask,
    deleteTask,
  };
});

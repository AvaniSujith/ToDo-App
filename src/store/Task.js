import { ref } from "vue";

import { defineStore } from "pinia";

import axios from "axios";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);
  const isLoading = ref(false);

  const getTasks = async () => {
    isLoading.value = true;
    try {
      const response = await axios.get("http://localhost:3000/todos");
      tasks.value = response.data
    } catch (error) {
      console.error("Error fetching tasks", error);
    } finally {
      isLoading.value = false;
    }
  };

  const addTask = async (task) => {
    isLoading.value = true;
    try {
      await axios.post("http://localhost:3000/todos", task);
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
      await axios.delete(`http://localhost:3000/todos/${id}`);
      await getTasks();
    } catch (error) {
      console.error("Error deleting task", error);
    } finally {
      isLoading.value = false;
    }
  };

  const toggleTask = async (id) => {
    const task = tasks.value.find(task => task.id === id)

    if(!task) return

    task.completed = !task.completed;

    try{
      await axios.patch(`http://localhost:3000/todos/${id}`, {
        completed: task.completed
      })
    }catch(error){
      console.error('Error updating task status', error)
    }
  }

  return {
    tasks,
    getTasks,
    addTask,
    deleteTask,
    toggleTask
  };
});

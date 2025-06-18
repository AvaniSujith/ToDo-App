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
      // console.log('Type of ', typeof data);
      // console.log('isArray', Array.isArray(data));
      // console.log('Data length', data?.length)
      // console.log(data)
      tasks.value = data;
      // console.log('tasks.value immediately after seting', tasks.value);
      // console.log('length ', tasks.value?.length)
      // console.log('data given', tasks.value)
    } catch (error) {
      console.log("Error fetching tasks", error);
    }
  };

  return {
    tasks,
    getTasks,
  };
});

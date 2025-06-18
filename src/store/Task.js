import { ref } from "vue";

import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);

  const getTasks = async () => {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = response.json(); 
      tasks.value = data.slice(0, 5)
    }catch(error){
      console.error('Error fetching tasks', error)
    }  
  }

  return {
    tasks,
    getTasks
  }; 

});
<script setup>
import { ref, onMounted, computed } from "vue";
import { useTaskStore } from "@/store/Task";

import TaskList from "@/components/TaskList.vue";
import InputBar from "@/components/InputBar.vue";

const taskStore = useTaskStore();
const searchQuery = ref("");

const searchedTask = computed(() => {
  if (searchQuery.value !== "") {
    return taskStore.tasks.filter((task) =>
      task.title
        .toLowerCase()
        .trim()
        .includes(searchQuery.value.toLowerCase().trim())
    );
  }
  return taskStore.tasks;
});

const handleUpdateTask = (id) => {
  taskStore.updateTask(id);
};

const handleDeleteTask = async (id) => {
  if (confirm("Are you sure to delete the task?")) {
    await taskStore.deleteTask(id);
  }
};

onMounted(async () => {
  await taskStore.getTasks();
});
</script>

<template>
  <input-bar placeholder="Search..." v-model="searchQuery" />
  <task-list
    :tasks="searchedTask"
    @updateTask="handleUpdateTask"
    @deleteTask="handleDeleteTask"
  />
</template>

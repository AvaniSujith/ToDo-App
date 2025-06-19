<script setup>
import { useTaskStore } from "@/store/Task";

import { onMounted } from "vue";

import TaskList from "@/components/TaskList.vue";

const taskStore = useTaskStore();

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
  <task-list
    :tasks="taskStore.tasks"
    @updateTask="handleUpdateTask"
    @click="handleDeleteTask"
  />
</template>

<style></style>

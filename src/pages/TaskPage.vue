<script setup>
import { onMounted } from "vue";
import { useTaskStore } from "@/store/Task";

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
    @deleteTask="handleDeleteTask"
  />
</template>

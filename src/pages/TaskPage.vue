<script setup>
import { ref, onMounted, computed } from "vue";

import { RouterLink } from "vue-router";

import { useTaskStore } from "@/store/Task";

import TaskList from "@/components/TaskList.vue";
import InputBar from "@/components/InputBar.vue";
import EmptyTask from "@/components/EmptyTask.vue";

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
  <div class="page-container" v-if="!taskStore.isLoading">
    <nav class="back-button">
      <router-link to="/" class="nav-link"> Back to Home </router-link>
    </nav>
    <header>
      <div class="page-title">
        <h2>All Tasks</h2>
      </div>
      <input-bar placeholder="Search..." v-model="searchQuery" />
    </header>
    <section class="task-list-container">
      <div class="task-container" v-if="searchedTask.length">
        <task-list
          :tasks="searchedTask"
          @updateTask="handleUpdateTask"
          @deleteTask="handleDeleteTask"
        />
      </div>
      <div class="empty-container" v-else>
        <empty-task />
      </div>
    </section>
  </div>
  <div class="loading-container" v-else>Loading data....</div>
</template>

<style>
.back-button {
  background: #eee;
  border-radius: 8px;
  width: max-content;
  padding: 6px;
  margin-bottom: 15px;
  font-weight: 700;
}

h2 {
  font-size: 32px;
}

.page-title {
  text-align: center;
}

.task-container{
  max-height: 436px;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
}
</style>
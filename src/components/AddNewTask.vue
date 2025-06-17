<script setup>
import { ref } from "vue";

import InputBar from "./InputBar.vue";

const taskTitle = ref("");

const handleNewTask = (value) => (taskTitle.value = value);
</script>

<template>
  <div class="add-task-container">
    <input-bar
      :model-value="taskTitle"
      placeholder="New todo"
    />
    <button class="add-task-btn"  @click="handleNewTask">Add</button>
    <p>{{ taskTitle }}</p>
  </div>
</template>

<style>
.add-task-container {
  display: flex;
  align-items: center;
  gap: 3px;
  width: 100%;
}
.add-task-btn {
  background-color: #005cc8;
  padding: 8px;
  border-radius: 8px;
  color: #fff;
  font-size: 15px;
}
</style>

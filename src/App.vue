<script setup>
import { ref } from "vue";

import InputBar from "./components/InputBar.vue";

import TaskList from "./components/TaskList.vue";

import AddNewTask from "./components/AddNewTask.vue";

const searchQuery = ref("");

const handleSearchQuery = (value) => (searchQuery.value = value);
</script>


<template>
  <div id="app" class="outer-container">
    <header>
      <img src="/notepad.png" />
      <h2>ToDo List</h2>
    </header>
    <div class="container">
      <task-list />
      <input-bar
        :model-value="searchQuery"
        placeholder="type something..."
        @update:model-value="handleSearchQuery"
      />
      <p>{{ searchQuery }}</p>
    </div>
    <add-new-task />
  </div>
</template>

<style>
.outer-container {
  background-color: #fff;
  height: 650px;
  max-width: 30%;
  width: 100%;
  margin: auto;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
}

header {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
}

img {
  height: 45px;
  width: auto;
}

h2 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 40px;
  line-height: 45px;
  margin: 0;
  padding-top: 5px;
}
</style>

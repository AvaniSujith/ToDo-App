<script setup>
import { ref, computed, onMounted } from "vue";

import { useTaskStore } from "@/store/Task";

import DropDown from "@/components/DropDown.vue";

import AddTask from "@/components/AddTask.vue";

import TaskList from "@/components/TaskList.vue";

const taskStore = useTaskStore();

const currentFilter = ref("all");

const filteredTask = computed(() => {
  if (currentFilter.value === "complete") {
    return taskStore.tasks.filter((task) => task.completed);
  } else if (currentFilter.value === "incomplete") {
    return taskStore.tasks.filter((task) => !task.completed);
  }
  return taskStore.tasks;
});

 const totalTask = computed(() => filteredTask.reverse().slice(0, 5))

const handleFilter = (filter) => {
  currentFilter.value = filter;
};

const handleUpdateTask = (id) => {
  taskStore.updateTask(id);
};

const handleDeleteTask = async (id) => {
  if (confirm("are you sure to delete the task?")) {
    await taskStore.deleteTask(id);
  }
};

onMounted(async () => {
  await taskStore.getTasks();
});
</script>

<template>
  <header>
    <div class="heading">
      <img src="/notepad.png" />
      <h2>ToDo List</h2>
    </div>
    <div class="input-container">
      <drop-down @select="handleFilter" />
      <add-task />
    </div>
  </header>

  <div class="task-container" v-if="taskStore.tasks && taskStore.tasks.length">
    <div class="count-details">
      <div class="view-label">
        <p>{{ filteredTask.length }} / {{ taskStore.tasks.length }} tasks</p>
      </div>
      <div class="view-btn">
        <button class="view-all">View All</button>
      </div>
    </div>

    <task-list
      :tasks="totalTask"
      @updateTask="handleUpdateTask"
      @deleteTask="handleDeleteTask"
    />
  </div>
</template>

<style>
@font-face {
  font-family: "Arctik";
  src: url(/src/assets/Arctik-FontZillion/Fonts/atrian\ 3.ttf);
}

.tasks {
  padding-left: 0px;
}

button {
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.task-label {
  font-weight: 500;
  font-size: 18px;
  text-wrap: nowrap;
  font-family: "Arctik";
}

.del-btn {
  padding: 3px 7px;
  line-height: 20px;
  font-family: "Arctik";

  color: red;
  font-weight: 900;
}

.view-all {
  padding: 5px 8px;
  background-color: #eee;
  font-size: 15px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 700;
}

.count-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container {
  width: 100%;
}

.heading {
  display: flex;
  align-items: center;
  gap: 6px;
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

header,
.task-container {
  width: 100%;
}
</style>

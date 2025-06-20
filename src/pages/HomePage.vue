<script setup>
import { ref, computed, onMounted } from "vue";
import { RouterLink } from "vue-router";

import { useTaskStore } from "@/store/Task";

import DropDown from "@/components/DropDown.vue";
import AddTask from "@/components/AddTask.vue";
import TaskList from "@/components/TaskList.vue";
import InputBar from "@/components/InputBar.vue";
import EmptyTask from "@/components/EmptyTask.vue";

const taskStore = useTaskStore();

const currentFilter = ref("all");
const searchQuery = ref("");

const filteredTask = computed(() => {
  const tasks = taskStore.tasks;
  const currentFilterValue = currentFilter.value;
  const searchQueryValue = searchQuery.value.trim().toLowerCase();

  let result = tasks;

  switch (currentFilterValue) {
    case "complete":
      result = tasks.filter((task) => task.completed);
      break;
    case "incomplete":
      result = tasks.filter((task) => !task.completed);
      break;
  }

  if (searchQueryValue !== "") {
    result = result.filter((task) =>
      task.title.trim().toLowerCase().includes(searchQueryValue)
    );
  }

  return result;
});

const recentTasks = computed(() =>
  [...filteredTask.value].reverse().slice(0, 5)
);

const handleFilter = (filter) => {
  currentFilter.value = filter;
};

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
    <header>
      <div class="heading">
        <img src="/notepad.png" />
        <h2>ToDo List</h2>
      </div>
      <div class="input-container">
        <input-bar placeholder="Search..." v-model="searchQuery" />
        <drop-down @select="handleFilter" />
        <add-task />
      </div>
    </header>

    <div class="recent-task-container" v-if="recentTasks.length">
      <div class="task-container" v-if="recentTasks.length">
        <div class="count-details">
          <div class="view-label">
            <p>{{ recentTasks.length }} / {{ taskStore.tasks.length }} tasks</p>
          </div>
          <div class="view-btn">
            <button class="view-all">
              <router-link to="/tasksPage" class="nav-link">
                View All</router-link
              >
            </button>
          </div>
        </div>

        <task-list
          :tasks="recentTasks"
          @updateTask="handleUpdateTask"
          @deleteTask="handleDeleteTask"
        />
      </div>
    </div>
    <div class="empty-container" v-else>
      <empty-task />
    </div>
  </div>
  <div class="loading-container" v-else>Loading data..</div>
</template>

<style>
.nav-link {
  text-decoration: none;
  color: #000;
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
}

.del-btn {
  padding: 3px 7px;
  line-height: 20px;
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
.task-container,
.container,
.recent-task-container,
.page-container {
  width: 100%;
}
</style>

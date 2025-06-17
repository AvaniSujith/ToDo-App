<script setup>
import { ref, computed, onMounted } from "vue";

import DropDown from "./DropDown.vue";

const tasks = ref([]);
const currentFilter = ref("all");

const filteredTask = computed(() => {
  if (currentFilter.value === "complete") {
    return tasks.value.filter((task) => task.completed);
  } else if (currentFilter.value === "incomplete") {
    return tasks.value.filter((task) => !task.completed);
  }
  return tasks.value;
});

const handleFilter = (filter) => {
  currentFilter.value = filter;
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    let count = 0;
    data.forEach((task) => {
      if (count < 5) {
        tasks.value.push(task);
        count++;
      }
    });
  } catch (error) {
    console.error("Error fetching", error);
  }
});
</script>

<template>
  <drop-down @select="handleFilter" />
  <div class="task-container" v-if="tasks">
    <div class="count-details">
      <div class="view-label">
        <p>{{ filteredTask.length }} / {{ tasks.length }} tasks</p>
      </div>
      <div class="view-btn">
        <button class="view-all">View All</button>
      </div>
    </div>

    <ul class="tasks">
      <li class="task-item" v-for="task in filteredTask" :key="task.id">
        <div class="task-done">
          <input type="checkbox" :checked="task.completed" />
        </div>
        <div class="task-label">
          <p style="color: black">{{ task.title }}</p>
        </div>
        <div class="task-delete">
          <button class="del-btn">X</button>
        </div>
      </li>
    </ul>
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
</style>

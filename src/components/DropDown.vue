<script setup>
import { ref, onMounted, computed } from "vue";

const tasks = ref([]);
const filterType = ref("all");

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

const filteredTask = computed(() => {
  if (filterType.value === "complete") {
    return tasks.value.filter((task) => task.completed);
  } else if (filterType.value === "incomplete") {
    return tasks.value.filter((task) => !task.completed);
  }
  return tasks.value;
});
</script>

<template>
  <div class="dropdown-container">
    <select v-model="filterType" name="category" class="task-category">
      <option value="all">All</option>
      <option value="complete">Completed</option>
      <option value="incomplete">Incomplete</option>
    </select>
  </div>

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
.dropdown-container {
  width: 100%;
}

.task-category {
  border: 2px solid #eee;
  padding: 8px;
  border-radius: 8px;
  margin: 10px 0;
  background: transparent;
  width: 100%;
  font-size: 18px;
}

.tasks {
  padding-left: 0px;
}

button {
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
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

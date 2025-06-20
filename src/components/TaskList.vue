<script setup>

defineProps({
  tasks: Array
})

const emit = defineEmits(["updateTask", "deleteTask"]);

const handleUpdate = (id) => {
  emit("updateTask", id);
};

const handleDelete = (id) => {
  emit("deleteTask", id);
};
</script>

<template>
  <ul class="tasks">
    <li class="task-item" v-for="task in tasks" :key="task.id">
      <div class="task-done">
        <input
          type="checkbox"
          :checked="task.completed"
          @change="handleUpdate(task.id)"
        />
      </div>
      <div class="task-label">
        <p :class="task.completed ? 'completed' : 'not-completed'">
          {{ task.title }}
        </p>
      </div>
      <div class="task-delete">
        <button class="del-btn" @click="handleDelete(task.id)">X</button>
      </div>
    </li>
  </ul>
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

.completed {
  text-decoration: line-through;
}
</style>

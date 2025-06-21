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
.tasks {
  padding-left: 0px;
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

.completed {
  text-decoration: line-through;
}
</style>

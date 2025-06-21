<script setup>
import { ref } from "vue";

const selectedValue = ref("all");

const emit = defineEmits(["select"]);

const handleChange = () => {
  emit("select", selectedValue.value);
};
</script>

<template>
  <div class="dropdown-container">
    <select
      v-model="selectedValue"
      name="category"
      class="task-category"
      @change="handleChange"
    >
      <option value="all">All</option>
      <option value="complete">Completed</option>
      <option value="incomplete">Incomplete</option>
    </select>
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

select {
  cursor: pointer;
}
</style>

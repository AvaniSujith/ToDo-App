<script setup>
import { ref } from "vue";

const filterSelected = ref("all");

const emit = defineEmits(['filterType']);

const handleFilterChange = () => {
  const filterChoosen = filterSelected.value
  emit('filterType', filterChoosen);
}

</script>

<template>
  <div class="dropdown-container">
    <select v-model="filterSelected" name="category" class="task-category" @change="handleFilterChange">
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
</style>

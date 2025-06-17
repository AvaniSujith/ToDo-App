<script setup>
import InputBar from './InputBar.vue';
</script>

<template>
    <div class="add-task-container">
          <input-bar :model-value="taskAdded" placeholder="New todo"/>
        <button class="add-task-btn">Add</button>
    </div>
</template>

<style>
.add-task-container{
    display: flex;
    align-items: center;
    gap: 3px;
    width: 100%;
}
.add-task-btn{
 background-color: #005CC8;
  padding: 8px;
  border-radius: 8px;
  color: #fff;
  font-size: 15px;
}
</style>
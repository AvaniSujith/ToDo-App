<script setup>
import { ref } from 'vue';

import { useTaskStore } from '@/store/Task';

import InputBar from './InputBar.vue';

const taskStore = useTaskStore();
const taskTitle = ref('')

const handleAddTask = () => {
    const title = taskTitle.value.trim();
    if(title){
        taskStore.addTask(title);
        taskTitle.value = '';
    }
}
</script>

<template>
    <div class="add-task-container">
         <input-bar placeholder="New Todo" v-model="taskTitle" />
        <button class="add-task" @click="handleAddTask">
            Add
        </button>
    </div>
</template>

<style>
.add-task-container{
    display: flex;
    gap: 5px;
    width: 100%;
}
.add-task{
    background-color: #317ed6;
    padding: 8px;
    border-radius: 6px;
    margin: 10px 0;
    color: #fff;
}
</style>
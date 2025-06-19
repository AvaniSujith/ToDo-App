<script>
import { useTaskStore } from '@/store/Task';

import { onMounted } from 'vue';

import TaskList from '@/components/TaskList.vue';


const taskStore = useTaskStore();

onMounted(async () => {
    await taskStore.getTasks();
})
</script>

<template>
<task-list :tasks="taskStore.tasks" @updateTask=""/>
</template>

<style>
</style>
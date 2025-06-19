<script setup>
import { ref } from "vue";

import InputBar from "./InputBar.vue";

const searchQuery = ref("");

const handleSearchQuery = (value) => {
  searchQuery.value = value;
};
</script>

<template>
  <input-bar
    v-model="searchQuery"
    placeholder="Search..."
    @keyup.enter="handleSearchQuery"
  />
  <p>{{ searchQuery }}</p>
</template>

<style>
</style>

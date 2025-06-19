<script setup>
// import HomePage from "./pages/HomePage.vue";

// import TaskPage from "./pages/TaskPage.vue";
</script>

<template>
  <div id="app" class="outer-container">
    <!-- <home-page /> -->
    <!-- <task-page /> -->
     <router-view></router-view>
  </div>
</template>

<style>
.outer-container {
  background-color: #fff;
  height: 650px;
  max-width: 30%;
  width: 100%;
  margin: auto;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

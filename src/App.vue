<script setup>
import InputBar from './components/InputBar.vue';
import SearchBar from './components/SearchBar.vue';
</script>

<template>
  <div id="app">
    <div class="outer-container">
    <header>
      <img src="/public/notepad.png">
      <h2>ToDo List</h2>
    </header>

    <div class="search-bar">
      <InputBar />
      <SearchBar />
    </div>

    </div>
  </div>
</template>

<style>
.outer-container{
  background-color: #fff;
  height: 650px;
  max-width: 60%;
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

header{
  display: flex;
  align-items: center;
  gap: 6px;
}

img{
  height: 45px;
  width: auto;
}

h2{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 40px;
  line-height: 45px;
  margin: 0;
  padding-top: 5px;
}
</style>
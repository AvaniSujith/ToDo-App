<template>
  <div class="outer-container">
     <router-view></router-view>
  </div>
</template>

<style>
.outer-container {
  background-color: #fff;
  max-height: 650px;
  height: 100%;
  max-width: 30%;
  width: 100%;
  margin: auto;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
  padding: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script setup>
const props = defineProps(["value", "placeholder"]);

const emit = defineEmits(["input"]);

const handleInput = (event) => {
  const inputValue = event.target.value;

  emit("input", inputValue);
};
</script>

<template>
  <input
    class="input-bar"
    type="text"
    :placeholder="placeholder"
    :value="value"
    @input="handleInput"
  />
</template>

<style>
.input-bar {
  border: 2px solid #eee;
  padding: 8px;
  border-radius: 8px;
  margin: 10px 0px;
}
</style>

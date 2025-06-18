<script setup>
const props = defineProps(["modelValue", "placeholder"]);

const emit = defineEmits(["update:modelValue"]);

const handleInput = (event) => {
  const inputValue = event.target.value;
  emit("update:modelValue", inputValue);
};
</script>

<template>
  <input
    class="input-bar"
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @input="handleInput"
  />
</template>

<style>
.input-bar {
  border: 2px solid #eee;
  padding: 8px;
  border-radius: 8px;
  font-size: 18px;
  margin: 10px 0px;
  width: 100%;
}
</style>
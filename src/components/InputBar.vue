<script setup>

    const props = defineProps(['value']);
    const emit = defineEmits(['input']);

    const handleInput = () => {
        emit('update:moduleValue', $event.target.value)
    }

</script>

<template>
    <input type="text" :placeholder="placeholder" :value="value" @input="handleInput" />
</template>

<style>

input{
    border: 1px solid #eee;
    padding: 8px;
    border-radius: 8px;
    margin: 10px 0px;
}

</style>
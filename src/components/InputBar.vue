<script setup>

    const props = defineProps([
        'value',
        'placeholder'
    ]);
    
    const emit = defineEmits(['input']);

    const handleInput = (event) => {
        emit('update:value', event.target.value)
    }

</script>

<template>
    <input type="text" :placeholder="placeholder" :value="value" @input="handleInput" />
</template>

<style>

input{
    border: 2px solid #eee;
    padding: 8px;
    border-radius: 8px;
    margin: 10px 0px;
}

</style>
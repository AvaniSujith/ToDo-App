<script setup>
    import{ defineProps, defineEmits } from 'vue';

    const props = defineProps(['modelValue']);
    const emit = defineEmits(['update:modelValue']);

</script>

<template>
    <input type="text" :value="props.modelValue" @input="emit('update:moduleValue', $event.target.value)" />
</template>

<style>

input{
    border: 1px solid #eee;
    padding: 8px;
    border-radius: 8px;
    margin: 10px 0px;
}

</style>
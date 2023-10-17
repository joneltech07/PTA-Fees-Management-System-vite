<script setup>
import { ref } from 'vue'
const props = defineProps({
    id: Number,
    name: String,
    amount: Number,
    isChecked: Boolean
})

const isChecked = ref(props.isChecked)
const emit = defineEmits(['AOP'])
emit('AOP', {isChecked: isChecked, name: props.name, amount: props.amount})
</script>

<template>
    <span>
        <input 
            class="form-check-input" 
            type="checkbox"
            v-model="isChecked"
            @click="{
                isChecked = !isChecked
                $emit('AOP', {isChecked: isChecked, name: name, amount: amount});
            }"
            >
        {{ name }}
    </span>
    <span>{{ amount }}</span>
</template>
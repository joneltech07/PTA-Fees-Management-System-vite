<script setup>
import { ref, defineEmits } from 'vue'
const props = defineProps({
    id: Number,
    name: String,
    amount: Number,
    isChecked: Boolean
})

const isChecked = ref(props.isChecked)
const emit = defineEmits(['AOP'])
// emit('AOP', {id: props.id, isChecked: isChecked})
</script>

<template>
    <span>
        <input 
            class="form-check-input" 
            type="checkbox"
            v-model="isChecked"
            @click="{
                isChecked = !isChecked
                $emit('AOP', {id: id, isChecked: isChecked});
            }"
            >
        {{ name }}
    </span>
    <span>{{ amount }}</span>
</template>
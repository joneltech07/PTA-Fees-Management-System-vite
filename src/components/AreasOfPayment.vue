<script setup>
import { ref } from 'vue'
import { store } from '../store/index'
const props = defineProps({
    id: Number,
    name: String,
    amount: Number
})

const emit = defineEmits(['AOP'])
// emit('AOP', {id: props.isChecked, isChecked: props.isChecked, amount: props.amount, name: props.name})

const isChecked = ref(false)
</script>

<template>
    <span>
        <input 
            class="form-check-input" 
            type="checkbox"
            :value="id"
            v-model="store.paymentDetails.fees"
            @click="{
                isChecked = !isChecked;
                $emit('clicked', {isChecked, id});
            }"
            >
        {{ name }}
    </span>
    <span>₱ {{ amount }}</span>
</template>
<script setup>
import { ref, watch } from 'vue';
import Discount from '../data/discount.json'
import AddDiscountModal from '../modal/AddDiscountModal.vue';

const isOpen = ref(false)
const newDiscount = ref(String)

const discount = ref(Discount)

let id = 0
const addDiscount = () => {
    discount.value.push({ 
        id: id++, 
        text: newDiscount.value,
        checked: false
    })
    console.log(newDiscount.value)
    //newDiscount.value = ''
}

watch(newDiscount, addDiscount)
</script>

<template>
    <div class="container">
        <button class="btn btn-primary d-flex align-items-center justify-content-center mb-3"
            @click="isOpen = true"
        >
            Add Discount
            <span 
                title="add"
                class="material-icons" 
            >add</span>
        </button>     
        <p class="fs-5 fw-bold">Discounts</p>
        <p>Set The Discounts To Be Made Available For The School Year</p>

        <div class="container">
            <div v-for="d in discount">
                <div>
                    <input type="checkbox" class="form-check-input" v-model="d.checked">
                    <span>{{ d.text }}</span>
                </div>
            </div>
        </div>
    </div>

    <Teleport to="body">
        <div v-if="isOpen" class="modal">
            <AddDiscountModal
                @close="isOpen = false"
                @response="(data) => newDiscount = data"
            />
        </div>
    </Teleport>
</template>

<style scoped>
.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: .3em;

    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
}
</style>
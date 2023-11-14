<script setup>
import { ref, watch } from 'vue';
import AddDiscountModal from '../modal/AddDiscountModal.vue';
import axios from 'redaxios'
import { store } from '../store/index'

const isOpen = ref(false)

const discount = ref(Object)
const discountLoad = () => {
    const page = "http://127.0.0.1:8000/api/discount"
    axios.get(page)
    .then(
        ({data})=>{
            discount.value = data;
        }
    );
}

discountLoad()

</script>

<template>
    <div class="container">
        {{ store.sy_fees.discount }}
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
                    <input type="checkbox" 
                        class="form-check-input me-1"
                        :value="d.id"
                        v-model="store.sy_fees.discount">
                    <span>{{ d.discount_type }}</span>
                </div>
            </div>
        </div>
    </div>

    <Teleport to="body">
        <div v-if="isOpen" class="modal">
            <AddDiscountModal
                @close="{
                    isOpen = false;
                    discountLoad()
                }"
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
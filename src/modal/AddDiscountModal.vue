<script setup>
import { ref, defineEmits } from 'vue'
import axios from 'redaxios';
import { store } from '../store/index'

const emit = defineEmits(['close'])

const discount = ref({discount_type: ''})
const addDiscount = () => {
    axios.post("http://127.0.0.1:8000/api/discount", discount.value)
    .then((response) => {
        alert("Inserted!!!")
        store.putSYId(response.data.id)
        emit('close')
    })
    .catch((error) => {
        alert(`Error while posting data:${error}`);
    });
}
</script>

<template>
    <div class="modal" tabindex="-1">
        <div class="modal-dialog w-100">
            <div class="modal-content w-100">
                <div class="modal-header">
                    <h5 class="modal-title">
                        Add
                        <span class="material-icons">add</span> 
                    </h5>
                    <button 
                        type="button" 
                        class="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close"
                        @click="$emit('close')"
                    ></button>
                </div>
                <div class="modal-body d-flex flex-column align-items-center justify-content-center">
                    <input 
                        class="form-control w-75 border-dark mb-3" 
                        placeholder="Discount name"
                        v-model="discount.discount_type"
                    >
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button 
                        type="button" 
                        class="btn btn-primary"
                        @click="addDiscount"
                    >
                        Add Discount
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal {
    background-color: rgba(0, 0, 0, 0.559);
    box-shadow: 3px 2px 20px;
}
</style>
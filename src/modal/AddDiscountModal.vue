<script setup>
import { ref, defineEmits } from 'vue'

const emit = defineEmits(['response', 'close'])

const discount = ref('')

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
                        v-model="discount"
                    >
                    <input 
                        class="form-control w-75 border-dark mb-3" 
                        placeholder="Percentage"
                    >
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button 
                        type="button" 
                        class="btn btn-primary"
                        @click="{$emit('response', discount); $emit('close')}"
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
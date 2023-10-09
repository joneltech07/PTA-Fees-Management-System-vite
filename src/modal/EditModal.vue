<script setup>
import {defineProps, defineEmits} from 'vue'

defineProps({
    title: String,
    msg: Number
})

const emit = defineEmits(["close"])

</script>

<template>
    <div class="modal" tabindex="-1">
        <div class="modal-dialog w-100">
            <div class="modal-content w-100">
                <div class="modal-header">
                    <h5 class="modal-title">
                        Edit
                        <span class="material-icons">edit</span> 
                        '{{ title }}'
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
                        placeholder="Breakdown" 
                        class="form-control w-75 border-dark mb-3" 
                        :value="title"
                    >
                    <input 
                        placeholder="Amount" 
                        class="form-control w-75 border-dark" 
                        :value="msg">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Delete</button>
                    <button 
                        type="button" 
                        class="btn btn-primary"
                        @click=""
                    >
                        Save changes
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
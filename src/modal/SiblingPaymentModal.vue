<script setup>
import { ref, defineEmits, defineProps } from 'vue'
import CheckAOPView from '../views/CheckAOPView.vue'
import { filePrescription } from 'fontawesome';

const emit = defineEmits(['response', 'close'])

defineProps({
    firstN: String,
    middleN: String,
    lastN: String,
})
</script>

<template>
    <div class="modal" tabindex="-1">
        <div class="modal-dialog w-100">
            <div class="modal-content w-100">
                <div class="modal-header">
                    <h5 class="modal-title">
                        {{ lastN }}, {{ firstN }} {{ middleN.charAt(0) }}.
                    </h5>
                    <button 
                        type="button" 
                        class="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close"
                        @click="$emit('close')"
                    ></button>
                </div>
                <div class="modal-body d-flex flex-column align-items-center">
                    <CheckAOPView />
                </div>
                <div class="modal-footer">
                    <button @click="$emit('close')" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button 
                        type="button" 
                        class="btn btn-primary"
                        @click="$emit('close')"
                    >
                        Save Changes
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

.modal-body {
    height: 60vh;
    overflow-x: auto;
}
</style>
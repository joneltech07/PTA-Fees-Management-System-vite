<script setup>

</script>

<template>
<div class="modal" tabindex="-1">
        <div class="modal-dialog w-100">
            <div class="modal-content w-100">
                <div class="modal-header">
                    Payment
                    <button 
                        type="button" 
                        class="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close"
                        @click="$emit('close')"
                    ></button>
                </div>
                <div class="modal-body d-flex flex-column">
                    <div class="overall-total">
                        <h5 class=" text-end">Total: ₱0.00</h5>
                    </div>
                    <div class="name">
                        Last Name, First Name M.
                    </div>
                    <div class="area-of-payment">
                        <div class="row">
                            <div class="col text-end"><strong>Total: ₱0.00</strong></div>
                        </div>
                        <div class="row">
                            <div class="col">Fee 1</div>
                            <div class="col text-end">₱0.00</div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button @click="$emit('close')" type="button" class="btn" data-bs-dismiss="modal">Cancel</button>
                    <button 
                        type="button" 
                        class="btn btn-primary w-25"
                        @click="$emit('close')"
                    >
                        Pay
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
    overflow-y: auto;
}
</style>
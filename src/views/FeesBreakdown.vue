<script setup>
import { ref, computed, watch } from 'vue';
import EditModal from '../modal/EditModal.vue';
import AddModal from "../modal/AddModal.vue";
import Fees from '../data/fees.json'


const isOpen = ref([{edit: false, add: false}])                     // for close and open modals
const selected = ref({id: Number, text: String, amount: Number, checked: Boolean})                                             // selected table row (used for editing)
const newBreakdown = ref([{breakdown: String, amount: Number}])     // for adding new breakdown

// temporary data
const breakdown = ref(Fees)

// opening and passing data to edit modal
const passData = (data) => {
    //if (data.checked) 
    isOpen.value.edit = true 
    selected.value = data
}


const amount = ref(0)                                       // for storing total amount of all fees selected
// computing total sum of all fees
const total = () => {
    let value = 0
    // add only the checked one
    const filtered = computed(() => {
        return breakdown.value.filter((t) => t.checked)
    })
    // adding all filtered amount
    for (let num=0; num < filtered.value.length; num++) {
        value += filtered.value[num].amount
    }
    amount.value = value
}


total()                                             // calling function

watch(breakdown.value, total)                       // track changes

// Add breakdown / fee
const getLastFee = computed(() => {
    return Fees.slice(-1)[0]
})
const addBreakdown = () => {
    breakdown.value.push({ 
        id: getLastFee.value.id+1,
        text: newBreakdown.value[0].breakdown, 
        amount: parseInt(newBreakdown.value[0].amount), 
        checked: false
    })
    newBreakdown.value[0].breakdown = ''
    newBreakdown.value[0].amount = 0
}

watch(newBreakdown, addBreakdown)

</script>

<template>
    <div class="container" id="container">
        <div class="add-breakdown float-end">
            <button class="btn btn-primary d-flex align-items-center justify-content-center mb-3"
                @click="isOpen.add = true"
            >
                Add Breakdown
                <span 
                    title="add"
                    class="material-icons" 
                >add</span>
            </button>            
        </div>
        <table class="table table-bordered table-hover">
            <thead class="table-dark">
                <tr>
                    <th class="w-100">Breakdown</th>
                    <th>Amount</th>
                    <th></th>
                </tr>
                
            </thead>
            <tbody>
                <tr v-for="(b, index) in breakdown" 
                    :key="index"
                >
                    <td 
                        @click="b.checked = !b.checked"
                    >
                        <input 
                            class="form-check-input me-2"
                            type="checkbox" 
                            v-model="b.checked"
                        >
                        <span :class="{unselected: !b.checked}">{{ b.text }}</span>
                    </td>
                    <td @click="b.checked = !b.checked">
                        <span :class="{unselected: !b.checked}">{{ b.amount }}</span>
                    </td>
                    <td @click="passData(b)">
                        <span 
                            title="edit"
                            class="material-icons" >edit</span>
                    </td>
                </tr>
                <tr>
                    <td><strong>Total</strong></td>
                    <td colspan="2"><strong>{{ amount }}</strong></td>
                </tr>
            </tbody>
        </table>

    </div>
    <Teleport to="body">
        <div v-if="isOpen.edit" class="modal">
            <EditModal
                @close="isOpen.edit = false"
                :title="selected.text"
                :msg="selected.amount"
                />
        </div>
    </Teleport>

    <Teleport to="body">
        <div v-if="isOpen.add" class="modal">
            <AddModal
                @close="isOpen.add = false"
                @response="(data) => newBreakdown = data"
            />
        </div>
    </Teleport>
    
</template>

<style scoped>
.material-icons {
    color:#800000
}

.deactivate {
    color: grey;
}
.form-check-input:checked {
    background-color: #800000;
    border: none;
}

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

.unselected {
    font-style: italic;
    color: gray;
    width: fit-content;
    background: none;
}

table, tbody, tr:hover {
    cursor: pointer;
}

</style>
<script setup>
import {useRoute, useRouter} from "vue-router"
import { computed, ref, onBeforeMount, watch, defineEmits } from 'vue'
import students from "../data/students.json"
import Fees from '@/data/fees.json'
import AreasOfPayment from "@/components/AreasOfPayment.vue";

const emit = defineEmits(['data'])

const route = useRoute()
const router = useRouter()

// getting lrn from route parameter
const {lrn} = route.params      

// get the student full info
const stud = ref(null)
onBeforeMount(() => {
    stud.value = students.find(c => c.LRN === lrn)
})


// get the active fees
const fees = computed(() => {
    return Fees.filter((f) => f.checked)
})

// total payed fees
const total = ref(0)

// selected fees
const selectedFees = ref([{ fee_name: '', fee_amount: 0 }])
const paid_fees = (fee) => {
    selectedFees.value = selectedFees.value.filter(data => data.fee_name !== '')
    if (fee.isChecked) {
        total.value += fee.amount
        selectedFees.value.push({
            fee_name: fee.name,
            fee_amount: fee.amount
        })
        return
    }
    total.value -= fee.amount
    selectedFees.value = selectedFees.value.filter(data => data.fee_name !== fee.name)
}

// pass to parent view
emit('data', {selectedFees: selectedFees.value, total_fee: total.value})
watch(total, () => {
    emit('data', {selectedFees: selectedFees.value, total_fee: total.value})
})

</script>

<template>
    <!-- Select or unselect fees to be payed -->
    <div class="total">
        Total: {{ total }}
    </div>
    <br>
    <div class="container-fluid">
        <div v-for="f in fees" 
            :key="f.id" 
            class="card">
            <AreasOfPayment 
                :id="f.id"
                :name="f.text"
                :amount="f.amount"
                :is-checked="f.checked"
                @AOP="(data) => paid_fees(data)"
            />
        </div>
    </div>
</template>

<style scoped>

.card {
    width: 70%;
    margin: 20px;
    padding: 10px;
    border: none;

    display: flex;
    flex-direction: row;    
    align-items: center;
    justify-content: space-between;

    box-shadow: none;
    border-bottom: 1px solid rgba(150, 150, 150, 0.774);
    border-radius: 0;
}

.form-check-input:hover {
    cursor: pointer;
}

.container-fluid {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.total {
    position: fixed;
    z-index: 1;
    background-color: white;
}
</style>
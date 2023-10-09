<script setup>
import {useRoute, useRouter} from "vue-router"
import { computed, ref, onBeforeMount, watch, defineEmits } from 'vue'
import students from "../data/students.json"
import Fees from '../data/fees.json'
import AreasOfPayment from "@/components/AreasOfPayment.vue";
import PaidFees from "@/data/paid_fees.json";

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

// Record selected fees
const selectedFees = ref([{id: Number, isChecked: Boolean}])
const paidFees = ref(PaidFees)
const paid_fees = () => {
    if (selectedFees.isChecked) {
        if (!paidFees.value.find(data => data.fee_id === selectedFees.id)){
            paidFees.value.push({
                fee_id: selectedFees.id,
                OR_num: String,
                LRN: lrn
            }) 
        }
        return
    }
    paidFees.value = paidFees.value.filter(data => data.fee_id !== selectedFees.id)
}
watch(selectedFees, paid_fees)

</script>

<template>
    <!-- Test print -->
    <div v-for="pf in paidFees">
        {{ pf.fee_id }}
    </div>

    <!-- Select or unselect fees to be payed -->
    <div v-for="f in fees" 
        :key="f.id" 
        class="card">
        <AreasOfPayment 
            :id="f.id"
            :name="f.text"
            :amount="f.amount"
            :is-checked="f.checked"
            @AOP="(data) => selectedFees = data"
        />
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
    align-items: start;
    justify-content: space-between;

    box-shadow: none;
    border-bottom: 1px solid rgba(150, 150, 150, 0.774);
    border-radius: 0;
}

.form-check-input:hover {
    cursor: pointer;
}


</style>
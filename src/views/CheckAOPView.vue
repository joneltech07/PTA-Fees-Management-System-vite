<script setup>
import {useRoute, useRouter} from "vue-router"
import { computed, ref, onBeforeMount, watch, defineEmits } from 'vue'
import students from "../data/students.json"
import axios from 'redaxios'
import AreasOfPayment from "@/components/AreasOfPayment.vue";
import { store } from "../store";

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


// Total of fees amount
const total = ref(0)
const totalFunction = (data) => {
    if(data.isChecked) {
        total.value += store.fees.find(f => f.id === data.id).fee_amount
        return
    }

    total.value -= store.fees.find(f => f.id === data.id).fee_amount
}

</script>

<template>
    <!-- Select or unselect fees to be payed -->
    <div class="total">
        Total: {{ total }}
    </div>

    <div class="float-end">
        {{ store.paymentDetails.fees }}
    </div>

    <br>
    <div class="container-fluid">
        <div
            v-for="f in store.filteredFees" 
            :key="f.id" 
            class="card">
            <AreasOfPayment 
                :id="f.id"
                :name="f.fee_type"
                :amount="f.fee_amount"
                @clicked="(data) => totalFunction(data)"
            />
        </div>
    </div>
</template>

<style scoped>

.card {
    width: 100%;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
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
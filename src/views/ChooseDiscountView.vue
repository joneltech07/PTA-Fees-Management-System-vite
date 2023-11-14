<script setup>
import {useRoute, useRouter} from "vue-router"
import { computed, ref, onBeforeMount, watch } from 'vue'
import students from "../data/students.json"
import axios from 'redaxios'
import SiblingPaymentModal from "@/modal/SiblingPaymentModal.vue"
import { store } from "../store"

const route = useRoute()
const router = useRouter()

// getting lrn from route parameter
const {lrn} = route.params      

// get the student full info
const stud = ref(null)
onBeforeMount(() => {
    stud.value = students.find(c => c.LRN === lrn)
})


// get students with similar lastname
const siblings = ref(students.filter((s) => s.lastName === students.find(c => c.LRN === lrn).lastName))
// search input value
const searchInput = ref('')
const searchSibling = () => {
    siblings.value = students.filter(
        (s) => s.firstName === searchInput.value || s.lastName === searchInput.value
        || s.LRN === searchInput.value
    )
}


const isOpenModal = ref(false)
const selectedSibling = ref('')

const selectSibling = (sibling) => {
    isOpenModal.value = true
    selectedSibling.value = sibling
}



</script>

<template>
    <div class="container">
        <div class="top-section d-flex align-items-center gap-3 mt-3 w-50">
            <span>Quater: </span>
            <select 
                class="form-select"
                @change="handleChange">
                <option>1st quater</option>
                <option>2nd quater</option>
                <option>3rd quater</option>
                <option>4th quater</option>
            </select>
        </div>
        <span>Select Discount: </span>
        <br>
        <div class="discount-options mb-2"
            v-for="d in store.filteredDiscount"
            :key="d.id">
            <span>
                <input 
                    class="form-check-input me-1"
                    type="checkbox"
                    :id="d.id"
                    :value="d.id"
                    v-model="store.paymentDetails.discount">
                <label :for="d.id">{{ d.discount_type }}</label>
            </span>
        </div>

        <div class="container-fluid d-flex gap-3 align-items-center">
            <label>Other Discount:</label>
            <div class="d-flex align-items-center gap-1">
                <input id="d_name" type="text" class="form-control" placeholder="discount name">
            </div>
        </div>
        
        <div class="d-flex align-items-center gap-1 mb-3 w-50 mt-3">
            <span>discount: </span>
            <input type="text" class="form-control" placeholder="value">
        </div>
    </div>

    <div class="container-fluid">
        <hr>
        <div class="top-section input-group">
            <input v-model="searchInput" type="text" class="form-control" placeholder="Enter LRN, First name, or Last name" aria-label="Recipient's username">
            <button @click="searchSibling" class="btn btn-secondary" type="button" id="button-addon2">Search</button>
        </div>
        <div class="students mt-3">
            <div v-for="sibling in siblings" >
                <div 
                    v-if="sibling.LRN !== stud.LRN" class="card"
                    @click="selectSibling(sibling)">
                    <span>LRN: {{ sibling.LRN }}</span>
                    <span>First Name: {{ sibling.firstName }}</span>
                    <span>Middle Name: {{ sibling.middleName }}</span>
                    <span>Last Name: {{ sibling.lastName }}</span>
                    <span>Grade: {{ sibling.gradeLevel }}</span>
                    <span>sex/gender: {{ sibling.sex }}</span>
                    <span>section: {{ sibling.section }}</span>
                </div>
            </div>
        </div>
    </div>

    <Teleport to="body">
        <div v-if="isOpenModal" class="modal">
            <SiblingPaymentModal
                @close="isOpenModal = false"
                :first-n="selectedSibling.firstName"
                :middle-n="selectedSibling.middleName"
                :last-n="selectedSibling.lastName"
            />
        </div>
    </Teleport>
</template>

<style scoped>
.discount-options {
    display: inline-block;
    margin-top: 10px;
    margin-left: 10px;
}

.card {
    margin-bottom: 15px;
    padding: 5px;
    padding-right: 10px;
    padding-left: 10px;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.095);

    display: flex;
    flex-direction: row;    
    align-items: start;
    justify-content: space-evenly;
    gap: 1rem;

    border-radius: 0;
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.208);
}

.card:hover {
    cursor: pointer;
}

.form-check-input:hover {
    cursor: pointer;
}

input:hover, select:hover {
    border-color: black;
}

.modal {
    display: block;
}

</style>
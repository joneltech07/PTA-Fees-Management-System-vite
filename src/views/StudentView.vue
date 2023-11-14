<script setup>
import {useRoute, useRouter} from "vue-router"
import { computed, ref, onBeforeMount, watch } from 'vue'
import students from "../data/students.json"
import PaymentModal from "../modal/PaymentModal.vue"

import axios from 'redaxios'
import { store } from '../store/index'

const route = useRoute()
const router = useRouter()

// getting lrn from route parameter
const {lrn} = route.params      

// get the student full info
const stud = ref(null)
onBeforeMount(() => {
    stud.value = students.find(c => c.LRN === lrn)
})



const Data = ref(Object)
// total payed fees
const total = ref(0)

// route properties
let id = 0
const routeItems = ref([
    {id: id++, label: "Area of Payment", path: ""},
    {id: id++, label: "Choose Discount", path: `/stud/${lrn}/discount`},
    {id: id++, label: "Invoice", path: `/stud/${lrn}/invoice`},
])
const navIndex = ref(0)
const routeLabel = ref(routeItems.value.find(m => m.id === navIndex.value).label)

// open key for payment modal
const isOpenModal = ref(false)
// Button value
const buttonValue = ref('Next')
// navigate views accourding to id
const nextNav = () => {
    if (navIndex.value < 1) {
        navIndex.value = navIndex.value+1
        router.push(routeItems.value.find(m => m.id === navIndex.value).path)
    } else {
        isOpenModal.value = true
    }
    buttonValue.value = 'Proceed to Payment'
}

watch(navIndex, () => {
    routeLabel.value = routeItems.value.find(m => m.id === navIndex.value).label
})



// Load Data

// Schoo Year
const SchoolYearLoad = () => {
    const api = "http://127.0.0.1:8000/api/school_year"
    axios.get(api)
    .then(({data}) => {
        store.schoolYear = data
    })
}
SchoolYearLoad()

// Fees
const SYFeesLoad = () => {
    const page = "http://127.0.0.1:8000/api/sy_fee"
    axios.get(page)
    .then(
        ({data})=>{
            store.syFees = data
           loadFees()
        }
    );
}

SYFeesLoad()

const FeesLoad = () => {
    const api = "http://127.0.0.1:8000/api/fees"
    axios.get(api)
    .then(({data}) => {
        store.fees   = data
    })
}

FeesLoad()


// Dscount
const DiscountLoad = (id) => {
    const api = `http://127.0.0.1:8000/api/discount`
    axios.get(api)
    .then(({data}) => {
        store.discount = data
    })
}
DiscountLoad()

const SYDiscountLoad = () => {
    const page = "http://127.0.0.1:8000/api/sy_discount"
    axios.get(page)
    .then(
        ({data})=>{
            store.syDiscount = data
        }
    );
}
SYDiscountLoad()


// Load Data
const selectSY = ref(store.school_year_id)

const loadFees = () => {
    store.school_year_id = selectSY.value
    store.resetFees()
    store.resetDiscount()

    const filteredSYFees = store.syFees.filter((sy) => sy.sy_id === selectSY.value)
    const filteredSYDiscount = store.syDiscount.filter((sy) => sy.sy_id === selectSY.value)

    for (let x in filteredSYFees) {
        store.putFees(store.fees.find(f => f.id === filteredSYFees[x].fee_id))
    }
    for (let x in filteredSYDiscount) {
        store.putDiscount(store.discount.find(d => d.id === filteredSYDiscount[x].discount_id))
    }
}
loadFees()
watch(selectSY, loadFees)

</script>

<template>
    <div class="container">
        <div class="container-fluid d-flex flex-row justify-content-between align-items-center mb-3">
            <button class="btn btn-primary" @click="{
                router.back();
                navIndex = navIndex > 0 ? navIndex-1 : 0;
                buttonValue = 'Next'
            }">Go Back</button>
            
            <div>
                <select v-model="selectSY" class="form-select">
                    <option v-for="sy in store.schoolYear" :key="sy.id" :value="sy.id">
                        {{ sy.from_year }} - {{ sy.to_year }}
                    </option>
                </select>
            </div>

            <div>
                {{ routeLabel }}
            </div>
            <input id="nextBtn" class="btn btn-primary" type="button" :value="buttonValue"
                @click="nextNav">
        </div>
        <hr>
        <div class="d-flex w-100 row">
            <div class="section border p-5 me-3 ms-3 col">
                <div v-if="stud" >
                    <h3>Student Info</h3>
                    <p>LRN: <strong>{{ stud.LRN }}</strong></p>
                    <p>FIRST NAME: <strong>{{ stud.firstName }}</strong></p>
                    <p>MIDDLE NAME: <strong>{{ stud.middleName }}</strong></p>
                    <p>LAST NAME: <strong>{{ stud.lastName }}</strong></p>
                    <p>SEX/GENDER: <strong>{{ stud.sex }}</strong></p>
                    <p>GRADE LEVEL: <strong>{{ stud.gradeLevel }}</strong></p>
                    <p>SECTION: <strong>{{ stud.section }}</strong></p>
                </div>
                <div v-else>
                    <h1>Student Not Found on id:{{ lrn }}</h1>
                </div>
            </div>
            <div class="section border col-sm-8">
                <router-view></router-view>
            </div>
        </div>
    </div>

    <Teleport to="body">
        <div v-if="isOpenModal" class="modal">
            <PaymentModal
                @close="isOpenModal = false"
            />
        </div>
    </Teleport>
</template>

<style scoped>

.section {
    height: 80vh;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
}

.modal {
    display: block;
    z-index: 9999;
}
</style>
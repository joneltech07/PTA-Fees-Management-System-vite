<script setup>
import {useRoute, useRouter} from "vue-router"
import { computed, ref, onBeforeMount, watch } from 'vue'
import students from "../data/students.json"
import PaymentModal from "../modal/PaymentModal.vue"

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
        router.push({
            path: routeItems.value.find(m => m.id === navIndex.value).path,
            query: { test: "hey this is testing"}
        })
    } else {
        isOpenModal.value = true
    }
    buttonValue.value = 'Proceed to Payment'
}

watch(navIndex, () => {
    routeLabel.value = routeItems.value.find(m => m.id === navIndex.value).label
})


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
                <router-view
                    :data = Data
                    @data="(data) => Data = data"></router-view>
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
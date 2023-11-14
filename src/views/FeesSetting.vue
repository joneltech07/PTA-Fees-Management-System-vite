<script setup>
import { computed, ref, watch } from "vue"
import { useRouter } from "vue-router"
import axios from "redaxios"
import { store } from '../store/index'

const router = useRouter()

// Menu properties
let id = 0
const menuItem = ref([
    {id: id++, label: "School Year", path: "/set-schoolyear"},
    {id: id++, label: "Fees Breakdown", path: "/fees-breakdown"},
    {id: id++, label: "Discounts", path: "/discount"},
])

const buttonLabel = ref('Next')
const navIndex = ref(0)
// navigate views accourding to id
const nextNav = () => {
    if (navIndex.value < 2) {
        navIndex.value = navIndex.value+1
        router.push(`/fees-setting${menuItem.value.find(m => m.id === navIndex.value).path}`)
    } else {
        addSY()
        // router.push("/")
    }
}


// change button label from 'Next' to 'Save' if it reached the last step
watch(navIndex, () => {
    buttonLabel.value = navIndex.value === 2 ?  "Save" : "Next"
})




const addSY = async() => {
    await axios.post("http://127.0.0.1:8000/api/school_year", store.school_year)
    .then((response) => {
        store.putSYId(response.data.id)
        addSYFees()
        addSYDiscounts()
        router.push("/")
    })
    .catch((error) => {
        console.error("Error while posting data:", error);
    });
}

const addSYFees = async() => {
    for (let x in store.sy_fees.fees) {
        await axios.post("http://127.0.0.1:8000/api/sy_fee", {
            "sy_id" : store.sy_fees.id,
            "fee_id" : store.sy_fees.fees[x]
        })
        .then((response) => {
            // alert("Fee Inserted!!!")
        })
        .catch((error) => {
            console.error("Error while posting data:", error);
        });
    }
}

const addSYDiscounts = async() => {
    for (let x in store.sy_fees.fees) {
        await axios.post("http://127.0.0.1:8000/api/sy_discount", {
            "sy_id" : store.sy_fees.id,
            "discount_id" : store.sy_fees.discount[x]
        })
        .then((response) => {
            // alert("Discount Inserted!!!")
        })
        .catch((error) => {
            console.error("Error while posting data:", error);
        });
    }
}


</script>

<template>
    <div class="container-fluid d-flex flex-column align-self-center justify-content-center align-items-center">
        <div id="fees-setting" class="container">
            <nav class="navbar navbar-expand-lg mb-3 d-flex justify-content-between">
                <ul class="navbar-nav ">
                    <li class="nav-item"
                        v-for="(item, index) in menuItem"
                        :key="index"
                        :label="item.label"
                    >
                        <router-link
                            v-if="navIndex >= index"
                            :to="`/fees-setting${item.path}`"
                            class="nav-link"
                            @click="navIndex=index"
                            >
                            {{ item.label }}
                        </router-link>
                    </li>
                </ul>
                <input 
                    id="submit" 
                    type="button" 
                    class="btn border" 
                    :value="buttonLabel"
                    @click="nextNav">
            </nav>
            <div class="container router-view">
                <router-view></router-view>
            </div>
        </div>
    </div>

    
</template>

<style scoped>
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
    .title {
        color: #800000;
    }

    .router-link-active {
        color: #800000;
        font-weight: bold;
    }

    .navbar {
        border-bottom: 1px solid rgb(169, 167, 167);
        background-color: white;
    }

    #fees-setting {
        position: relative;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: .3em;
    }

    #submit {
        width: 200px;
    }

</style>
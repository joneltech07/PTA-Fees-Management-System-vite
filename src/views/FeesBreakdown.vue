<script setup>
import { ref, computed, watch } from 'vue';
import EditModal from '../modal/EditModal.vue';
import AddModal from "../modal/AddModal.vue";
import axios from 'redaxios'
import { store } from '../store/index'


const isOpen = ref([{edit: false, add: false}])                     // for close and open modals
const selected = ref({fee_type: String, fee_amount: Number})    // selected table row (used for editing)

// opening and passing data to edit modal
const passData = (data) => {
    //if (data.checked) 
    isOpen.value.edit = true 
    selected.value = data
}


// Fetch data
const fees = ref([{fee_type: '', fee_amount: 0}])

const FeesLoad = () => {
    const page = "http://127.0.0.1:8000/api/fees"
    axios.get(page)
    .then(
        ({data})=>{
            fees.value = data;
        }
    ).catch((error) => {
        console.error("Error while posting data:", error);
    });
}

FeesLoad()

const amount = ref(0)

</script>

<template>
    <div class="container" id="container">
        {{ store.sy_fees.fees }}
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
                <tr 
                    v-if="fees"
                    v-for="(b, index) in fees" 
                    :key="index"
                >
                    <td>
                        <input 
                            class="form-check-input me-2"
                            type="checkbox"
                            :value="b.id"
                            v-model="store.sy_fees.fees"
                        >
                        <span >{{ b.fee_type }}</span>
                    </td>
                    <td>
                        <span >{{ b.fee_amount }}</span>
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
                @close="{
                    isOpen.edit = false;
                    FeesLoad()
                }"
                :title="selected.fee_type"
                :msg="selected.fee_amount"
                />
        </div>
    </Teleport>

    <Teleport to="body">
        <div v-if="isOpen.add" class="modal">
            <AddModal
                @close="{
                    isOpen.add = false;
                    FeesLoad()
                }"/>
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
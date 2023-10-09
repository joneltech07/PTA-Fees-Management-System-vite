<script setup>
import studData from '../data/students.json'
import { ref, watch, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const search = ref('')
const gradeLevel = ref("")

const filteredData = ref(studData)
const filter = computed(() => {
    return studData.filter(
        (t) => t.LRN === search.value || t.lastName === search.value
        || t.firstName === search.value
    )
})

watch(gradeLevel, () => {
  if (gradeLevel.value) {
    if (gradeLevel.value === "All")
        filteredData.value = studData
    else 
        filteredData.value = studData.filter(c => c.gradeLevel === gradeLevel.value)
  }
})

const handleChange = () => {
  router.push({query: {gradeLevel: gradeLevel.value}})
}

</script>

<template>
    <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
        <div class="contents container">
            <div class="container clearfix d-flex justify-content-end">
                <div class="input-group w-50">
                    <input v-model="search" type="text" class="form-control" placeholder="Enter LRN, First name, or Last name" aria-label="Recipient's username">
                    <button @click="filteredData=filter" class="btn btn-secondary" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        </div>
        
        <div class="contents container rounded-3">
            <div class="row">
                <div class="container mt-3 clearfix">
                    <select 
                        class="form-select w-25"
                        @change="handleChange"
                        v-model="gradeLevel">
                        <option value="All">All</option>
                        <option value="8">Grade 8</option>
                        <option value="9">Grade 9</option>
                        <option value="10">Grade 10</option>
                        <option value="11">Grade 11</option>
                        <option value="12">Grade 12</option>
                    </select>
                    <p>Record/s Found:</p>
                    <hr class="h-color mx">
                    <div class="container-fluid d-flex flex-column align-items-stretch justify-content-center">
                        <div class="container-fluid mb-3 w-100">
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">LRN</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Middle Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Sex/Gender</th>
                                        <th scope="col">Grade level</th>
                                        <th scope="col">Section</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr 
                                        v-for="(stud, key) in filteredData"
                                        :key="key"
                                        @click="router.push(`/stud/${stud.LRN}`)">
                                        <td>{{ stud.LRN }}</td>
                                        <td>{{ stud.firstName }}</td>
                                        <td>{{ stud.middleName }}</td>
                                        <td>{{ stud.lastName }}</td>
                                        <td>{{ stud.sex }}</td>
                                        <td>{{ stud.gradeLevel }}</td>
                                        <td>{{ stud.section }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<style>

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #submit {
        background: #800000;
        color: white;
        border-radius: 15px;
        font-weight: bold;
    }

    .row::after {
        content: "";
        clear: both;
        display: table;
    }

    .row.mb-3 {
        text-align: end;
    }

    h5 {
        text-align: start;
    }

    tbody tr {
        cursor: pointer;
    }
</style>
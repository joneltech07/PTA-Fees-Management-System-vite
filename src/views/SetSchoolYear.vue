<script setup>

import { ref, watch } from "vue"
import { store } from '../store/index'


watch(store.school_year, () => store.putSchoolYear(store.school_year.from_year))

</script>

<template>

<div class="container w-50">
    <div class="row m-3">
        <label for="from">From:</label>
        <div class="col">
            <input v-model="store.school_year.from_year" id="from" type="number" class="form-control border-dark" >
        </div>
    </div>
    <div class="row m-3">
        <label for="to">To:</label>
        <div class="col">
            <input v-model="store.school_year.to_year" id="to" type="number" class="form-control border-dark" >
        </div>
    </div>
</div>

</template>

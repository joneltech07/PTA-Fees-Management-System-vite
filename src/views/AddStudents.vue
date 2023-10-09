<template>

    <div class="container-fluid d-flex flex-column justify-content-center align-items-center">
        <div class="contents container border border-dark w-75 mb-5 rounded-3">
            <div class="container mt-3">
                <div class="row mb-5">
                    <h5>Add Students</h5>
                </div>
                <div class="row">
                    <div class="container-fluid d-flex flex-column align-items-stretch justify-content-center w-75">
                        <form action="" class="" >
                            <div class="row mb-3">
                                <label for="inputLRN" class="col col-lg-3 col-form-label">LRN No.</label>
                                <div class="col">
                                    <input type="text" class="form-control border border-dark" id="inputLRN">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputFistName" class="col col-lg-3 col-form-label">Fist Name</label>
                                <div class="col">
                                <input type="text" class="form-control border border-dark" id="inputFistName">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputMiddleName" class="col col-lg-3 col-form-label">Middle Name</label>
                                <div class="col">
                                <input type="text" class="form-control border border-dark" id="inputMiddleName">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputLastName" class="col col-lg-3 col-form-label">Last Name</label>
                                <div class="col">
                                <input type="text" class="form-control border border-dark" id="inputLastName">
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="" class="col col-lg-3 col-form-label">Sex/Gender</label>
                                <div class="col">
                                <input type="text" class="form-control border border-dark" id="">
                                </div>
                            </div>
                            <SelectItems />
                        </form>
                    </div>
                </div>
                <div class="row d-flex justify-content-end">
                    <input id="submit" type="button" class="btn border w-25 mb-3" value="Next">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>
    import SelectItems from '@/components/SelectItems.vue';
</script>
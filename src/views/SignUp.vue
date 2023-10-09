<template>
    <div class="container-fluid main">
        <div class="container-fluid">
            <div class="row">
                <div class="col d-flex justify-content-center align-items-center">
                    <h1>Baguio City High School</h1>
                </div>
                <div class="col right-col">
                    <div class="container right">
                        <div class="logo-container d-flex justify-content-center m-3">
                            <img src="../assets/img/logo.png" alt="logo.png">
                        </div>
                        <div class="form-container d-flex flex-column align-items-center scrollbar">
                            <div class="header-text"><h5>Sign Up</h5></div>
                            <form action="" class="w-75">
                                <div class="mb-3">
                                    <label for="">First Name</label>
                                    <input type="text" class="form-control form-control form-control-sm">
                                </div>
                                <div class="mb-3">
                                    <label for="">Middle Name</label>
                                    <input type="text" class="form-control form-control form-control-sm">
                                </div>
                                <div class="mb-3">
                                    <label for="">Last Name</label>
                                    <input type="text" class="form-control form-control form-control-sm">
                                </div>
                                <div class="mb-3">
                                    <label for="">Password</label>
                                    <input type="text" class="form-control form-control form-control-sm">
                                </div>
                                <div class="mb-3">
                                    <label for="">Contact Number</label>
                                    <input type="text" class="form-control form-control form-control-sm">
                                </div>
                                <div class="mb-3">
                                    <label for="">Position</label>
                                    <input type="text" class="form-control form-control form-control-sm">
                                </div>
                                <div class="mb-3">
                                    <label for="">Grade Level</label>
                                    <select v-model="selected" class="form-select w-50">
                                        <option v-for="option in options" :key="option.value" :value="option.value">
                                            {{ option.text }}
                                        </option>
                                    </select>
                                </div>
                                <div class="mb-3 d-flex justify-content-end">
                                    <input type="button" value="SIGN UP" class="btn border w-25 mb-3">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const selected = ref('Select Grade');
    
    const options = ref([
        { text: 'Select Grade', value: 'Select Grade' },
        { text: 'Grade 7', value: 'Grade 7'},
        { text: 'Grade 8', value: 'Grade 8'},
        { text: 'Grade 9', value: 'Grade 9 ' }
    ]);
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lexend&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container-fluid.main {
        background: url('../assets/img/login_signup-background.png');
        width: 100%;
        height: 100vh;
        color: #fff;
    }

    .row {
        width: 100%;
        height: 100vh;
    }
    .col {
        width: 100%;
        height: 100vh;
    }

    h1 {
        font-size: 96px;
        text-align: center;
        font-weight: bold;
        font-family: 'Lexend', sans-serif;
    }

    input {
        opacity: 0.5;
    }

    .btn {
        background-color: #fff;
        opacity: 1;
    }

    .right {
        position: relative;
        width: 100%;
        height: 75%;
    }

    .form-container {
        overflow: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .form-container:hover {
        overflow: auto;
    }

    input.form-control:focus {
        opacity: 1;
    }

</style>
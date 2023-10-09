<template>
    <div 
        @dragenter.prevent="toggleActive"
        @dragleave.prevent="toggleActive" 
        @dragover.prevent
        @drop.prevent="toggleActive"
        :class="{'active-dropzone' : active}"
        class="dropzone"
        >
            <span>Drag or Drop File</span>
            <span>or</span>
            <label for="dropzoneFile">Browse</label>
            <input type="file" id="dropzoneFile" class="dropzoneFile">
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name: "DropZone",
    setup() {
        const active = ref(false)
        const toggleActive = () => {
            active.value = !active.value;
        };

        return {active, toggleActive}
    }
}
</script>

<style>
    .dropzone {
        width: 400px;
        /* height: 200px; */
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 16;
        border: 2px dashed #6D6D6D;
        background-color: #EAEAEA;
        transition: .3s ease all;
    }

    .dropzone label {
        padding: 8px 12px;
        color: white;
        background-color: #6D6D6D;
        transition: .3s ease all;
    }

    .dropzone input {
        display: none;
    }

    .active-dropzone {
        color: white;
        border-color: white;
        background-color: #41b883;


    }

    .active-dropzone label {
        background-color: white;
        color: #41b883;
    }
</style>
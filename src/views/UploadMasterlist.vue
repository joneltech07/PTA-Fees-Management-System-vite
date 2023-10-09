<template>
    <div class="contailer-fluid">
        <div class="container w-75 border border-dark rounded-3">
            <div class="container mt-3 mb-3">
                <h5>Upload Masterlist</h5>
            </div>
            <div class="container mb-3 d-flex align-items-center flex-column">
                <DropZone @drop.prevent="drop" @change="selectedFile" />
            </div>
            <span class="file-info">File: {{ dropzoneFile.name }}</span>
            <div class="container">
                <div class="label">
                    <span>Your File:</span>
                </div>
                <div class="file-info">
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">FIle Type</th>
                            <th scope="col">Size</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>File 1</td>
                                <td>.ics</td>
                                <td>1TB</td>
                            </tr>
                            <tr>
                                <td>File 2</td>
                                <td>.ics</td>
                                <td>1TB</td>
                            </tr>
                            <tr>
                                <td>File 3</td>
                                <td>.ics</td>
                                <td>1TB</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import DropZone from "../components/DropZone.vue"

export default {
    name: "Home",
    components: {
        DropZone
    },
    setup() {
        let dropzoneFile = ref("");

        const drop = (e) => {
            dropzoneFile.value = e.dataTransfer.files[0];
        }

        const selectedFile = () => {
            dropzoneFile.value = document.querySelector('.dropzoneFile').files[0];
        }

        return { dropzoneFile, drop, selectedFile };
    }
}
</script>

<style scoped>

</style>
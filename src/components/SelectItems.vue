<script setup>

    import { ref, computed } from 'vue';
    const selected = ref('Select Grade');
    const selected_sec = ref('Select Section');

    let id = 0;

    const options = ref([
        { text: 'Select Grade', value: 'Select Grade'},
        { id: id++, text: 'Grade 7', value: 'Grade 7'},
        { id: id++, text: 'Grade 8', value: 'Grade 8'},
        { id: id++, text: 'Grade 9', value: 'Grade 9' }
    ]);

    const sections = ref([
        { key: 'Select Grade', text: 'Select Section', value: 'Select Section' },
        { key: 'Grade 7', text: 'Section A', value: 'Section A'},
        { key: 'Grade 7', text: 'Section B', value: 'Section B'},
        { key: 'Grade 7', text: 'Section C', value: 'Section C '},
        { key: 'Grade 8', text: 'Section A', value: 'Section A'},
        { key: 'Grade 8', text: 'Section B', value: 'Section B '},
        { key: 'Grade 9', text: 'Section A', value: 'Section A'},
        { key: 'Grade 9', text:'Section B', value: 'Section B '},
        { key: 'Grade 9', text: 'Section C', value: 'Section C'},
        { key: 'Grade 9', text: 'Section D', value: 'Section D '},
    ])

    const filteredSect = computed(() => {
        if (id)
            return sections.value.filter((t) => t.key === selected.value)
    })
    
</script>

<template>
    <div class="row mb-3">
        <div class="col">
            <label for="">Grade Level</label>
        </div>
        <div class="col-md-3">
            <select v-model="selected" class="form-select border-dark">
                <option v-for="option in options" :key="option.value" :value="option.value">
                    {{ option.text }}
                </option>
            </select>
        </div>
        <div class="col-md-2">Section</div>
        <div class="col-md-4">
            <select v-model="selected_sec" class="form-select border-dark">
                <option v-for="section in filteredSect" :key="section.value" :value="section.value">
                    {{ section.text }}
                </option>
            </select>
        </div>
    </div>
</template>

<style scoped>
.row.mb-3 {
    text-align: end;
}

input {
    border-color: #A8A6A6;
}
</style>
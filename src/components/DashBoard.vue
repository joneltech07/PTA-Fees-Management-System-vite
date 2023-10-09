<template>


<div id="app">
    <div class="container-fluid">
        <div class="row">
            <div class="col col-lg-2">
                <Menu />
            </div>
            <div class="col m-3">
                <router-view></router-view>
            </div>
        </div>
    </div>
</div>

</template>


<script>

import Menu from './Menu.vue';

export default {
    components: {
        Menu,
    }
}

</script>
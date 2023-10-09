<template>


<div id="app">
    <div class="container-fluid">
        <div class="row">
            <div class="col col-lg-1">
                <Menu />
            </div>
            <div class="col m-2">
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
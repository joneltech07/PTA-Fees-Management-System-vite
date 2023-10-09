<template>
    <div class="menu">
        <div class="header-box px-4 pt-3 pb-4" style="background-color: #800000;">
            
            <div class="row d-flex justify-content-center">
                <router-link
                    to="/"
                    class="d-flex justify-content-center">
                    <img class="w-50" src="../assets/img/logo.png" alt="">
                </router-link>
            </div>
            <div class="row d-flex justify-content-center">
                <h1 class="fs-6 text-center">
                    <span class="text-white ">Baguio City High School</span>
                </h1>
            </div>
        </div>
        <MenuItem
            v-for="(item, index) in menuTree"
            :key="index"
            :label="item.label"
            :icon="item.icon"
            :depth="0"
            :data="item.children"
            :path="item.path"
            @click="item.path ? router.push(item.path) : router.go"
        />
        
        <hr class="h-color mx-1">
    </div>
</template>

<script>
import MenuItem from './MenuItem.vue';
import { useRouter } from 'vue-router';

export default {
    name: "recursive-menu",
    data: () => ({
        router: useRouter(),
        menuTree: [
            {
                label: "Account Management",
                icon: "widgets",
                children: [
                    {
                        label: "Manage Account",
                        path: "/manage-account"
                    },
                    {
                        label: "Create Clerk Account",
                        path: "/create-clerk"
                    }
                ]
            },
            {
                label: "Student Profiling",
                icon: "person",
                children: [
                    {
                        label: "Add Student",
                        path: "/add-student"
                    },
                    {
                        label: "Upload Masterlist",
                        path: "/upload-masterlist"
                    }
                ]
            },
            {
                label: "Fees Setting",
                icon: "wallet",
                path: "/fees-setting/set-schoolyear"
            },
            {
                label: "Payment Management",
                icon: "monitor",
                path: "/"
            },
            {
                label: "Report Generation",
                icon: "leaderboard",
            }
        ]
    }),
    components: {
        MenuItem
    }
}
</script>

<style scoped>
.menu {
    position: fixed;
    height: 100vh;
    width: 240px;
    left: 0;
    top: 0;
    border-right: 1px solid #eceeec;
    transition: all .3s ease;
    overflow: auto;
    background-color: #D9D9D9;
}
</style>
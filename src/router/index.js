import { createRouter, createWebHistory } from 'vue-router';

import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import ManageAccount from '../views/ManageAccount.vue';
import DashBoard from '../components/DashBoard.vue';
import ClerkAccount from '../views/ClerkAccount.vue';
import AddStudents from '../views/AddStudents.vue';
import SignUp from '../views/SignUp.vue';
import FeesSetting from '../views/FeesSetting.vue';
import UploadMasterlist from '../views/UploadMasterlist.vue';
import DropZone from '../components/DropZone.vue';
import FeesBreakdown from '../views/FeesBreakdown.vue';
import SetSchoolYear from '@/views/SetSchoolYear.vue';
import Discount from '../views/Discount.vue';
import StudentView from '../views/StudentView.vue'
import CheckAOPView from '../views/CheckAOPView.vue'
import ChooseDiscount from '@/views/ChooseDiscountView.vue'
import Invoice from '../views/InvoiceView.vue'

const routes = [
    {
        path: '/',
        component: DashBoard,
        children: [
            {path: '', component: Home,},
            { path: '/manage-account', name: 'MangeAccount', component: ManageAccount },
            { path: '/create-clerk', name: 'ClerkAccount', component: ClerkAccount },
            {
                path: "/stud/:lrn",
                component: StudentView,
                children: [
                    {path: '', component: CheckAOPView},
                    {path: 'discount', component: ChooseDiscount},
                    {path: 'invoice', component: Invoice}
                ]
            },
        ] 
    },
    {
        path: '/student',
        name: 'Student',
        component: DashBoard,
        children: [
            { path: '/add-student', component: AddStudents },
            {
                path: '/upload-masterlist',
                name: 'Upload Masterlist',
                component: UploadMasterlist
            },
            {
                path: '/dropzone',
                name: 'Drop Zone',
                component: DropZone
            }
        ]
    },
    {
        path: '/fees',
        name: 'Fees Settings',
        component: DashBoard,
        children: [
            { 
                path: '/fees-setting', 
                component: FeesSetting,
                children: [
                    { path: '/fees-setting/set-schoolyear', component: SetSchoolYear },
                    { path: '/fees-setting/set-schoolyear', component: SetSchoolYear },
                    { path: '/fees-setting/fees-breakdown', component: FeesBreakdown },
                    { path: '/fees-setting/discount', component: Discount },
                ]
            },
        ]
    },
    {
        path: '/login-adlie',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    base: import.meta.env.BASE_URL,
    routes
})

export default router
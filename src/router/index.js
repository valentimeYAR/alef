import {createRouter, createWebHistory} from "vue-router";
import UserFormPage from "../Pages/UserFormPage.vue";
import PreviewPage from "../Pages/PreviewPage.vue";

const routes = [
    {path: '/', component: UserFormPage},
    {path: '/preview', component: PreviewPage},
]

export const router = createRouter({
    routes, history: createWebHistory()
})
import {createRouter, createWebHistory} from "vue-router";
import IndexView from "@/views/IndexView.vue"

const routes = [
    {
        path: '/',
        component: IndexView
    },
]

export default createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
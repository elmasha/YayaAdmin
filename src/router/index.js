import Vue from 'vue'
import VueRouter from 'vue-router'
import Bureau from '../components/Bureau.vue'
import Client from '../components/Client.vue'
import Dashboard from '../components/Dashboard.vue'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/bureau',
        name: 'bureau',
        component: Bureau
    },
    {
        path: '/client',
        name: 'client',
        component: Client
    },

]

const router = new VueRouter({
    routes
})

export default router
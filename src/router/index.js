import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'dashboard',
        component: () =>
            import ('../components/Dashboard.vue')
    },
    {
        path: '/bureau',
        name: 'bureau',
        component: () =>
            import ('../components/Bureau.vue')
    },
    {
        path: '/client',
        name: 'client',
        component: () =>
            import ('../components/Client.vue')
    },

]

const router = new VueRouter({
    routes
})

export default router
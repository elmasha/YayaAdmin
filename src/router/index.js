import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

export default new Router({
    routes: [

        {
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
});
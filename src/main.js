import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { firestorePlugin } from 'vuefire'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import moment from 'moment'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { Chart } from 'chart.js'
import Chartkick from 'vue-chartkick'
Vue.use(Chartkick.use(Chart));

Vue.use(BootstrapVue, IconsPlugin)
Vue.use(moment)

Vue.use(firestorePlugin)
Vue.use(vuetify)

Vue.config.productionTip = false

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    router,
    vuetify,

    render: h => h(App)
}).$mount('#app')
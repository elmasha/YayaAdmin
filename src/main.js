import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { firestorePlugin } from 'vuefire'
import router from './router'

Vue.use(firestorePlugin)
Vue.use(router)

Vue.config.productionTip = false

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
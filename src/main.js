import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { firestorePlugin } from 'vuefire'
import router from './router'
import firebase from 'firebase/compat/app';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue, IconsPlugin)



Vue.config.productionTip = false;
const config = {
    apiKey: "AIzaSyDHvnTIY1x17KWrHuszJmJyvQCbNilC4Uk",
    authDomain: "yayananies.firebaseapp.com",
    projectId: "yayananies",
    storageBucket: "yayananies.appspot.com",
    messagingSenderId: "934333898387",
    appId: "1:934333898387:web:415ae3b8c0585bd271b766",
    measurementId: "G-676Y2E1CSE"
}

firebase.initializeApp(config)


Vue.use(firestorePlugin)
Vue.use(router)
Vue.use(vuetify)

Vue.config.productionTip = false

library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')
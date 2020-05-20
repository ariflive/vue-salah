import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMeta from 'vue-meta'
import VueMoment from 'vue-moment'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import './scss/styles.min.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(VueMeta)
Vue.use(VueMoment)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')

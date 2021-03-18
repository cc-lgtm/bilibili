import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from '../http.js'
import 'vant/lib/index.css'
import { Toast, Field } from 'vant'

Vue.prototype.$http = http
Vue.prototype.$msg = Toast

Vue.use(Field)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import http from '../http.js'
import 'vant/lib/index.css'
import 'vant/lib/icon/local.css'
import { Toast, Field, Uploader, Dialog, ActionSheet, Tab, Tabs } from 'vant'

Vue.prototype.$http = http
Vue.prototype.$msg = Toast

Vue.use(Field)
Vue.use(Uploader)
Vue.use(Dialog)
Vue.use(ActionSheet)
Vue.use(Tab)
Vue.use(Tabs)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

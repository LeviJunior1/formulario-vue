import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/bootstrap'

Vue.config.productionTip = process.env.BASE_URL != 'production'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

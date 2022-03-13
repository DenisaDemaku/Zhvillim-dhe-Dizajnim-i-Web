import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// import { routes } from './routes';
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'

Vue.use(BootstrapVue);

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

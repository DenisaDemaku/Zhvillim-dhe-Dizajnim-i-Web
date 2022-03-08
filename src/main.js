import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// import { routes } from './routes';
import router from './router'
import store from './store'

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
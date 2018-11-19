import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:8000';
Vue.use(VueAxios, axios);

window.Store = store;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

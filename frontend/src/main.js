import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store/index';
import http from './helpers/http';

import 'buefy/dist/buefy.css';

Vue.use(Buefy);

Vue.config.productionTip = false;
window.Store = store;
Vue.prototype.http = http;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

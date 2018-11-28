import Vue from 'vue';
import Vuesax from 'vuesax';
import App from './App.vue';
import router from './router';
import store from './store/index';
import http from './helpers/http';

import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';

Vue.use(Vuesax);

Vue.config.productionTip = false;
window.Store = store;
Vue.prototype.http = http;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

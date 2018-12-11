import Vue from 'vue';
import Router from 'vue-router';
import store from '@/store';
import Home from './views/Home.vue';

Vue.use(Router);

const guest = (to, from, next) => {
  if (!store.getters['auth/loggedIn']) {
    next();
    return;
  }
  next('/');
};

const staff = (to, from, next) => {
  if (store.getters['auth/loggedIn']) {
    next();
    return;
  }
  next('/login');
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: staff,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      beforeEnter: guest,
    },
    {
      path: '/check',
      name: 'check',
      component: () => import('./views/Check.vue'),
      beforeEnter: staff,
    },
    {
      path: '/zonedivison',
      name: 'zoneDivision',
      component: () => import('./views/ZoneDivision.vue'),
      beforeEnter: staff,
    },
  ],
});

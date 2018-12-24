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

const follow = (to, from, next) => {
  if (store.getters.followed) {
    staff(to, from, next);
    next();
    return;
  }
  next('/home');
};

const noFollow = (to, from, next) => {
  if (!store.getters.followed) {
    staff(to, from, next);
    next();
    return;
  }
  next('/dashboard');
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: noFollow,
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
      beforeEnter: noFollow,
    },
    {
      path: '/zonedivision',
      name: 'zoneDivision',
      component: () => import('./views/ZoneDivision.vue'),
      beforeEnter: follow,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue'),
      beforeEnter: follow,
    },
  ],
});

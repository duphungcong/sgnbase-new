import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from './modules/auth';

Vue.use(Vuex);

const state = {
  loading: false,
};

const mutations = {

};

const actions = {

};

const getters = {

};

export default new Vuex.Store({
  plugins: [createPersistedState({ storage: window.sessionStorage })],
  state,
  mutations,
  actions,
  getters,
  modules: {
    auth,
  },
});

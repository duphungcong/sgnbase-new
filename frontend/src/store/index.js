import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from './modules/auth';

Vue.use(Vuex);

const state = {
  loading: false,
  checkId: null,
};

const mutations = {
  setLoading(state, payload) {
    state.loading = payload;
  },
  setCheckId(state, payload) {
    state.checkId = payload;
  },
};

const actions = {

};

const getters = {
  followed: state => state.checkId !== null,
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

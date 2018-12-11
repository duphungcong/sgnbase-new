import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import auth from './modules/auth';
import check from './modules/check';

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
  followCheck(context, payload) {
    context.commit('setCheckId', payload.id);
  },
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
    check,
  },
});

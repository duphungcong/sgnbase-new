import workApi from '@/api/work';

const state = {
  checks: [],
  count: 0, // number of checks
};

const mutations = {
  setChecks(state, checks) {
    state.checks = checks;
  },
  setCount(state, count) {
    state.count = count;
  }
};

const actions = {
  getChecks(context, payload) {
    workApi.getChecks(payload.page, (success, error, data) => {
      if (success) {
        context.commit('setChecks', data.results);
        context.commit('setCount', data.count);
      } else {
        console.log('error', error);
      }
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

import workApi from '@/api/work';

const state = {
  checks: [],
};

const mutations = {
  setChecks(state, checks) {
    state.checks = checks;
  },
};

const actions = {
  getChecks(context) {
    workApi.getChecks((success, error, data) => {
      if (success) {
        console.log('checks', data);
        context.commit('setChecks', data);
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

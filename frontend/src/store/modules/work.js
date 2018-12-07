import workApi from '@/api/work';

const state = {
  checks: [],
  aircraftList: [],
  numberOfChecks: 0, // number of checks
};

const mutations = {
  setChecks(state, checks) {
    state.checks = checks;
  },
  setNumberOfChecks(state, count) {
    state.numberOfChecks = count;
  },
  setAircraftList(state, list) {
    state.aircraftList = list;
  },
};

const actions = {
  getChecks(context, payload) {
    workApi.getChecks(payload, (success, error, data) => {
      if (success) {
        context.commit('setChecks', data.results);
        context.commit('setNumberOfChecks', data.count);
      } else {
        console.log('error', error);
      }
    });
  },
  getAircraftList(context) {
    workApi.getAircraftList((success, error, data) => {
      if (success) {
        context.commit('setAircraftList', data);
      } else {
        console.log('error', error);
      }
    });
  },
  createCheck(context, payload) {
    workApi.createCheck(payload, (success, error, data) => {
      if (success) {
        console.log('create new check', data);
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

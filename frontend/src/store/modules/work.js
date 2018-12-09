import workApi from '@/api/work';

const state = {
  checks: [],
  check: {},
  aircraftList: [],
  numberOfChecks: 0, // number of checks
};

const mutations = {
  setChecks(state, checks) {
    state.checks = checks;
  },
  setCheck(state, check) {
    state.check = check;
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
  getCheck(context, payload) {
    if (payload.id) {
      console.log('get check - id:', payload.id);
      workApi.getCheck(payload, (success, error, data) => {
        if (success) {
          const check = {
            name: data.name,
            start_date: new Date(data.start_date),
            finish_date: new Date(data.finish_date),
            aircraft: data.aircraft,
          };
          context.commit('setCheck', check);
        } else {
          console.log('error', error);
        }
      });
    } else {
      const check = {
        name: '',
        start_date: new Date(),
        finish_date: new Date(),
        aircraft: null,
      };
      context.commit('setCheck', check);
    }
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

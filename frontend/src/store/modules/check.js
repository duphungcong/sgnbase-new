import checkApi from '@/api/check';

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
    checkApi.getChecks(payload, (success, error, data) => {
      if (success) {
        context.commit('setChecks', data.results);
        context.commit('setNumberOfChecks', data.count);
      } else {
        console.log('error', error);
      }
    });
  },
  getCheck(context, payload) {
    let check = {
      name: '',
      start_date: new Date(),
      finish_date: new Date(),
      aircraft: null,
    };
    context.commit('setCheck', check);
    if (payload.id) {
      // console.log('get check - id:', payload.id);
      checkApi.getCheck(payload, (success, error, data) => {
        if (success) {
          check = {
            id: data.id,
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
    }
  },
  getAircraftList(context) {
    checkApi.getAircraftList((success, error, data) => {
      if (success) {
        context.commit('setAircraftList', data);
      } else {
        console.log('error', error);
      }
    });
  },
  createCheck(context, payload) {
    checkApi.createCheck(payload, (success, error, data) => {
      if (success) {
        console.log('create new check success', data);
      } else {
        console.log('error', error);
      }
    });
  },
  updateCheck(context, payload) {
    checkApi.updateCheck(payload, (success, error, data) => {
      if (success) {
        console.log('update check success', data);
      } else {
        console.log('error', error);
      }
    });
  },
  deleteCheck(context, payload) {
    checkApi.deleteCheck(payload, (success, error, data) => {
      if (success) {
        console.log('delete check success', data);
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

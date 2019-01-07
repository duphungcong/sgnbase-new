import nrcApi from '@/api/nrc';

const state = {
  nrcList: [],
  numberOfNrcs: 0,
  nrc: {},
};

const mutations = {
  setNrcList(state, nrcList) {
    state.nrcList = nrcList;
  },
  setNrc(state, nrc) {
    state.nrc = nrc;
  },
  setNumberOfNrcs(state, count) {
    state.numberOfNrcs = count;
  },
};

const actions = {
  getNrcList(context, payload) {
    nrcApi.getNrcList(payload, (success, error, data) => {
      if (success) {
        context.commit('setNrcList', data);
        context.commit('setNumberOfNrcs', data.length);
      } else {
        console.log('error', error);
      }
    });
  },
  getNrc(context, payload) {
    // let check = {
    //   name: '',
    //   start_date: new Date(),
    //   finish_date: new Date(),
    //   aircraft: null,
    // };
    // context.commit('setCheck', check);
    // if (payload.id) {
    //   // console.log('get check - id:', payload.id);
    //   checkApi.getCheck(payload, (success, error, data) => {
    //     if (success) {
    //       check = {
    //         id: data.id,
    //         name: data.name,
    //         start_date: new Date(data.start_date),
    //         finish_date: new Date(data.finish_date),
    //         aircraft: data.aircraft,
    //       };
    //       context.commit('setCheck', check);
    //     } else {
    //       console.log('error', error);
    //     }
    //   });
    // }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

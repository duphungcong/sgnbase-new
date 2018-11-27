import jwtDecode from 'jwt-decode';
import authApi from '@/api/auth';

const state = {
  token: null,
};

const mutations = {
  updateToken(state, newToken) {
    state.token = newToken;
  },
  removeToken(state) {
    state.token = null;
  },
};

const actions = {
  obtainToken(context, payload) {
    authApi.login(payload.username, payload.password, (success, error, data) => {
      if (success) {
        console.log('login success');
        context.commit('updateToken', data.token);
      } else {
        console.log('login error', error);
      }
    });
  },
  refreshToken(context) {
    const { token } = context.state;
    authApi.refreshToken(token, (success, error, data) => {
      if (success) {
        console.log('refresh success');
        context.commit('updateToken', data.token);
      } else {
        console.log('refresh error', error);
      }
    });
  },
  inspectToken(context) {
    const { token } = context.state;

    if (token) {
      const decoded = jwtDecode(token);
      const { exp } = decoded;
      const originIssuedAt = decoded.orig_iat;

      if (exp - (Date.now() / 1000) < 1800 && (Date.now() / 1000) - originIssuedAt < 628200) {
        context.dispatch('refreshToken');
      } else if (exp - (Date.now() / 1000) < 1800) {
        // DO NOTHING, DO NOT REFRESH
      } else {
        // THE CONDITION WHERE A TOKEN IS EXPIRED AS WELL
        // PROMPT USER TO RE-LOGIN
      }
    }
  },
};

const getters = {

};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

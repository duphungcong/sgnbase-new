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
  deleteToken(context) {
    context.commit('updateToken', null);
  },
  obtainToken(context, payload) {
    authApi.login(payload, (success, error, data) => {
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
    const payload = token;
    authApi.refreshToken(payload, (success, error, data) => {
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

      if (exp > Date.now() / 1000) {
        // A TOKEN IS STILL VALID
        // REFRESH TOKEN IF EXPIRE TIME < 30 MINUTES AND REFRESH TIME IS STILL VALID (< 7 DAYS)
        if (exp - (Date.now() / 1000) < 1800 && (Date.now() / 1000) - originIssuedAt < 628200) {
          // console.log('refresh');
          context.dispatch('refreshToken');
        }
      } else {
        // THE CONDITION WHERE A TOKEN IS EXPIRED AS WELL
        // PROMPT USER TO RE-LOGIN
        // console.log('expired');
        context.commit('updateToken', null);
      }
    }
  },
};

const getters = {
  loggedIn: state => state.token !== null,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

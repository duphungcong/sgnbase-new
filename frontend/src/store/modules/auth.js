import axios from 'axios';
import jwtDecode from 'jwt-decode';

const state = {
  token: null,
  endpoints: {
    obtainToken: '/auth/obtain-token',
    refreshToken: '/auth/refresh-token',
  },
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
  obtainToken(context, credential) {
    const payload = {
      username: credential.username,
      password: credential.password,
    };
    axios.post(state.endpoints.obtainToken, payload)
      .then((response) => {
        context.commit('updateToken', response.data.token);
        console.log(response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  refreshToken(context) {
    const payload = {
      token: state.token,
    };

    axios.post(state.endpoints.refreshToken, payload)
      .then((response) => {
        context.commit('updateToken', response.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  inspectToken(context) {
    const { token } = state;

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

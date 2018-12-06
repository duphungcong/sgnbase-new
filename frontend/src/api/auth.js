import http from '@/helpers/http';

const endpoints = {
  obtainToken: 'auth/obtain-token',
  refreshToken: 'auth/refresh-token',
};

export default {
  login(username, password, cb) {
    const payload = {
      username,
      password,
    };
    http.postData(endpoints.obtainToken, payload)
      .then((res) => {
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
  refreshToken(token, cb) {
    const payload = {
      token,
    };
    http.postData(endpoints.refreshToken, payload)
      .then((res) => {
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
};

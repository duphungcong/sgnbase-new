import http from '@/helpers/http';

const endpoints = {
  obtainToken: 'auth/obtain-token',
  // method: POST
  // body:
  // username (string)
  // password (string)
  refreshToken: 'auth/refresh-token',
  // method: POST
  // body:
  // token (string)
};

export default {
  login(payload, cb) {
    http.postData(endpoints.obtainToken, payload)
      .then((res) => {
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
  refreshToken(payload, cb) {
    http.postData(endpoints.refreshToken, payload)
      .then((res) => {
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
};

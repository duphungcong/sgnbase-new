import http from '@/helpers/http';

const endpoints = {
  getChecks: 'checks/',
  getCheck: 'checks/:id/',
};

export default {
  getChecks(cb) {
    http.getData(endpoints.getChecks)
      .then((res) => {
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
};

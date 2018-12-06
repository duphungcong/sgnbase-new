import http from '@/helpers/http';

const endpoints = {
  getChecks: 'checks/',
  getCheck: 'checks/:id/',
  getAircraftList: 'aircraft/',
  createCheck: 'checks/',
};

export default {
  getChecks(page, cb) {
    http.getData(endpoints.getChecks, {
      params: {
        page,
      },
    })
      .then((res) => {
        console.log('res', res.data);
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
  getAircraftList(cb) {
    http.getData(endpoints.getAircraftList, {})
      .then((res) => {
        console.log('res', res.data);
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
  createCheck(check, cb) {
    const payload = check;
    console.log('create check - payload', payload);
    http.postData(endpoints.createCheck, payload)
      .then((res) => {
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
};

import http from '@/helpers/http';

const endpoints = {
  getChecks: 'checks/',
  // method: GET
  // params:
  // page (string)
  getAircraftList: 'aircraft/',
  // method: GET
  // params: {}
  createCheck: 'checks/',
  // method: POST
  // body:
  // name (string)
  // start_date (string)
  // finish_date (string)
  // aircraft (Aircraft.object)
};

export default {
  getChecks(payload, cb) {
    http.getData(endpoints.getChecks, {
      params: payload,
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
  createCheck(payload, cb) {
    console.log('create check - payload', payload);
    http.postData(endpoints.createCheck, payload)
      .then((res) => {
        cb(true, null, res.data);
      }, (err) => {
        cb(false, err.response.data, null);
      });
  },
};

const axios = require('axios');

module.exports = (execBefore = function () { }) => {
  if (typeof execBefore === 'function') {
    axios.interceptors.request.use(execBefore);
  }
  return axios;
};

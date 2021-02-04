require('./loader/setEnvVariables');

const express = require('express')
  , app = express();

require('./route/index')(app);


module.exports = app;
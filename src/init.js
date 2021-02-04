require('./config').init();

const express = require('express')
  , app = express();


require('./routes/index')(app);


module.exports = app;
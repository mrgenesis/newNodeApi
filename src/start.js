const app = require('./loader');

require('./route/index')(app);


module.exports = app;
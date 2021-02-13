const router = require('express').Router()
  , { join } = require('path')
  , pathRoutes = join(__dirname, '..', 'route');

module.exports = require(pathRoutes)(router);


const express = require('express');
const controller = require('./../controllers/controller');

function routerApi(app) {

  const router = express.Router();
  app.use('/api', router);
  router.use('/spacesAvailable', controller);

}

module.exports = routerApi;

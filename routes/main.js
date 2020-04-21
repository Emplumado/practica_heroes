const express = require('express');
let route = express.Router();
let mainController = require('../controllers/mainController');


route.get('/', mainController.home);
route.get('/creditos',mainController.creditos);

module.exports = route;
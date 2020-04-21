const express = require('express');
let route = express.Router();
let heroesController = require('../controllers/heroesController');


route.get('/heroes',heroesController.home);
route.get('/heroes/detalle/:id', heroesController.detalle);
route.get('/heroes/:id/bio/:ok?', heroesController.id);

module.exports = route;
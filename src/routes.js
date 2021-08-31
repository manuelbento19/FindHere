const express = require('express');
const rotas = express.Router();

const middleware = require('./app/middlewares/auth');

rotas.use(middleware);
require('./app/controllers/produts')(rotas);

module.exports = rotas;
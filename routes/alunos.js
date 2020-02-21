const express = require('express');
const route = express.Router();
const AlunosController = require('../controllers/AlunosController');

route.get('/', AlunosController.index);
route.get('/aprovar/:nome', AlunosController.aprovarAluno);

module.exports = route;

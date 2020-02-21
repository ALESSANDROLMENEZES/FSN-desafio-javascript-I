const express = require('express');
const route = express.Router();
const AlunosController = require('../controllers/AlunosController');

route.get('/', AlunosController.index);
route.get('/aprovaraluno/:nome', AlunosController.aprovarAluno);
route.get('/adicionaraluno/:nome', AlunosController.adicionarAluno);
route.get('/buscaraluno/:nome', AlunosController.encontrarAluno);
route.get('/matricularaluno/:nome/:curso', AlunosController.matricularAluno);
route.get('/aplicarfalta/:nome', AlunosController.aplicarFalta);
route.get('/aplicarnota/:nome/:nota', AlunosController.aplicarNota);

module.exports = route;

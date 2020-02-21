const express = require('express');
const route = express.Router();
const alunosModel = require('../models/Alunos');

module.exports = {

  index: (req, res) => {
    res.send(alunosModel.listarAlunos());
  },
  aprovarAluno: (req, res) => {
    res.send(alunosModel.aprovarAluno(req.params.nome));
  }

};
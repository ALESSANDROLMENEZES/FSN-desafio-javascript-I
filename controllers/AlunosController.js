const express = require('express');
const route = express.Router();
const alunosModel = require('../models/Alunos');

module.exports = {

  index: (req, res) => {
    res.send(alunosModel.listarAlunos());
  },
  aprovarAluno: (req, res) => {
    res.send(alunosModel.aprovarAluno(req.params.nome));
  },
  encontrarAluno: (req, res) => {
    res.send(alunosModel.buscarAluno(req.params.nome));
  },
  adicionarAluno: (req, res) => {
    res.send(alunosModel.adicionarAluno(req.params.nome));
  },
  matricularAluno: (req, res) => {
    res.send(alunosModel.matricularAluno(req.params.nome, req.params.curso));
  },
  aplicarFalta: (req, res) => {
    res.send(alunosModel.aplicarFalta(req.params.nome));
  },
  aplicarNota: (req, res) => {
    res.send(alunosModel.aplicarNota(req.params.nome, req.params.nota));
  }

};
const express = require('express');
const app = express();
const alunosRotas = require('./routes/alunos');
const hostname = 'localhost';
const port = 3000;
const backlog = () => console.log(`Servidor ativo na porta ${port}`);

app.listen(port, hostname, backlog());

app.use(alunosRotas);
var express = require('express');
var app = express();

// Porta para subir o servidor
var serverPort = 8080;

var jsonData = require('./public/data/products.json');

// Registra a rota GET default, enviando o JSON como retorno
app.use('/', function (req, res) {
    res.send(jsonData);
});

// Inicia o servidor e avisa o usuário
app.listen(serverPort);
console.log(`[products] API escutando na porta ${serverPort}.`);

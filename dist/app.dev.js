"use strict";

var http = require('http');

var server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo Gestor de Aplecaciones\n');
});
console.log('El servidor esta corriendo YrL');
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola Mundo Gestor de Aplecaciones\n');
});


  console.log('El servidor esta corriendo YrL');

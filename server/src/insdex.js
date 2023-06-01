const http = require('http');
const data = require('./data'); // Importa el archivo data.js
const PORT = 3001;
const characters = require('./utils/data..js'); // Importa el archivo data.js


const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Configura el encabezado para permitir el acceso desde cualquier origen

  if (req.url.includes('/rickandmorty/character')) {
    const id = parseInt(req.url.split('/').pop()); // Convierte el ID del personaje obtenido de la URL a un número
    const character = characters.filter((char) => char.id === id); // Busca el personaje en el archivo data.js usando el ID convertido a número

    res.writeHead(200, { 'Content-Type': 'application/json' }); 
    res.end(JSON.stringify(character)); // Establece el encabezado de respuesta como JSON y envía el personaje encontrado
  }
}).listen(PORT, "localhost");

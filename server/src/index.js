const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index.js');
const getCharById = require('./controllers/getCharById');
const server = express();
const PORT = 3001;

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});
server.use(express.json());
server.use(morgan('dev'));

server.use('/rickandmorty', router);

server.use((req, res, next) => {
  if (req.url.includes('/rickandmorty/character')) {
    const id = req.url.split('/').pop();
    getCharById(res, id);
  } else {
    next();
  }
});

server.listen(PORT, () => {
  console.log('Server raised in port: ' + PORT);
});

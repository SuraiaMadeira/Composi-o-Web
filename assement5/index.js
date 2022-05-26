const express = require('express');
const server = express();
const filmes = require('./ind/data/Filmes.json');

server.get('/filmes', (req, res) => {
    return res.json(filmes)
});

server.listen(3001, () => {
    console.log('O servidor esta funcionando...  ')
});
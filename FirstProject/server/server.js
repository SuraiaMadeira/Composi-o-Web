const express = require('express');
const path = require('path');
const myDatabase = require('./config/database');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3006;

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

let user = [
    porto = {
        estadio: 'Dragao',
        quantidade: 300000
    },
    benfica = {
        estadio: 'Lúz',
        quantidade: 300000
    }
];

app.get('/', (request, response) => {
    response.send(
       user
    );

});

app.post('/registo', (request, response) => {

    let username = request.body.username;
    let email = request.body.email;
    let senha = request.body.senha;

    console.log(username, "\n", email, "\n", senha);
    //user.push('username', 'email', 'senha');

    response.json({
            nome: username,
            email: email,
            senha: senha,
        })/*
        myDatabase.query('INSERT INTO SET ? ', {
            nome: username,
            email: email,
            senha: senha,

        });*/
});

app.listen(port, () => {
    console.log('O servidor está a funcionar na porta: ' + port);
});
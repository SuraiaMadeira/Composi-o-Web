const express = require('express');
const path = require('path');
const myDatabase = require('./config/database');
const cors = require('cors');
const port = 3006;

const app = express();
app.use(cors());

app.get('/', (request, response) => {
    response.json(
        [
            aluno1 = {
                "nome": "Madeira",
                "email": "Madeira",
                "senha": "Madeira",
            },
            aluno2 = {
                "nome": "Madeira",
                "email": "Madeira",
                "senha": "Madeira",
            }
        ]
    );

});

app.post('/registo', (request, response) => {

    //alert('Registo')
    let username = request.body.username;
    let email = request.body.email;
    let senha = request.body.senha;

    response.json({
            nome: username,
            email: email,
            senha: senha,
        })
        /*
        myDatabase.query('INSERT INTO SET ? ', {
            nome: username,
            email: email,
            senha: senha,

        });*/
});

app.listen(port, () => {
    console.log('O servidor está a funcionar na porta: ' + port);
});
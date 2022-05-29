const express = require('express');
const path = require('path');
const myDatabase = require('./config/database');
const bodyParser = require('body-parser');
const cors = require('cors');
const sha = require('sha.js');
const salt = 12;
const port = 3006;


const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send();

});
app.post('/login', async(request, response) => {
    let email = request.body.email;
    let senha = request.body.senha;

    if (email && senha) {
        myDatabase.query('SELECT * FROM utilizador WHERE email = ? ', [email], async(error, results, fields) => {
            if (results.length > 0) {
                let sha256 = sha('sha256');
                let passwordHashed = sha256.update(senha + salt).digest("hex");
                if (results.length == 0 || !(passwordHashed == results[0].senha)) {
                    console.log('O nome do utilador ou a password está errada')
                } else {
                    console.log('login feito com sucesso')
                }
            }
        });
    }
});

app.post('/registo', async(request, response) => {

    let username = request.body.username;
    let email = request.body.email;
    let senha = request.body.senha;

    let sha256 = sha("sha256");
    let passwordHashed = sha256.update(senha + salt).digest("hex");

    myDatabase.query('INSERT INTO utilizador SET ? ', {
        nome: username,
        email: email,
        senha: passwordHashed,

    });
});

app.listen(port, () => {
    console.log('O servidor está a funcionar na porta: ' + port);
});
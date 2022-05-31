const express = require('express');
const path = require('path');
const myDatabase = require('./config/database');
const bodyParser = require('body-parser');
const cors = require('cors');
const sha = require('sha.js');
const respostas_erradas = require('./respostas_erradas');
const salt = 12;
const port = 3006;


const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send();

});

app.get('/quiz', (request, response) => {

    myDatabase.query('SELECT * FROM respostas WHERE pergunta_id = 1 ', (error, results) => {
        console.log(results);

    })

    myDatabase.query('SELECT * FROM pergunta WHERE pergunta_id =?', [1], (error, results) => {
            let titulo = results[0].titulo;
            let pontuacao = results[0].pontuacao;
            let resposta_certa = 'resposta certa é a x';

            if (results.length > 0) {
                //console.log(titulo)
                response.json({
                    respostas: {
                        titulo: titulo,
                        resultado: resposta_certa,
                        pontuacao: pontuacao,
                        resposta: {
                            //resposta_0: titulo,
                            resposta_1: 'Nauru e China ',
                            resposta_2: 'Mônaco e Canadá',
                            resposta_3: 'Malta e Estados Unidos',
                            resposta_4: 'São Marino e Índia',
                        }
                    }
                })
            }
        })
        //response.send(respostas_erradas);
        //response.end();
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
        username: username,
        email: email,
        senha: passwordHashed,

    });
});

app.listen(port, () => {
    console.log('O servidor está a funcionar na porta: ' + port);
});
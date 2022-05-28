const mysql = require('mysql');

const databaseConnection = mysql.createConnection({
    database: 'quizdb',
    host: 'localhost',
    user: 'root',
});

databaseConnection.connect(error => {
    if (error) {
        console.log('Erro ao conectar à base de dados: ' + error);
        return;
    }
    console.log('Sucesso!');
});

module.exports = databaseConnection;
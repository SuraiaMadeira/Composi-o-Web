fetch('http://localhost:3006/quiz')
    .then(response => response.json())
    .then(function(dados_servidor) {
        let div_respostas = document.getElementById('respostas');

        Object.values(dados_servidor).forEach(element => {
            console.log(element);
            let resposta = '<div class = "my-5">' +
                '<h3>' + element.resultado + '</h3>' +
                '<h4>' + element.titulo + '</h4>' +
                '<label for = "resposta"> ' + element + ' < /label>' + '<input type = "radio" name = "resposta" id = "resposta"> ' +
                '<br>' + '</div>';
            div_respostas.insertAdjacentHTML('beforeend', String(resposta));
        });
    }).catch(error => {
        console.log(error);
    })
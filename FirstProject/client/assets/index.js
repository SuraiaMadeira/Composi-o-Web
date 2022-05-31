fetch('http://localhost:3006/quiz')
    .then(response => response.json())
    .then(function(dados_servidor) {

        let div_respostas = document.getElementById('respostas');

        Object.values(dados_servidor).forEach(element => {
            //console.log(element.resposta.resposta_1);
            Object.values(element.resposta).forEach((values) => {
                console.log(values);
                let resposta = '<label for = "resposta"> ' + values + ' </label>' +
                    '<input type = "radio" name = "resposta" value="' +
                    values + ' " id = "resposta"> ' +
                    '<br>';
                div_respostas.insertAdjacentHTML('afterend', String(resposta));
            })
            let resposta = '<div class = "my-5">' +
                '<h3 id="respostaCerta"></h3>' +
                '<h4>' + element.titulo + '</h4>' +
                '</div>'
            div_respostas.insertAdjacentHTML('beforeend', String(resposta));
            /* Função para calcular a duração do jogo */
            document.getElementById('botaoResponder').addEventListener('click', function(event) {
                event.preventDefault();
                let respostaSelecionada = document.querySelector('input[name="resposta"]:checked').value;
                alert('Malta e Estados Unidos ' + 'tem: ' + 'Malta e Estados Unidos'.length + '\n' + respostaSelecionada + 'tem: ' + respostaSelecionada.length)
                if ((respostaSelecionada.length) == 'Malta e Estados Unidos'.length) {
                    if (respostaSelecionada.localeCompare('Malta e Estados Unidos') != -1) {
                        document.getElementById('respostaCerta').innerText = 'Resposta Está correcta';
                    }
                } else {
                    document.getElementById('respostaCerta').innerText = 'Resposta errada';
                }
            })
        });
    }).catch(error => {
        console.log(error);
    })

/* Função para calcular a duração do jogo */
var start = Date.now();
const tempoDoJogo = setInterval(duracaoDoTempo, 1000);

function duracaoDoTempo() {
    var delta = Date.now() - start;
    let tempo = Math.floor(delta / 1000);
    let textoTempo = document.getElementById('tempo');
    textoTempo.innerText = tempo;
    if (tempo === 8) {
        textoTempo.style.color = 'red';
    }
    if (tempo === 60) {
        textoTempo.innerText = 'Fim do jogo';
        clearInterval(tempoDoJogo);
    }
}
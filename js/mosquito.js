var altura = 0
var largura = 0
var classeTamanho = Math.floor(Math.random() * 3)
var classeLado = Math.floor(Math.random() * 2)
var vida = 1

function ajustarTamanhoTelaJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustarTamanhoTelaJogo()

function posicaoRandomica() {

    const mosquitoID = document.getElementById('mosquito')
    if (mosquitoID) {
        mosquitoID.remove()

        if (vida > 3) {
            window.location.href = '../page/gameOver.html'
        } else {
            document.getElementById('v' + vida).src = 'img/coracao_vazio.png'
            vida++
        }
    }

    const elemento = document.querySelector('#telaMosquito')
    const elementoAltura = elemento.clientHeight
    const elementoLargura = elemento.clientWidth
    console.log(elementoAltura, elementoLargura)

    posicaoX = Math.floor(Math.random() * elementoLargura) - 90
    posicaoY = Math.floor(Math.random() * elementoAltura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    var telaMosquito = document.getElementById('telaMosquito')
    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }
    
    telaMosquito.appendChild(mosquito)
}

function tamanhoAleatorio() {
    switch(classeTamanho) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoAleatorio() {
    switch(classeLado) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

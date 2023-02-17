let altura = 0
let largura = 0
let vida = 1
let pontuacao_atual = document.getElementById('pontuacao_atual')
let nivel = window.location.search
let criaMosquitoTempo = 1500

nivel = nivel.replace('?', '')

let pontos_total = []

if (nivel === 'facil') {
    criaMosquitoTempo = 1500
} else if (nivel === 'normal') {
    criaMosquitoTempo = 1000
} else if (nivel === 'dificil') {
    criaMosquitoTempo = 700
}

function ajustarTamanhoTelaJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
}
ajustarTamanhoTelaJogo()

function posicaoRandomica() {

    const mosquitoID = document.getElementById('mosquito')
    if (mosquitoID) {
        mosquitoID.remove()
        pontuacao_atual--

        if (vida >= 3) {
            window.location.href = '../../page/gameOver.html'
        } else {
            document.getElementById('v' + vida).src = '../img/coracao_vazio.png'
            vida++
        }
    }

    const elemento = document.querySelector('#telaMosquito')
    const elementoAltura = elemento.clientHeight
    const elementoLargura = elemento.clientWidth

    let posicaoX = Math.floor(Math.random() * elementoLargura) - 90
    let posicaoY = Math.floor(Math.random() * elementoAltura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY
    
    let telaMosquito = document.getElementById('telaMosquito')
    let mosquito = document.createElement('img')
    mosquito.src = '../img/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        mosquito.src = '../img/splash-mosquito.png'
        mosquito.id = 'splash_mosquito'
        setTimeout(function() {
            const splash_mosquito = document.getElementById('splash_mosquito')
            splash_mosquito.remove()
        }, 200)
        pontuacao_atual++
    }
    if (pontuacao_atual == null) {
        document.getElementById('potuacao_atual').innerHTML = 'Pontuação Atual: ' + ''
    } else {
        document.getElementById('potuacao_atual').innerHTML = 'Pontuação Atual: ' + pontuacao_atual
    }

    let obj = {}
    pontos_total.push(obj)
    console.log(pontos_total)

    telaMosquito.appendChild(mosquito)
}
console.log(pontos_total)

function tamanhoAleatorio() {
    let classeTamanho = Math.floor(Math.random() * 3)
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
    let classeLado = Math.floor(Math.random() * 2)
    switch(classeLado) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
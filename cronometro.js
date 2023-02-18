let tempo = 0
var nivel_tempo = window.location.search
nivel_tempo = nivel.replace('?', '')

if (nivel_tempo === 'facil') {
    tempo = 30
} else if (nivel === 'medio') {
    tempo = 60
} else if (nivel === 'dificil') {
    tempo = 60
}

const cronometro = setInterval(function() {
    tempo -= 1
    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = './vitoria.html'
    } else {
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)
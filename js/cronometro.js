var tempo_segundo = 10

const cronometro = setInterval(function() {
    tempo_segundo -= 1
    if (tempo_segundo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = '/page/vitoria.html'
    } else {
        document.getElementById('cronometro_segundo').innerHTML = tempo_segundo
    }
}, 1000)
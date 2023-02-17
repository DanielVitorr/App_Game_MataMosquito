function iniciarJogo() {
    let nivel = document.getElementById("nivel").value

    if (nivel === '') {
        alert('Selecione um nivel para iniciar o jogo')
        return false
    }
    window.location.href = '../../page/game.html?' + nivel
}
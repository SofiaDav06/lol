let temporizadorInterval;
let cronometroInterval;
let cronometroInicio = 0;

function iniciarTemporizador() {
    const horas = parseInt(document.getElementById('inputHoras').value);
    const minutos = parseInt(document.getElementById('inputMinutos').value);
    const segundos = parseInt(document.getElementById('inputSegundos').value);

    const tiempoTotal = horas * 3600 + minutos * 60 + segundos;
    let tiempoRestante = tiempoTotal;

    temporizadorInterval = setInterval(function () {
        const horasRestantes = Math.floor(tiempoRestante / 3600);
        const minutosRestantes = Math.floor((tiempoRestante % 3600) / 60);
        const segundosRestantes = tiempoRestante % 60;
        document.getElementById('temporizador').textContent = `${formatoNumero(horasRestantes)}:${formatoNumero(minutosRestantes)}:${formatoNumero(segundosRestantes)}`;

        if (tiempoRestante === 0) {
            clearInterval(temporizadorInterval);
            alert('¡Tiempo agotado!');
        }
        tiempoRestante--;
    }, 1000);
}

function detenerTemporizador() {
    clearInterval(temporizadorInterval);
}

function iniciarCronometro() {
    cronometroInicio = Date.now();
    cronometroInterval = setInterval(actualizarCronometro, 1000);
}

function detenerCronometro() {
    clearInterval(cronometroInterval);
    document.getElementById('cronometro').textContent = '00:00:00';
    cronometroInicio = 0;
}

function actualizarCronometro() {
    const tiempoTranscurrido = Date.now() - cronometroInicio;
    const horas = Math.floor(tiempoTranscurrido / 3600000);
    const minutos = Math.floor((tiempoTranscurrido % 3600000) / 60000);
    const segundos = Math.floor((tiempoTranscurrido % 60000) / 1000);
    document.getElementById('cronometro').textContent = `${formatoNumero(horas)}:${formatoNumero(minutos)}:${formatoNumero(segundos)}`;
}

function formatoNumero(numero) {
    return numero < 10 ? `0${numero}` : numero;
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
}

function incrementScore(team) {
    const scoreElement = document.getElementById(`${team}Score`);
    let currentScore = parseInt(scoreElement.textContent);
    currentScore++;
    scoreElement.textContent = currentScore;
}

function decrementScore(team) {
    const scoreElement = document.getElementById(`${team}Score`);
    let currentScore = parseInt(scoreElement.textContent);
    if (currentScore > 0) {
        currentScore--;
        scoreElement.textContent = currentScore;
    }
}

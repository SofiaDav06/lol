let temporizadorInterval;
let cronometroInterval;
let cronometroInicio = 0;

function sumarPunto(equipo) {
    const puntosElement = document.getElementById(`puntosEquipo${equipo.charAt(0).toUpperCase() + equipo.slice(1)}`);
    let puntos = parseInt(puntosElement.textContent) || 0;
    puntosElement.textContent = puntos + 1;
}

function restarPunto(equipo) {
    const puntosElement = document.getElementById(`puntosEquipo${equipo.charAt(0).toUpperCase() + equipo.slice(1)}`);
    let puntos = parseInt(puntosElement.textContent) || 0;
    if (puntos > 0) {
        puntosElement.textContent = puntos - 1;
    }
}
function mostrarFechaHoraActual() {
    const fechaHoraActualElement = document.getElementById('fechaHoraActual');
    const fechaHoraActual = new Date().toLocaleString();
    fechaHoraActualElement.textContent = fechaHoraActual;
}

mostrarFechaHoraActual();


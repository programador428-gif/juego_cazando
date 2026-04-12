let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");
const ALTO_GATO = 50;
const ANCHO_GATO = 50;
const ALTO_COMIDA = 20;
const ANCHO_COMIDA = 20;
let gatoY = canvas.height / 2 - ALTO_GATO;
let gatoX = canvas.width / 2 - ANCHO_GATO / 2;
let comidaY = canvas.height - ALTO_COMIDA;
let comidaX = canvas.width - ANCHO_COMIDA;
let puntaje = 0;
// Funciones

function graficarRectangulo(x, y, ancho, alto, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarGato() {
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "black");
}

function graficarComida() {
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "red");
}

function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda() {
    gatoX -= 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColisiones();
}

function moverDerecha() {
    gatoX += 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColisiones();
}

function moverArriba() {
    gatoY -= 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColisiones();
}

function moverAbajo() {
    gatoY += 10;
    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColisiones();
}

function detectarColisiones() {
    if (
        gatoX + ANCHO_GATO > comidaX &&
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoY + ALTO_GATO > comidaY &&
        gatoY < comidaY + ALTO_COMIDA
    ) {
        comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
        comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);
        puntaje++;
        mostrarEnSpan('puntos', puntaje);
    }
}

function iniciarJuego() {
    graficarGato();
    graficarComida();
}
// Variables
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
let tiempo = 10;
let temporizador;

// Funciones
function generarAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function mostrarEnSpan(id, valor) {
    document.getElementById(id).innerText = valor;
}

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

// Movimientos
window.addEventListener('keydown', function (e) { teclas[e.key] = true; });
window.addEventListener('keyup', function (e) { teclas[e.key] = false; });


iniciarTeclado();

function moverIzquierda() {
    gatoX -= 10;
    actualizarPantalla();
}

function moverDerecha() {
    gatoX += 10;
    actualizarPantalla();
}

function moverArriba() {
    gatoY -= 10;
    actualizarPantalla();
}

function moverAbajo() {
    gatoY += 10;
    actualizarPantalla();
}

// Pantalla
function actualizarPantalla() {
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
        tiempo = 10;
        mostrarEnSpan('tiempo', tiempo);
        mostrarEnSpan('puntos', puntaje);
    }
}

// Tiempo
function restarTiempo() {
    clearInterval(temporizador);

    temporizador = setInterval(function () {
        tiempo--;
        mostrarEnSpan('tiempo', tiempo);

        if (tiempo <= 0) {
            clearInterval(temporizador);
            alert("Game Over!");
        }

        if (puntaje === 6) {
            clearInterval(temporizador);
            alert("¡Ganaste!");
        }
    }, 1000);
}

function iniciarJuego() {
    mostrarEnSpan('tiempo', tiempo);
    graficarGato();
    graficarComida();
    restarTiempo();
}

function reiniciar() {
    clearInterval(temporizador);
    puntaje = 0;
    tiempo = 10;
    gatoX = canvas.width / 2 - ANCHO_GATO / 2;
    gatoY = canvas.height / 2 - ALTO_GATO;
    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;

    mostrarEnSpan('puntos', puntaje);
    mostrarEnSpan('tiempo', tiempo);

    actualizarPantalla();
    restarTiempo();
}
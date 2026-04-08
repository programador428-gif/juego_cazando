function iniciarJuego() {
    let canvas = document.getElementById("areaJuego");
    let ctx = canvas.getContext("2d");
    const ALTO_GATO = 25;
    const ANCHO_GATO = 50;
    const ALTO_COMIDA = 20;
    const ANCHO_COMIDA = 20;
    let gatoY = canvas.height / 2 - ALTO_GATO;
    let gatoX = canvas.width / 2 - ANCHO_GATO / 2;
    let comidaY = canvas.height - ALTO_COMIDA;
    let comidaX = canvas.width - ANCHO_COMIDA;

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
    graficarGato();
    graficarComida();
}
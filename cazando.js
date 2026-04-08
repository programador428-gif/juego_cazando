function iniciarJuego() {
    let canvas = document.getElementById("areaJuego");
    let ctx = canvas.getContext("2d");

    function graficarGato() {
        ctx.fillStyle = "black";
        ctx.fillRect((canvas.width / 2) - 50, (canvas.height / 2) - 25, 100, 50);
    }

    graficarGato();
}
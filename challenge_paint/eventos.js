var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var cuadrito = document.getElementById("area_de_dibujo"),
    papel = cuadrito.getContext("2d"),
    linea_grosor = document.getElementById("grosor_linea"), 
    x_start, y_start,x_end, y_end,
    estado = 0;
    console.log(linea_grosor.value);
document.addEventListener("mousedown",dibujarMousePresionar);
document.addEventListener("mouseup",dibujarMouseSoltar);
document.addEventListener("mousemove",dibujarMouseMove);
document.addEventListener("change", (evento) => {
    var valor_linea_grosor = document.getElementById("valor_grosor_linea");
    valor_linea_grosor.textContent = linea_grosor.value;
});

function dibujarMousePresionar(evento) {
    estado = 1;
    x_start = evento.layerX;
    y_start = evento.layerY;
}
function dibujarMouseSoltar(evento) {
    estado = 0; 
    x_end = evento.layerX;
    y_end = evento.layerY;
}
function dibujarMouseMove(evento) {
    // console.log(x_start,y_start,x_end,y_end);
    var colorcito = "blue";
    if (estado == 1) {
        dibujarLinea(colorcito, x_start, y_start, evento.layerX, evento.layerY, papel);
    }
    x_start = evento.layerX;
    y_start = evento.layerY;
}
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final,lienzo) {
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = color;
    lienzo.lineWidth = linea_grosor.value;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
}

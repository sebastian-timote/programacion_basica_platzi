var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var cuadrito = document.getElementById("area_de_dibujo"),
    papel = cuadrito.getContext("2d"),
    x = 150,
    y = 150;
document.addEventListener("keyup",dibujarTeclado);

function dibujarTeclado(evento) {
    var colorcito = "blue",
        movimiento = 10;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x , y - movimiento, papel);
            y = y - movimiento;
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y , x , y + movimiento, papel);
            y = y + movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y , x - movimiento, y , papel);
            x = x - movimiento;
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y , x + movimiento, y , papel);
            x = x + movimiento;
            break;
        default:
            console.log("otra tecla");
            break;
    }
}

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final,lienzo) {
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
    
}
dibujarLinea("red", 149, 149, 151 , 151, papel);
// console.log(teclas);

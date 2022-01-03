//javascript primero carga las funciones y despues el resto del codigo
var d = document.getElementById("dibujito"),
    texto = document.getElementById("texto_lineas"),
    boton = document.getElementById("botoncito"),
    ancho = d.width,
    lienzo = d.getContext("2d");

boton.addEventListener("click", dibujoPorClick);//no uso parentesis() por que no quiero que se dispare de una vez sino hasta que se ejecute el click

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
}
function dibujoPorClick() {
    lienzo.clearRect(0,0, d.width, d.height);//esta linea borra dibujo anterior
    var lineas = parseInt(texto.value),
        espacio = ancho/lineas,
    l = 0,
    xf,yi,
    colorcito = "#AAF";
    for ( l = 0; l < lineas; l++) {
        yi = espacio * l;
        xf = espacio * (l + 1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
    }
}




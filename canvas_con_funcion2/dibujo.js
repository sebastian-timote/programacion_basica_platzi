var d = document.getElementById("dibujito"),
    lienzo = d.getContext("2d"),
    lineas = 30,
    l = 0,
    xf,yi,
    colorcito = "#AAF"
    // yi = 0,
    // xf = 10;
    console.log(lienzo);

// while (l < lineas) {
//     // l = l + 1;
//     yi = 10 * l;
//     xf = 10 * (l + 1);
//     dibujarLinea(colorcito, 0, yi, xf, 300);
//     l = l + 1;
//     // yi = yi + 10;
//     // xf = xf + 10;
//     // console.log("lineas");
// }
for ( l = 0; l < lineas; l++) {
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
}
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
    
}




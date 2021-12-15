var d = document.getElementById("dibujito"),
    lienzo = d.getContext("2d");
    console.log(lienzo);

function dimension(colorcito, dim_x_inicial,dim_x_final,dim_y_inicial, dim_y_final) {
    let xf,yi,
        dim = dim_y_final - dim_y_inicial,
        lineas = dim / 10;
    if (dim_x_inicial == 0 || dim_x_inicial == 150) {
        dim_x_inicial = dim_x_inicial + 10;
    }
    for ( let l = 0; l < lineas; l++) {
        console.log(l);
        yi = dim_y_inicial + (10 * l);
        xf = dim_x_inicial + (l * 10);
        dibujarLinea(colorcito, dim_x_inicial, yi, xf, dim_y_final);
    }
}
function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) {
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_inicial, y_inicial);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
}
dimension("#AAF",0,150,0,150);
dimension("#AAF",0,150,150,300);
dimension("#AAF",150,300,0,150);
dimension("#AAF",150,300,150,300);
dimension("#AAF",0,300,0,300);




// dimension("#AAF", 0, 300);




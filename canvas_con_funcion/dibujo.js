
var d = document.getElementById("dibujito"),
    lienzo = d.getContext("2d");
    console.log(lienzo);

function dibujarCirculo(color, x_inicial, y_inicial, x_radio, y_radio) {
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = color;
    // Rotación expresada en radianes,
    // que puedes obtener dividiendo
    // Math.PI. Por ejemplo, para una
    // elipse "horizontal" la rotación
    // debería estar en Math.PI / 2
    let rotacion = 0,
    anguloInicio = 0,
    anguloFin = Math.PI * 2;
    lienzo.ellipse(x_inicial, y_inicial, x_radio, y_radio, rotacion, anguloInicio, anguloFin);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
    
}

dibujarCirculo("green", 125, 125, 70, 50);//cabeza
dibujarCirculo("green", 125, 130, 55, 35);//circulo 2 cabeza
dibujarCirculo("green", 90, 130, 13, 13);//ojo1
dibujarCirculo("green", 90, 130, 5, 5);//oreola ojo1
dibujarCirculo("green", 155, 130, 13, 13);//ojo2
dibujarCirculo("green", 155, 130, 5, 5);//oreola ojo2
dibujarCirculo("green", 165, 195, 13, 13);//mano
dibujarCirculo("green", 80, 195, 13, 13);//mano2
    //cuerpo//
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = "green";
    lienzo.moveTo(91, 169);
    lienzo.lineTo(80, 183);
    lienzo.moveTo(160, 169);
    lienzo.lineTo(170, 183);//brazos
    lienzo.moveTo(152, 200);
    lienzo.lineTo(150, 205);
    lienzo.lineTo(150, 230);
    lienzo.lineTo(145, 235);
    lienzo.lineTo(135, 235);
    lienzo.lineTo(130, 230);
    lienzo.lineTo(130, 205);
    lienzo.lineTo(120, 205);
    lienzo.lineTo(120, 230);
    lienzo.lineTo(115, 235);
    lienzo.lineTo(105, 235);
    lienzo.lineTo(100, 230);
    lienzo.lineTo(100, 205);
    lienzo.moveTo(93, 195);//brazo2
    lienzo.lineTo(100, 205);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
    //end cuerpo//
    //end cara garu//

var d = document.getElementById("dibujito"),
    lienzo = d.getContext("2d");
    console.log(lienzo);
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = "red";
    lienzo.moveTo(100, 100);//me ubico en la poosicio 100 100
    lienzo.lineTo(200, 200);//me ubico en la posicion 200 200
    lienzo.stroke();//dibuja linea
    lienzo.closePath();//cierra el dibujo
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = "yellow";
    lienzo.moveTo(300, 50);
    lienzo.lineTo(50, 100);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
    ///CARA GARU///
    //circulo 1//
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = "green";
    let x = 125,
	y = 125,
	radioX = 70,
	radioY = 50,
	// Rotación expresada en radianes,
	// que puedes obtener dividiendo
	// Math.PI. Por ejemplo, para una
	// elipse "horizontal" la rotación
	// debería estar en Math.PI / 2
	rotacion = 0,
	anguloInicio = 0,
	anguloFin = Math.PI * 2;
    lienzo.ellipse(x, y, radioX, radioY, rotacion, anguloInicio, anguloFin);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
    //end circulo1//
    //circulo2//
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = "green";
    x = 125,
	y = 130,
	radioX = 55,
	radioY = 35,
    lienzo.ellipse(x, y, radioX, radioY, rotacion, anguloInicio, anguloFin);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
    //ojos1 //
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = "green";
    x = 90,
	y = 130,
	radioX = 13,
	radioY = 13,
    lienzo.ellipse(x, y, radioX, radioY, rotacion, anguloInicio, anguloFin);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = "green";
    x = 90,
	y = 130,
	radioX = 5,
	radioY = 5,
    lienzo.ellipse(x, y, radioX, radioY, rotacion, anguloInicio, anguloFin);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
    //end ojo1
    //ojo2//
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = "green";
    x = 155,
	y = 130,
	radioX = 13,
	radioY = 13,
    lienzo.ellipse(x, y, radioX, radioY, rotacion, anguloInicio, anguloFin);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = "green";
    x = 155,
	y = 130,
	radioX = 5,
	radioY = 5,
    lienzo.ellipse(x, y, radioX, radioY, rotacion, anguloInicio, anguloFin);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
    //end ojo2//
    //manos//
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = "green";
    x = 165,
	y = 195,
	radioX = 13,
	radioY = 13,
    lienzo.ellipse(x, y, radioX, radioY, rotacion, anguloInicio, anguloFin);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
    lienzo.beginPath();//arranca a dibujar
    lienzo.strokeStyle = "green";
    x = 80,
	y = 195,
	radioX = 13,
	radioY = 13,
    lienzo.ellipse(x, y, radioX, radioY, rotacion, anguloInicio, anguloFin);
    lienzo.stroke()
    lienzo.closePath();//cierra el dibujo
    //end manos//
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

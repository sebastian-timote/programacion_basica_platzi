var jf = require("johnny-five"),
    circuito = new jf.Board(),
    bombillo, motorServ, celda,vOndear = 0;

circuito.on("ready", prender);

function prender() {
    var configuracion = {
        pin: "A0",
        freq: 50
    }
    celda = new jf.Sensor(configuracion);
    bombillo = new jf.Led(13);//puerto 13 de arduino
    bombillo.off();//esta inverso al estar off enciende el led y on lo apaga

    motorServ = new jf.Servo(9);//puerto 9 de arduino
    motorServ.to(0);//posicion de servo ver hasta que angulo se puede mover el servo
    ondear();
}
function ondear() {
    console.log("luz: " + celda.value);
    var luz = celda.value;
    if (luz > 800) {
        if (vOndear = 1) {
            vOndear = 0;
            motorServ.to(70);
        }else {
            vOndear = 1;
            motorServ.to(110);
        }    
    }else {
        motorServ.to(150);
    }
    setTimeout(ondear, 1000);//funcion que autoinvoca la funcion cada segundo
}
/**se crea funcion recursiva que se auto invoque cada segundo y nos muestre el valor de la foto celda
la arduino actua tan rapido que no es capaz de tomar el valor de la fotocelda se crea funcion recursiva que se llama asi mismo cada segundo*/

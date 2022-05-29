var jf = require("johnny-five");
var circuito = new jf.Board();

circuito.on("ready", prender);//cuando este listo dispare funcion

function prender() {
    var led1 = new jf.Led(10);
    var led2 = new jf.Led(12);
    led1.blink(500);
    led2.blink(200);
    console.log("hola mundo");
}
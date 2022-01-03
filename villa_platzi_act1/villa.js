//se dibuja numeros aleatorios de la vaca y el pollo y se cambian de posicion cada vez que el cerdo camina
//y por teclado se mueve el cerdo

var vp = document.getElementById("villaplatzi"),
    papel = vp.getContext("2d"),
    mapa = "img/tile.png";
var vaca = {
    url: "img/vaca.png",
    cargaOk: false
};
var fondo = {
    url: "img/tile.png",
    cargaOk: false
};
var cerdo = {
    url: "img/cerdo.png",
    cargaOk: false
};
var pollo = {
    url: "img/pollo.png",
    cargaOk: false
};
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var xi_cerdo = 80,
    yi_cerdo = 80;
fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);
pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);
cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);
document.addEventListener("keyup", moverCerdo);

var cantidad = aleatorio(5, 25);
function cargarFondo() {
    fondo.cargaOk = true;//tiene que ir despues dl evento load por que si lo hacemos antes talvez todavia no este cargada la img
    dibujar();
}
function cargarVaca() {
    vaca.cargaOk = true;
    dibujar();
}
function cargarPollo() {
    pollo.cargaOk = true;
    dibujar();
}
function cargarCerdo() {
    cerdo.cargaOk = true;
    dibujar();
}
function moverCerdo(e) {
    var movimiento = 10;
    switch (e.keyCode) {
        case teclas.UP:
            yi_cerdo = yi_cerdo - movimiento;
            if (yi_cerdo < -40) {//cuando se salga de la pantalla empiece al otro lado
                yi_cerdo = yi_cerdo  + vp.height;
            }
            dibujar();
            break;
        case teclas.DOWN:
            yi_cerdo = yi_cerdo + movimiento;
            if (yi_cerdo > 450) {//cuando se salga de la pantalla empiece al otro lado
                yi_cerdo = yi_cerdo  - vp.height;
            }
            dibujar();
            break;
        case teclas.LEFT:
            xi_cerdo = xi_cerdo - movimiento;
            if (xi_cerdo < -40) {//cuando se salga de la pantalla empiece al otro lado
                xi_cerdo = xi_cerdo  + vp.height;
            }
            dibujar();
            break;
        case teclas.RIGHT:
            xi_cerdo = xi_cerdo + movimiento;
            if (xi_cerdo > 450) {//cuando se salga de la pantalla empiece al otro lado
                xi_cerdo = xi_cerdo  - vp.height;
            }
            dibujar();
            break;
        default:
            console.log("pulse algo valido, es decir las flechas del teclado ");
            break;
    }
}
function dibujar() {
    if (fondo.cargaOk) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (vaca.cargaOk) {
        console.log(cantidad);
        for (let v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            x = x * 60;//para que no aparezca tantas vacs encima de otras
            y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if (cerdo.cargaOk) {
        papel.drawImage(cerdo.imagen, xi_cerdo, yi_cerdo);
    }
    if (pollo.cargaOk) {
        for (let v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            x = x * 60;//para que no aparezca tantas vacs encima de otras
            y = y * 60;
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}
function aleatorio(mini, maxi) {
    var resultado = Math.floor(Math.random()* (maxi - mini + 1 )) + mini;
    return resultado;
}

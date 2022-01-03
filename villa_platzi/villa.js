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
// function dibujarPollo() {
//     papel.drawImage(pollo, 300, 150);
// }
// function dibujarCerdo() {
//     papel.drawImage(cerdo, 10, 300);
// }
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
        papel.drawImage(cerdo.imagen, 10, 300);
    }
    if (pollo.cargaOk) {
        papel.drawImage(pollo.imagen, 300, 150);
    }
}
function aleatorio(mini, maxi) {
    var resultado = Math.floor(Math.random()* (maxi - mini + 1 )) + mini;
    return resultado;
}

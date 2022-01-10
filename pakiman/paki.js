//array asociativo
var imagenes = [];
imagenes["cauchin"] = "img/vaca.png";//en el indice estamos colocando un nombre en vez de un numero 
imagenes["pokacho"] = "img/pollo.png";//el index cambia de numero a un nombre
imagenes["tocinauro"] = "img/cerdo.png";
//el array de arriba es igual que hacer un objeto literal(json) aunque tienen sus diferencias 
// var imagenes1 = {
//     cauchin: "vaca.png",
//     pokacho: "pollo.png",
//     tocinauro: "cerdo.png"
// }
var coleccion = [];
coleccion.push(new Pakiman("cauchin", 100, 30));
coleccion.push(new Pakiman("pokacho", 80, 50));
coleccion.push(new Pakiman("tocinauro", 120, 40));

// for (var poke in coleccion) {/ esta instruccion se nos trae el index solamente 
//     console.log(poke);
// }
for (var poke of coleccion) {// esta instruccion nos trae todo el objeto
    poke.mostrar();
}
// for (var poke of imagenes[0]) {// no funciona esta instruccion ya que aparece el array sin index 
//     console.log(poke);
// }


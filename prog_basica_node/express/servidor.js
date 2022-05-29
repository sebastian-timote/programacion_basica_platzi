//http://127.0.0.1:8989/
var timote = require("express");
var aplicacion = timote();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);


function inicio(peticion, resultado) {//peticion lo que me pide el navegador, resultado lo que entrago
    resultado.send("este es el <strong>home</strong>");
}
function cursos(peticion, resultado) {//peticion lo que me pide el navegador, resultado lo que entrago
    resultado.send("este es el <strong>cursos</strong>");
}

aplicacion.listen(8989);
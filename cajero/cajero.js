// var cash = new Billete(50, 2);
//clase 23
var cash = document.getElementById("dinero"),//toda las cajas de texto son string no numeros
    extraer = document.getElementById("retirar"),
    resultado = document.getElementById("resultado"),
    total_dinero = 210,
    entregado = [],
    cant_billete_necesita,div;
var caja = [];
caja.push(new Billete(50, 4));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));

extraer.addEventListener("click", entregaDinero);
function entregaDinero() {
    var dinero = parseInt(cash.value);
    if (dinero == 0 || dinero < 0 ) {
        if (dinero == 0 ) {
            resultado.innerHTML = "Para que vienes al cajero";
        }else if (dinero < 0){
            resultado.innerHTML = "Ingresa digito valido";
        }
    }else if (dinero <= total_dinero) {
        for ( var b of caja) {
            if (dinero > 0) {
                div = Math.floor(dinero / b.valor);
                if (div > b.cantidad) {
                    cant_billete_necesita = b.cantidad;
                }else {
                    cant_billete_necesita = div;
                }
                entregado.push(new Billete(b.valor, cant_billete_necesita));
                dinero = dinero - (b.valor * cant_billete_necesita);
            }
        }
        console.log(entregado);
        resultado.innerHTML = "por favor espere su dinero:<br/>";
        for (var e of entregado) {
            if ( e.cantidad != 0 ){
                resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $ " + e.valor + "<br/>";
            }
        }
    }else{
        resultado.innerHTML = "no cuenta con la cantidad solicitada";
    }
}



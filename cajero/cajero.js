// var cash = new Billete(50, 2);
var cash = document.getElementById("dinero"),
    extraer = document.getElementById("retirar"),
    totalDinero = 210,
    entregado = [],
    papeles,div,dinero;
var caja = [];
caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));

extraer.addEventListener("click", entregaDinero);
function entregaDinero() {
    if (cash.value <= totalDinero) {
        for ( var b of caja) {
            if (cash.value > 0) {
                div = Math.floor(cash.value / b.valor);
                if (div > b.cantidad) {
                    
                }
            }
            console.log(cash.value);
        }
    }else{
        alert("no cuenta con la cantidad solicitada");
    }
}



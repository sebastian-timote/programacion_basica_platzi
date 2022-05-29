var bancoCliente = 1;
var cuentaCliente = true;
var saldoCliente = 1000000;
var bancoDestino = document.getElementById("bancos_destino");
var cuentaDestino = document.getElementById("cuenta_destino");
var botonRetirar = document.getElementById("retirar");
var montoTransferir = document.getElementById("monto_transferir");
var dataTransferencia = document.getElementById("datos_transferencia");
var horaTransferencia= 9;//hora militar
var impTransaccionOtroBanco;
var saldoFinal;
var estado;

botonRetirar.addEventListener("click", transferir);

function transferir() {
    var valorAtransferir = parseInt(montoTransferir.value);
    if (bancoDestino.value == 1) {
        if(cuentaCliente == true && (valorAtransferir <= saldoCliente && valorAtransferir != 0) && ((horaTransferencia >= 9 && horaTransferencia <= 12 )|| (horaTransferencia >= 15 && horaTransferencia <= 20) )){
            console.log("transaccion hecha");
            estado = 1;
        }else{
            console.log("no fue posible realizar la transaccion verifique datos ingresados recuede el horario de atencion de 9:00 a 12:00 y de 15:00 a 20:00");
            estado = 0;
        }
        impTransaccionOtroBanco = 0;
        
    }else {
        impTransaccionOtroBanco = 100;
        if(cuentaCliente == true && (valorAtransferir + impTransaccionOtroBanco <= saldoCliente && valorAtransferir != 0) && ((horaTransferencia >= 9 && horaTransferencia <= 12 )|| (horaTransferencia >= 15 && horaTransferencia <= 20) )){
            console.log("transaccion hecha");
            estado = 1;
        }else{
            console.log("no fue posible realizar la transaccion verifique datos ingresados recuerde el horario de atencion de 9:00 a 12:00 y de 15:00 a 20:00");
            estado = 0;
        }
        
    }
    saldoFinal = saldoCliente - valorAtransferir;
    if (estado) {
        dataTransferencia.innerHTML = `<b>transferencia realizada</b><br/>Monto transferido:${valorAtransferir}<br/>saldo: ${saldoFinal}<br/>valor transferencia a otro banco: ${impTransaccionOtroBanco}`;
    }else{
        dataTransferencia.innerHTML = "no fue posible realizar la transaccion verifique datos ingresados recuerde el horario de atencion de 9:00 a 12:00 y de 15:00 a 20:00";
    }
    
}
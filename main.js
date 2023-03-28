let nombreUser;
let transporte;
let precioTransporte;
let cantidadKm;
let total;
let continuar

nombreUser = prompt("Bienvenido al cotizador de transporte! Ingrese su nombre")

alert(nombreUser + ", Muchas gracias por considerarnos para cotizar tu transporte. Comencemos!")

do {
    transporte = prompt("Ingrese el nombre del transporte que desea cotizar:                   1.Moto              2.Camioneta     3.Camion     4:Semirremolque");

    // VALIDACION SELECCION DE TRANSPORTE //// 
    while (transporte != "Moto" && transporte != "Camioneta" && transporte != "Camion" && transporte != "Semirremolque") {
        transporte = prompt("El transporte seleccionado es inválido, Ingrese otro por favor");
    }

    precioTransporte = parseFloat(prompt(nombreUser + " has seleccionado " + transporte + ". Por favor, seleccionar el precio por kilómetro asignado a su transporte elegido.             1.Moto= 5 usd/km     2.Camioneta= 10 usd/km     3.Camion 20 usd/km      4:Semirremolque= 25 usd/km"));

    // VALIDACION PRECIO TRANSPORTE
    while (precioTransporte != 5 && precioTransporte != 10 && precioTransporte != 20 && precioTransporte != 25) {
        precioTransporte = prompt("El precio seleccionado es inválido. Ingrese alguno de los montos detallados previamente, por favor");
    }

    cantidadKm = prompt("Ingrese cantidad de Kilómetros a considerar");
    // VALIDACION CANTIDAD DE KILOMETROS
    while (cantidadKm <= 0){
        cantidadKm = prompt ("El kilometraje seleccionado es inválido, por favor ingrese un valor mayor a 0 Km")
    }

    total = precioTransporte * cantidadKm;
    alert("La cotización total de su " + transporte + " considerando un total de " + cantidadKm + " Km, es USD " + total);
    continuar = prompt("Desea continuar cotizando otro transporte? Por favor, ingresar Si/No");
}
while (continuar == "Si");
alert("Un placer ayudarte, hasta la próxima cotización!");


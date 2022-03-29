let precio = "";
let cuotas = "";
alert("Bienvenido a Espacio Obligado")
const calcularPrecioUnico = (precio, cuotas) => "Total a pagar " + Math.round((precio / cuotas)) + "$. ";
const calcularPrecio = (precio, cuotas) => "Serian " + Math.round((precio / cuotas)) + "$ mensuales durante " + cuotas + " meses.";
const interes = (precio, cuotas) => "Serian " + Math.round((precio / cuotas) * 0.05 + (precio / cuotas)) + "$ mensuales durante " + cuotas + " meses.";
do {
    precio = parseInt(prompt("Cuanto queres gastar?"));
    cuotas = parseInt(prompt("Tenemos hasta 3 cuotas sin interes, maximo 6 cuotas con 5% de recargo.\nCuantas queres?"));
} while (isNaN(precio) || isNaN(cuotas));
if (cuotas == 1) {
    alert(calcularPrecioUnico(precio, 1));
} else if (cuotas == 2) {
    alert(calcularPrecio(precio, 2));
} else if (cuotas == 3) {
    alert(calcularPrecio(precio, 3));
} else if (cuotas == 4) {
    alert(interes(precio, 4));
} else if (cuotas == 5) {
    alert(interes(precio, 5));
} else if (cuotas == 6) {
    alert(interes(precio, 6));
}





/*
Orden de compras

Crear un programa que tome la orden de compra de un local. 
Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos, uno por uno, 
mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar el pago. 
Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. 
Los precios de los productos deben estar definidos de antemano en variables.
*/


const cervezaPrecio = 50;
const galletasPrecio = 25;
const mantecolPrecio = 15;


alert ("Buenos dias, tomaremos su orden de compras.");

let cervezas = Number(prompt ("ingrese la cantidad de cervezas que quiere comprar"));
let galletas = Number(prompt ("ingrese la cantidad de galletas que quiere comprar"));
let mantecol = Number(prompt ("ingrese la cantidad de mantecol que quiere comprar"));

alert (`El valor total de la compra de los tres productos es de ${(cervezas*cervezaPrecio) + (galletas * galletasPrecio) + (mantecol * mantecolPrecio)}`);
    
totalCompra = ((cervezas*cervezaPrecio) + (galletas * galletasPrecio) + (mantecol * mantecolPrecio));

let cuotas = Number(prompt (`En cuantas cuotas desea el pago? 
Elegir 1, 2 o 3 cuotas`));

alert (`Detalle: 
Valor total de la compra = ${totalCompra}
Cuotas elegidas = ${cuotas}
Monto final por cuota = ${totalCompra / cuotas}`);




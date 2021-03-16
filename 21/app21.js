/*
Calculador gastos

Crear un programa que pida al usuario cuanto dinero disponible tiene, y 
vaya preguntando cuánto tiene que pagar por cada servicio, pidiendo el nombre del servicio y 
el monto a pagar, uno a la vez. 
Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, 
utilizando una variable, y mostrar cuánto dinero disponible queda. 
Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, 
además del dinero disponible que le queda. Hacerlo con 3 servicios.
*/

let dineroDisponible = Number(prompt ("cuanto dinero disponible tiene?"));


let primerServicio = prompt (`Cual es el nombre del primer servicio a pagar? `);
let primerServicioMonto = Number(prompt (`Cual es el monto a pagar del servicio ${primerServicio}`));
alert (`El dinero disponible hasta el momento es ${dineroDisponible - primerServicioMonto} pesos`); 

let segundoServicio = prompt (`Cual es el nombre del segundo servicio a pagar?`);
let segundoServicioMonto = Number(prompt (`Cual es el monto a pagar del servicio ${segundoServicio}`));
alert (`El dinero disponible hasta el momento es ${dineroDisponible - primerServicioMonto - segundoServicioMonto} pesos`); 


let tercerServicio = prompt (`Cual es el nombre del tercer servicio a pagar?`);
let tercerServicioMonto = Number(prompt (`Cual es el monto a pagar del servicio ${tercerServicio}`));
alert (`El dinero disponible hasta el momento es ${dineroDisponible - primerServicioMonto - segundoServicioMonto - tercerServicioMonto} pesos`); 

alert ( ` servicios a pagar : 
${primerServicio}= ${primerServicioMonto}
${segundoServicio}= ${segundoServicioMonto}
${tercerServicio}= ${tercerServicioMonto}
El total de los servicios a pagar es de ${primerServicioMonto + segundoServicioMonto + tercerServicioMonto} pesos
El dinero disponible es de ${dineroDisponible - primerServicioMonto - segundoServicioMonto - tercerServicioMonto } pesos` );

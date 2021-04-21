/*
Incremento

Crear un programa que pida ingresar una número de partida y 
una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren 
el número del mensaje y el total incrementado hasta el momento 
(p. ej.: empezando con 5 e incrementando 5, 
    "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).
*/

let numeroPartida = Number(prompt ("ingrese un número de partida"));
let incremento = Number(prompt ("ingrese la cantidad a ir incrementando"));

alert (`El primer incremento es un total de ${numeroPartida + incremento}`);
alert (`El segundo incremento es un total de ${numeroPartida + (incremento*2)}`);
alert (`El tercer incremento es un total de ${numeroPartida + (incremento*3)}`);
alert (`El cuarto incremento es un total de ${numeroPartida + (incremento*4)}`);
alert (`El quinto incremento es un total de ${numeroPartida + (incremento*5)}`);


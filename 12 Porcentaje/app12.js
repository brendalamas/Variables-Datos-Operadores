/*
Porcentaje

Crear un programa que pida al usuario ingresar un número, 
y luego el porcentaje que se desea obtener del mismo. 
Devolver un mensaje muestre el porcentaje de dicho número.
*/

let numero = Number(prompt ("ingrese un numero"));
let porcentaje = Number(prompt ("ingrese el porcentaje que desea obtener"));

alert (` el porcentaje del numero ingresado es ${((numero * porcentaje)/100)}`);

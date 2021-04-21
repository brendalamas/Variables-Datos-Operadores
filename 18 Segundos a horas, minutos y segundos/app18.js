/*
Segundos a horas, minutos y segundos

Crear un programa que pida ingresar una cantidad en segundos y 
muestre un mensaje con el resultado de la conversión en horas, minutos y 
segundos que corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). 
(Usar operador módulo)
*/

let segundos = prompt ("ingresar una cantidad en segundos asi se realiza la conversion");

alert (`la conversion es ${segundos / 3600} hora y ${segundos % 60} segundos`);
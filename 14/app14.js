/*
Duración vuelo

Crear un programa que pida al usuario ingresar, por separado, 
3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. 
Al final debe mostrar un mensaje que liste todas las escalas con su duración 
y la duración total del vuelo.
*/

let primerEscala = prompt ("ingrese la primer escala del vuelo");
let primerTiempo = Number(prompt (" ingrese el tiempo de la primer escala"));

let segundaEscala = prompt ("ingrese la segunda escala del vuelo");
let segundoTiempo = Number(prompt (" ingrese el tiempo de la segunda escala"));

let tercerEscala = prompt ("ingrese la tercer escala del vuelo");
let tercerTiempo = Number(prompt (" ingrese el tiempo de la tercer escala"));

alert (`Estas son todas las escalas con su duracion: 
(${primerEscala}, ${primerTiempo} min); (${segundaEscala}, ${segundoTiempo} min); (${tercerEscala}, ${tercerTiempo} min). 
La duracion total del vuelo es ${primerTiempo + segundoTiempo + tercerTiempo} minutos`);




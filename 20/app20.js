/*
Cantidad de huéspedes

Crear un programa que pida al usuario ingresar, de a uno por vez, 
cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.
*/

let habitacionParaDos = Number(prompt ("ingrese cuantas habitaciones tiene para 2 personas"));
let habitacionParaTres = Number(prompt ("ingrese cuantas habitaciones tiene para 3 personas"));
let habitacionParaCuatro = Number(prompt ("ingrese cuantas habitaciones tiene para 4 personas"));

alert (`El maximo de huespedes que pueden albergar segun las habitacion es de ${ (habitacionParaDos * 2) + (habitacionParaTres*3) + (habitacionParaCuatro*4)}`);


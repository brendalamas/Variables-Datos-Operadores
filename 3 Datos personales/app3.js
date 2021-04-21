/*
Datos personales

Crear un programa que pida al usuario ingresar, por separado, 
nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: 
"Nuevo usuario agregado al sistema:" y liste todos los datos juntos.
*/

let nombre = prompt ("ingrese su nombre");
let apellido = prompt ("ingrese su apellido");
let edad = Number(prompt ("ingrese su edad"));
let nacionalidad = prompt ("ingrese su nacionalidad");
let documento = Number(prompt ("ingrese su documento"));

alert (`Nuevo usuario agregado al sistema: ${nombre}, ${apellido}, ${edad}, ${nacionalidad}, ${documento}`);
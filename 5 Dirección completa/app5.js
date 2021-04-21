/*
Dirección completa

Crear un programa que pida al usuario ingresar, por separado, 
la calle, el número, el departamento, el código postal, la ciudad y el país, 
y muestre un mensaje con toda la dirección completa, p.ej.: 
"La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".
*/

let calle = prompt ("ingrese la calle");
let numero = Number(prompt ("ingrese el numero"));
let departamento = prompt ("ingrese el departamento");
let codigoPostal = Number(prompt ("ingrese el codigo postal"));
let ciudad = prompt ("ingrese la ciudad");
let pais = prompt ("ingrese el pais");

alert (`La dirección que ha ingresado es: ${calle} ${numero} ${departamento}, ${codigoPostal}, ${ciudad}, ${pais}`);
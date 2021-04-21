/*
Lista de reproducción

Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y 
el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: 
"Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".
*/

let nombrePlaylist = prompt ("ingresa el nombre de una playlist");
let primerCancion = prompt ("ingresa el nombre de una cancion");
let segundaCancion = prompt ("ingresa el nombre de otra cancion ");
let tercerCancion = prompt ("ingresa el nombre de otra cancion");

alert (`Se ha creado la playlist ${nombrePlaylist} con las canciones '${primerCancion}', '${segundaCancion}', '${tercerCancion} '`);


/*
Tiempo de viaje

Crear un programa que pida al usuario la distancia de su recorrido y 
mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en 
distintos medios de transporte, definiendo de antemano distintas velocidades para 
distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).
*/
const pie = 5;
const bici = 10;
const auto = 45;
let distancia = prompt ("ingrese la distancia de su recorrido en km");

alert (` Tardaria ${distancia / pie} hs a pie, ${distancia / bici} hs en bici, ${distancia / auto} hs en auto`);
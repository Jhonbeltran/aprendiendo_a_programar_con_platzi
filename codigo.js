//Recuerda que en js usamos camelCase

var peso;
var pesoEnMarte; // CamelCase

alert("¿Quieres saber tu peso en marte?");

peso = prompt("¿Cuál es tu peso en Kg?", "70");
//                                		   ^							  
//lo que va despues de la coma es el valor por defecto
peso = parseInt(peso);

pesoEnMarte = (peso / 9.81) * 3.711;

alert( "Tu peso en Marte es: " + pesoEnMarte + " Kg.");
//recuerda que si quieres concatenar (el menos - si va a restar, convertirá
//en numeros pero el mas + va a concatenar antes que a sumar, por eso necesitas
//usar el parseInt o Numer)

// //alert: Función
// // () : Parametros de la función
// // "" : Cadenas de texto
// var nombre = "Freddy";
// var apellido = "Vega";
// var edad = 28;

// //alert(nombre + " " + apellido + "\n" + edad + " años.");
// alert( "2" + 5 * 8 );

//Document Object Model

document.write("<h1>Los tres principales objetos de JS son:</h1>"+
				"<ul>navigator: opciones especiales del navegador</ul>"+
				"<ul>window: obtener ancho y alto</ul>"+
				"<ul>document: controla el html</ul>");
document.write("<h3>.write es una funcion del objeto document</h3> <br/>");
// document monta el arbolito de html como una variable
//Determina el contenido del html
//.write funcion del objeto
//Los objetos pueden tener: variables y funciones(parametros)

var pi = 3.141592654;

 pi=Math.floor(pi);
// Math es un objeto, y floor es una funcion
// Math controla las matematicas del navegador
// pi=Math.ceil(pi);
 document.write("Usando Math.floor al numero 3.14...obtenemos que es: ");
 document.write(pi+"<br/>");

var maxima;
maxima = Math.max(4,5,67,64,2344,32893243,3);
 document.write("Buscando un numero maximo encontramos que: ");
document.write(maxima+" es el numero maximo<br/>");

//Una funcion en donde uso Math.PI
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}
 document.write("Acá creamos una funcion que calcula la circunferencia de radio 4 que es igual a: ");
document.write(calculateCircumference(4));  // 25.132741228718345

//Usando navigator podemos por ejemplo obtener nuestra ibicacion actual

// function posicionActual(pos){
// 	document.write(pos.coords.latitude+", "+pos.coords.longitude);
// }
// navigator.geolocation.getCurrentPosition(posicionActual);


//Una matriz es una coleccion de datos relacionados (informacion)

//Arrays!
// var menu = ["Productos", "Ventas", "Contacto"];
// document.write( menu[0] );

// var dofa = [ ["Fortaleza", "Oportunidad"] , ["Debilidades", "Amenazas"] ];
// document.write( dofa[id][1] );

function explosion()
{
	alert("BOOM!!");
	document.write("<h1>BOOM! ¿Donde está tu Dios ahora?</h1>");
}
function ganaste()
{
	document.write("Puedes seguir siendo pecaminoso");	
}

//1 = Bomba. 0 = No hay bomba
var campo = [ [ 1 , 0 , 0 ] ,
			  [ 0 , 1 , 0 ] ,
			  [ 1 , 0 , 1 ] ];

var textos = ["Cesped", "Bomba"];

var x, y;

// alert("Estás en un campo minado\n" +
// 	  "Elije una posición entre el 0 y el 2 para X y para Y");


alert("Estas en un campo minado y acabas de dar un paso\n¿Pisaste una bomba o es tu día de suerte?");

//Con esto hice que la eleccion de la coordenada x |y| y sean random
function seleccionMaquinaEjeX(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}
function seleccionMaquinaEjeY(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}
var opcionMaquinaEjeX = seleccionMaquinaEjeX(0,2);
var opcionMaquinaEjeY = seleccionMaquinaEjeY(0,2);

//x = prompt("Posición en X? (entre 0 y 2)");
//Aleatoria
x = opcionMaquinaEjeX;
y = opcionMaquinaEjeY;


if(x <= 2 && y <= 2)
{
	var posicion = campo[x][y];
	document.write("Los dados de Dios te arrastraron a un lugar con " + textos[posicion] + "<br />");
	if(posicion == 1)
	{
		explosion();
	}
	else
	{
		ganaste();
	}
}
else
{
	document.write("¡Te saliste del campo!");
	explosion();
}





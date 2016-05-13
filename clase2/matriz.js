//Una matriz es una coleccion de datos relacionados (informacion)

//Arrays!
// var menu = ["Productos", "Ventas", "Contacto"];
// document.write( menu[0] );

// var dofa = [ ["Fortaleza", "Oportunidad"] , ["Debilidades", "Amenazas"] ];
// document.write( dofa[id][1] );

function explosion()
{
	alert("BOOM!!");
	document.write("<h1>BOOM! Elegiste un area minada :(</h1>");
}
function ganaste()
{
	document.write("Eres un ganador :)");	
}

//1 = Bomba. 0 = No hay bomba
var campo = [ [ 1 , 0 , 0 ] ,
			  [ 0 , 1 , 0 ] ,
			  [ 1 , 0 , 1 ] ];

var textos = ["Cesped", "Bomba"];

var x, y;

alert("Estás en un campo minado\n" +
	  "Elije una posición entre el 0 y el 2 para X y para Y");


//Con esto hice que la eleccion de la coordenada y sea aleatoria
function seleccionMaquina(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}

var opcionMaquina = seleccionMaquina(0,2);


x = prompt("Posición en X? (entre 0 y 2)");
//Aleatoria
y = opcionMaquina;


if(x <= 2 && y <= 2)
{
	var posicion = campo[x][y];
	document.write("Elegiste " + textos[posicion] + "<br />");
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





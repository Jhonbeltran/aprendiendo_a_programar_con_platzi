
//Genera un número aleatorio entre un rango de enteros
function seleccionMaquina(minimo, maximo)
{
	//Math es el paquete de opciones matematicas que tiene js por defecto
	//Math es un objeto (coleccion de funciones o variables)
	//Math.floor = redondea al minimo los numeros decimales de 2.5 a 3
	//Math.random Para generar un numero aleatorio

	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;

	//random 0 a 1
	//random * (maximo - minimo + 1) + minimo
	//maximo = 5
	//minimo = 1
	//(maximo - minimo + 1) + minimo
	//(5) + 1
	//0.5 * (5 - 1 + 1) + 1=
	//3

}

var piedra = 0;
var papel = 1;
var tijera = 2;
//los corchetes cuadrados me crean arrays
var opciones = ["Piedra", "Papel", "Tijera"];

var opcionUsuario;
var opcionMaquina = seleccionMaquina(0,2);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2", 0);
//opciones sub opcionUsuario
alert("Elegiste " + opciones[opcionUsuario]);
alert("Javascript eligió " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
	if(opcionMaquina == piedra)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Perdiste :( ");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Ganaste!");
	}
}
else if(opcionUsuario == papel)
{
	if(opcionMaquina == piedra)
	{
		alert("Ganaste!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Perdiste!");
	}
}
else if(opcionUsuario == tijera)
{
	if(opcionMaquina == piedra)
	{
		alert("Perdiste!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Ganaste!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Empate!");
	}
}
else
{
	alert("¿Pos qué carajo?");
}



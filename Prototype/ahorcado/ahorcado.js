//Elijan de un array de palabras aleatorio
// variables globales
//palabra es un objeto de tipo String
var palabra = "Accesibilidad";
var hombre, l, espacio;

//Declaración de la clase Ahorcado (recibe como parametro contexto)
var Ahorcado = function (con)
{
	//this es las variables locales de la clase, accesibles en toda la clase
	//this.contexto es el context de dibujo del canvas, que llega por parametro
	//desde la variable con
	this.contexto = con;
	this.maximo = 5;
	this.intentos = 0;
	this.vivo = true;
	//Luego de la declaracion lo primero que hacemos es dibujar
	this.dibujar();
}
Ahorcado.prototype.dibujar = function ()
{
	var dibujo = this.contexto;

	//Dibujando el poste
	dibujo.beginPath();
	dibujo.moveTo(150,100);
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	//Para hacer lineas mas anchas(en pixeles)
	dibujo.lineWidth = 15;
	dibujo.strokeStyle = "peru";
	//Si, peru es un maldito color!
	dibujo.stroke();
	dibujo.closePath();

	if(this.intentos > 0)
	{
		// intentos = 1 --> rostro
		dibujo.beginPath();
		dibujo.arc(150, 140, 40, 0, Math.PI * 2, false);
		dibujo.strokeStyle = "red";
		dibujo.lineWidth = 5;
		dibujo.stroke();
		dibujo.closePath();
		//La cantidad de intentos aumenta con la cantidad de veces que llamamos trazar()
		if(this.intentos > 1)
		{
			// intentos = 2 --> torso
			dibujo.beginPath();
			dibujo.moveTo(150,180);
			dibujo.lineTo(150,250);
			dibujo.strokeStyle = "red";
			dibujo.lineWidth = 5;
			dibujo.stroke();
			dibujo.closePath();

			if(this.intentos > 2)
			{
				// intentos = 3 --> brazos
				//Para dibujar brazos y piernas hacemos picos ^

				dibujo.beginPath();
				dibujo.moveTo(120,220);
				dibujo.lineTo(150,180);
				dibujo.lineTo(180,220);
				dibujo.strokeStyle = "red";
				dibujo.lineWidth = 5;
				dibujo.stroke();
				dibujo.closePath();

				if(this.intentos > 3)
				{
					// intentos = 4 --> piernas
					dibujo.beginPath();
					dibujo.moveTo(120,290);
					dibujo.lineTo(150,250);
					dibujo.lineTo(180,290);
					dibujo.strokeStyle = "red";
					dibujo.lineWidth = 5;
					dibujo.stroke();
					dibujo.closePath();

					if(this.intentos > 4)
					{
						// intentos = 5 --> ojos muertos
						dibujo.beginPath();
						//Ojo izquierdo
						dibujo.moveTo(125,120);
						dibujo.lineTo(145,145);
						dibujo.moveTo(145,120);
						dibujo.lineTo(125,145);

						//Ojo derecho
						dibujo.moveTo(155,120);
						dibujo.lineTo(175,145);
						dibujo.moveTo(175,120);
						dibujo.lineTo(155,145);

						dibujo.strokeStyle = "blue";
						dibujo.lineWidth = 5;
						dibujo.stroke();
						dibujo.closePath();
					}
				}
			}

		}

	}
}
//Trazar le va a decir a la funcion ¡hey, agregue un intento nuevo! 
//Y vuelvamelo a dibujar
Ahorcado.prototype.trazar = function ()
{
	//El operador ++ suma uno
	this.intentos++;
	//Por defecto arrancamos en this.vivo = true
	if(this.intentos >= this.maximo)
	{
		// Acá nos morimos muertos de la muerte
		this.vivo = false;
		alert("¡Estás muerto!");
	}
	this.dibujar();
}

//Acá esta la funcion iniciar!
function iniciar () 
{
	l = document.getElementById("letra");
	var b = document.getElementById("boton");
	var canvas = document.getElementById("canvas");
	//podemos darle un ancho y un alto a la etiqueta de canvas desde js
	canvas.width = 500;
	canvas.height = 400;
	var contexto = canvas.getContext("2d");
	//Al poner contexto como parametro ya lo puedo usar dentro de la clase Ahorcado
	hombre = new Ahorcado(contexto);

	//Convierte a mayúscula un texto
	palabra = palabra.toUpperCase();
	//Para minusculas es .toLowerCase

	//Declaro un array con n espacios de acuerdo al largo de la palabra
	espacio = new Array(palabra.length);
	
	//Agregamos una función que se dispare al dar click al botón
	b.addEventListener("click", agregarLetra);

	mostrarPista(espacio);

}
function agregarLetra()
{
	var letra = l.value;
	l.value = "";
	mostrarPalabra(palabra, hombre, letra);
}
function mostrarPalabra(palabra, ahorcado, letra)
{
	var encontrado = false;
	var p;
	letra = letra.toUpperCase();
	for(p in palabra)
	{	
		if(letra == palabra[p])
		{
			espacio[p] = letra;
			encontrado = true;
		}
	}
	mostrarPista(espacio);

	//Si NO lo encontré
	if(!encontrado)
	{
		ahorcado.trazar();
	}

	if(!ahorcado.vivo)
	{
		//Mostrar la palabra entera al morir
	}

}
function mostrarPista(espacio)
{
	var pista = document.getElementById("pista");
	var texto = "";
	var i;
	var largo = espacio.length;

	for(i = 0; i<largo; i++)
	{
		if(espacio[i] != undefined)
		{
			texto = texto + espacio[i] + " ";
		}
		else
		{
			texto += "_ ";
		}
	}
	pista.innerText = texto;
}









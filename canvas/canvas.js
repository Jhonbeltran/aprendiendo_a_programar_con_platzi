var dibujo, lienzo, t, b;//Globales
function inicio()
{
	/*canvas*/
    dibujo = document.getElementById("dibujito");
    /*contexto (eje de coordenadas)*/
    lienzo = dibujo.getContext("2d");
    /*ahora tenemos un lapiz encima del lienzo*/
    /*linea verde!*/
    //arranco en
    /*lienzo.moveTo(100,100);
    //hasta
    lienzo.lineTo(200,100);
    lienzo.strokeStyle = "#00FF00";
    lienzo.stroke();*/
    
    //Hagamos un borde
    lienzo.moveTo(0,0);
    lienzo.lineTo(300,0);
    lienzo.lineTo(300,300);
    lienzo.lineTo(0,300);
    lienzo.lineTo(0,0);
    lienzo.strokeStyle = "#00AA00";
    lienzo.stroke();
   
    
    //vamos a hacer un circulo
    //Iniciamos el path (camino)
	lienzo.beginPath();
	lienzo.strokeStyle = "#00F";
    //.arc nos pide (coordenada en x del centro, coordenada en y del centro, radio, radianes del circulo (Math.PI * 2) o (Math.PI) para un semi circulo y si se va trazar en contra o a favor de las manecillas del reloj)
	lienzo.arc(150,150,100, (Math.PI * 2), false);
    //cerramos el path
	lienzo.closePath();
	lienzo.stroke();
    
    //semicirculo
    lienzo.beginPath();
	lienzo.strokeStyle = "#431438";
	lienzo.arc(150,150,100, (Math.PI), false);
	lienzo.closePath();
	lienzo.stroke();
    
    t = document.getElementById("usuario");
	b = document.getElementById("dibujalo");
	b.addEventListener("click", dibujarGrilla);
}
function dibujarGrilla () 
{
	/*var l = lienzo;*/
	var rayas = Number(t.value);
	var ancho = 300, alto = 300;
	var linea, punto;
	var anchoLinea = ancho / rayas;
	var limiteX = ancho / anchoLinea;
	var limiteY = alto / anchoLinea;

	lienzo.strokeStyle = "#AAA";

	for(linea = 0; linea <= limiteX; linea++)
	{
		punto = (linea * anchoLinea) - 0.5;
		lienzo.beginPath();
		lienzo.strokeStyle = "#AAA";
		lienzo.moveTo(punto, 0.5);
		lienzo.lineTo(punto, ancho-0.5);
		lienzo.stroke();
		lienzo.closePath();
	}

	for(linea = 0; linea <= limiteY; linea++)
	{
		punto = (linea * anchoLinea) - 0.5;
		lienzo.beginPath();
		lienzo.strokeStyle = "#AAA";
		lienzo.moveTo(0.5, punto);
		lienzo.lineTo(alto  - 0.5, punto);
		lienzo.stroke();
		lienzo.closePath();
	}

}





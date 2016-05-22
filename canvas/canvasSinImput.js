var dibujo, lienzo;
function inicio()
{
    dibujo = document.getElementById("dibujito");
    lienzo = dibujo.getContext("2d");

    dibujarGrilla(lienzo);
    
	lienzo.beginPath();
	lienzo.strokeStyle = "#00F";
	lienzo.arc(150,150,100, (Math.PI * 2), false);
	lienzo.closePath();
	lienzo.stroke();
}

function dibujarGrilla (lienzo) 
{
	var ancho = 300, alto = 300;
	var linea, punto;
	var espacioEntreLineas = 30;
	var limiteX = ancho / espacioEntreLineas;
	var limiteY = alto / espacioEntreLineas;

    lienzo.strokeStyle = "#AAA";

	for(linea = 0; linea <= limiteX; linea++)
	{
        punto = (linea * espacioEntreLineas);
		lienzo.beginPath();
		lienzo.moveTo(punto, 0);
		lienzo.lineTo(punto, 300);
		lienzo.stroke();
		lienzo.closePath();
	}

	for(linea = 0; linea <= limiteY; linea++)
	{
		punto = (linea * espacioEntreLineas);
        lienzo.beginPath();
		lienzo.moveTo(0, punto);
		lienzo.lineTo(300, punto);
		lienzo.stroke();
		lienzo.closePath();
	}

}
var dibujo, lienzo, t, b;
function inicio()
{
    t = document.getElementById("usuario");
    b = document.getElementById("dibujalo");
    dibujo = document.getElementById("dibujito");
    lienzo = dibujo.getContext("2d");
    
    /*dibujarGrilla(lienzo);*/
    b.addEventListener("click", dibujarGrilla);

    lienzo.beginPath();
    lienzo.strokeStyle = "#009688"
    lienzo.arc(150,150,100,(Math.PI * 2), false);
    //Para colorear y llenar el circulo
    lienzo.fillStyle = "#03A9F4"
    lienzo.fill();
    lienzo.stroke();
    lienzo.closePath();
   
   

}
function dibujarGrilla(){
    var pony = lienzo;
    var rayas = t.value;
    var ancho = 300, alto = 300;
    var linea;
    var anchoLinea = ancho / rayas;
    var limiteX = ancho / anchoLinea;
    var limiteY = alto / anchoLinea;
    for(linea = -10; linea <= limiteX ; linea ++ )
    {
        punto = (linea * anchoLinea + ancho);
        puntoB = (linea * anchoLinea);
        pony.beginPath();
        pony.strokeStyle = "#AAA";
        pony.moveTo(puntoB, 0);
        pony.lineTo(punto, 300);
        pony.stroke();
        pony.closePath;
        
    }
    for (linea = -10; linea <= limiteY ; linea ++) {
        punto= (linea * anchoLinea + ancho);
        puntoB = (linea * anchoLinea);
        pony.beginPath();
        pony.strokeStyle = "#AAA";
        pony.moveTo(0, punto);
        pony.lineTo(300,puntoB);
        pony.stroke();
        pony.closePath;
    }
}
var dibujo, lienzo, t, b;
function inicio()
{
    t = document.getElementById("usuario");
    b = document.getElementById("dibujalo");
    dibujo = document.getElementById("dibujito");
    lienzo = dibujo.getContext("2d");
    
    /*dibujarGrilla();*/
    b.addEventListener("click", dibujarGrilla);

    lienzo.beginPath();
    lienzo.strokeStyle = "#607D8B"
    lienzo.arc(150,150,100,(Math.PI * 2), false);
    //Para colorear y llenar el circulo
    lienzo.fillStyle = "#607D8B"
    lienzo.fill();
    lienzo.stroke();
    lienzo.closePath();
   
   
   

}
function dibujarGrilla(){
    var rayas = t.value;
    var maximo = 300;
    var linea, punto;
    var anchoLinea = maximo / rayas;
    var limite = maximo / anchoLinea;

    for(linea = 0; linea <= limite; linea++)
    {
        punto = linea * anchoLinea;
        lienzo.beginPath();
        lienzo.strokeStyle = "red";
        lienzo.moveTo(punto, 0);
        lienzo.lineTo(0, punto);
        lienzo.stroke();
        lienzo.closePath;
        lienzo.beginPath();
        lienzo.strokeStyle = "orange";
        lienzo.moveTo(maximo, punto);
        lienzo.lineTo(punto, maximo);
        lienzo.stroke();
        lienzo.closePath();
        lienzo.beginPath();
        lienzo.strokeStyle = "blue";
        lienzo.moveTo(0, (maximo-punto));
        lienzo.lineTo(punto, maximo);
        lienzo.stroke();
        lienzo.closePath();
        lienzo.beginPath();
        lienzo.strokeStyle = "green";
        lienzo.moveTo(maximo, (maximo-punto));
        lienzo.lineTo(punto, 0);
        lienzo.stroke();
        lienzo.closePath();
    }

}
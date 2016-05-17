function inicio(){
    var caja = document.getElementById("caja");
    /*caja.innerHTML = "<strong>Caja</strong> <em>cambiada</em>"
    //para sumar un contenido:
    caja.innerHTML += " Bien zavrosa"*/
    var risa = 10;

    while(risa > 0){
        caja.innerHTML += "ja";
        risa--;
    }

    var pares = document.getElementById("pares");

    var numeros = 1;
    var residuo;
    while(numeros <= 40){
        residuo = numeros % 2;

        if(residuo == 0){
            pares.innerHTML += " " + numeros;
        }

        numeros ++;
    }
}

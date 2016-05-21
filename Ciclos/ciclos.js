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

    var texto = document.getElementById("texto");
    var boton = document.getElementById("boton");

    function calcular(){
        alert("Gracias por tocarme ( ͡° ͜ʖ ͡°)");
        /*alert(texto.value);*/
        /*var numero = texto.value;*/
        /*alert(numero + "( ͡° ͜ʖ ͡°)");*/
        var numero = Number(texto.value);
        /*alert(numero+Math.PI);*/
        var calculo = 1;
        var n = 1;
        /*while(n<=numero){
            calculo=calculo * n;
            n++;
        }*/
        for(n=1; n<= numero; n++){
            calculo=calculo * n;
        }
        caja.innerHTML = calculo;
    }

    boton.addEventListener("click", calcular);
}

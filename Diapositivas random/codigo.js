function inicio(){
    var caja = document.getElementById("caja");
    var texto = document.getElementById("texto");
    var boton = document.getElementById("boton");
    
    function nombrar(){
        alert("Gracias por tocarme ( ͡° ͜ʖ ͡°)");
        var nombre = texto.value;
        caja.innerHTML = nombre + "( ͡° ͜ʖ ͡°)";
    }
    
    boton.addEventListener("click", nombrar);
}
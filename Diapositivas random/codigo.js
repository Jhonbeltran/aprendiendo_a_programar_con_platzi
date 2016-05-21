function inicio(){
    var caja = document.getElementById("caja");
    var boton = document.getElementById("boton");
    
    function nombrar(){
        function Tema(minimo, maximo){
	       var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	       return numero;
        }
        var nombrePresentacion = Tema(0,2);
        if (nombrePresentacion == 0){
            caja.innerHTML = "Física Cuantica";
        }
        else if (nombrePresentacion == 1){
            caja.innerHTML = "Paradojas para dormir";
        }
        else {
            caja.innerHTML = "Agujeros negros";
        }
        
    }
    boton.addEventListener("click", nombrar);
    
}
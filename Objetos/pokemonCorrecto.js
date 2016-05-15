function Pokemon (n, v, a, g){
    this.nombre=n;
    this.vida=v;
    this.ataque=a;
    this.grito=g;
    //acciones
    this.gritar = function(){
    //otra forma de hacer una funcion (estructura)
        alert(this.grito);
    }
    if(this.nombre=="Pikachu"){
        document.getElementById("imagen").src = "pikachu.jpg";
    }
    else if(this.nombre=="Bulbasaur"){
        document.getElementById("imagen").src = "bulbasaur.png";
    }
    else if(this.nombre=="Rattata"){
        document.getElementById("imagen").src = "rattata.png";
    }
    else{
        document.getElementById("imagen").src = "pokemones.png";
    }
}



function inicio(){
    alert("Esto es despues del inicio");
    var pikachu = new Pokemon("Rattata", 100, 55, "Conio!");
    //new convierte a Pokemon en una clase(declaracion de objeto)
    //Si no usamos this no podemos ver las variables desde la declaracion del objeto
    pikachu.vida = pikachu.vida - 34;
    pikachu.gritar();


//id dentro de html es como un nombre de variable para JS

    nombrePokemon.innerText = pikachu.nombre;
    datosPokemon.innerText = "Posee: "+pikachu.vida+" de vida, "+pikachu.ataque+" de ataque y su grito es: "+pikachu.grito;
}

alert("Esto es antes del inicio");

imagen = function(){
    document.getElementById("imagen").src = "pikachu.jpg";
}











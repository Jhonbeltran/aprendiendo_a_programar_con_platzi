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
    /*var pikachu = new Pokemon("Bulbasaur", 100, 55, "Coño, verga, marico!");*/
    //new convierte a Pokemon en una clase(declaracion de objeto)
    //Si no usamos this no podemos ver las variables desde la declaracion del objeto
    /*pikachu.vida = pikachu.vida - 34;*/
    /*pikachu.gritar();*/


//id dentro de html es como un nombre de variable para JS

    /*nombrePokemon.innerText = pikachu.nombre;
    datosPokemon.innerText = "Posee: "+pikachu.vida+" de vida, "+pikachu.ataque+" de ataque y su grito es: "+pikachu.grito;*/

    var nombre = prompt ("Nombre");
    var vida = prompt("Vida");
    vida = parseInt(vida)
    var ataque = prompt ("Ataque");
    ataque = parseInt(ataque);
    var grito = prompt ("Grito");



    var pokemon = new Pokemon(nombre, vida, ataque, grito);

    pokemon.gritar();
    nombrePokemon.innerText = pokemon.nombre;
    datosPokemon.innerText = "Posee: "+pokemon.vida+" de vida, "+pokemon.ataque+" de ataque y su grito es: "+pokemon.grito;

}

alert("Esto es antes del inicio");

imagen = function(){
    document.getElementById("imagen").src = "pikachu.jpg";
}











document.write("<h1>Objetos que yo mismo puedo crear</h1>");
document.write("<h3>Existen dos tipos de variables:</h3>"+
              "<ul>Variables de asignacion por valor</ul>"+
              "<ul>Variables de asignacion por referencia</ul>");
//Los objetos se declaran normalmente en mayuscula.
//var Pokemon = {nombre: "Pikachu", tipo: "Eléctrico"};
/*var Pokemon = {
    //Dentro de este bloque vamos a colocar variables y funciones
    nombre: "Pikachu",
    tipo: "Eléctrico",
    vida: 100,
    ataque: 55
};*///Un objeto termina con ;
//Son apuntadores (pikachu y bulbasaur apuntan a Pokemon)
/*var pikachu = Pokemon;
var bulbasaur = Pokemon;
bulbasaur.nombre = "Bulbasaur";
bulbasaur.tipo = "Tierra";
bulbasaur.vida = 90;
bulbasaur.ataque = 50;

document.write(bulbasaur.nombre);*/

//              variables de parametro
function Pokemon(nombrePokemon, vidaPokemon, ataquePokemon){
    /*this.nombre = "Pikachu";*/
  var estructuraPokemon = {
    //Dentro de este bloque vamos a colocar variables y funciones
    //variables de estructura
    nombre: nombrePokemon,
    vida: vidaPokemon,
    ataque: ataquePokemon,
      datos: {tipo: "Tierra", debilidad: "Fuego"}
};
    return estructuraPokemon;
    /*return this;*/
}

//Construccion de objetos
var pikachu = Pokemon("Pikachu", 100, 55);
var bulbasaur = Pokemon("Bulbasaur", 90, 50);

document.write("El pokemon"+pikachu.nombre+" Tiene "+(pikachu.ataque-bulbasaur.ataque)+" de diferencia de vida con "+bulbasaur.nombre+"<br/>");

document.write("El tipo de "+bulbasaur.nombre+" es: "+bulbasaur.datos.tipo);
//Esto lo vemos en la consola del navegador
console.log(bulbasaur);


var tablero, direccion;


//Estas variables son de tipo json
var teclas =
{
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39,
	W: 87,
	S: 83,
	A: 65,
	D: 68
};
//Fondo es un objeto
var fondo = {
	//url de la imagen
	imagenURL: "fondo.png",
	//Variable booleana(false=la imagen no ha cargado, true=la imagen ya cargó)
	imagenOK: false
};

var Personaje = function(x, y, frenteURL, frenteOK, atrasURL, atrasOK, derURL, derOK, izqURL, izqOK, velocidad)
{
	this.x=x;
	this.y=y;
	this.frenteURL=frenteURL;
	this.frenteOK=frenteOK;
	this.atrasURL=atrasURL;
	this.derURL=derURL;
	this.derOK=derOK;
	this.izqURL=izqURL;
	this.izqOK=izqOK;
	this.velocidad=velocidad;
}

var tifis = new Personaje(

100,100, "diana-frente.png", false, "diana-atras.png", false, "diana-der.png", false, "diana-izq.png", false,10

);

var liz = new Personaje(400, 200, "liz.png", false, null, null, null, null, null, null, 10);


function inicio ()
{
	//Declaro una variable para obtener el contexto del canvas y poder dibujar
	var canvas = document.getElementById("campo");
	//Y así extraemos el contexto
	tablero = canvas.getContext("2d");
	//Podemos agregar objetos tipo json y agregarles variables arbitrarias(como imagen)
	//Image es un objeto interno de JS que me permite cargar imagenes
	//Image es <img/> internamente
	fondo.imagen = new Image();
	//console.log(fondo);
	//Agregamos el src de la imagen
	fondo.imagen.src = fondo.imagenURL;
	//Ya agregamos el fondo
	//.onload evento de carga de imagen
	fondo.imagen.onload = confirmarFondo;


	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;
	
	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;
	
	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = confirmarIzq;
	
	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = confirmarDer;

	liz.lizy = new Image();
	liz.lizy.src = liz.frenteURL;
	liz.lizy.onload = confirmarLiz;
 
 	//Para detectar el teclado
	document.addEventListener("keydown", teclado);

}

function teclado(datos) {
    var codigo = datos.keyCode;
    // alert(codigo);
    if(codigo == teclas.UP){
        tifis.y -= tifis.velocidad;
        	//borde del tablero
        if (tifis.y<0||
        	//obstaculo de la parte de abajo
         	tifis.y>300 && tifis.x>110 && tifis.y<350 ||
         	//Obstaculo del lado izquierdo
          	tifis.y>150 && tifis.x<140 && tifis.y<210 ||
          	//Obstaculo de arriba
           	tifis.y<210 && tifis.x>160 && tifis.x<240)
        {
            tifis.y += tifis.velocidad;
        };
    }

    if(codigo == teclas.DOWN){
        tifis.y += tifis.velocidad;
        	//borde del tablero
         if(tifis.y>450 ||
         	//obstaculo de la parte de abajo
          	tifis.y>300 && tifis.x>110 && tifis.y<360 ||
          	//Obstaculo del lado izquierdo
           	tifis.y>150 && tifis.x<140 && tifis.y<210) 
        {
            tifis.y -= tifis.velocidad;
        }    
    }

    if(codigo == teclas.LEFT){
        tifis.x -= tifis.velocidad;
        	//borde del tablero
        if (tifis.x<-10 ||
        	//Obstaculo del lado izquierdo
         	tifis.y>150 && tifis.x<140 && tifis.y<210 ||
          	//Obstaculo de arriba
          	tifis.x>160 && tifis.y<210 && tifis.x<240) 
        {
            tifis.x += tifis.velocidad;
        };
    }

    if(codigo == teclas.RIGHT){
        tifis.x += tifis.velocidad;
        	//borde del tablero
         if(tifis.x>460 ||
         	//obstaculo de abajo
        	tifis.y>300 && tifis.y<350 && tifis.x>110 ||
        	//obstaculo de arriba
        	tifis.x>160 && tifis.y<210 && tifis.x<240) 
        {
            tifis.x -= tifis.velocidad;
        }
    }


    //PARTE DE LIZ

    if(codigo == teclas.W){
        liz.y -= liz.velocidad;
        	//borde del tablero
        if (liz.y<0||
        	//obstaculo de la parte de abajo
         	liz.y>300 && liz.x>110 && liz.y<350 ||
         	//Obstaculo del lado izquierdo
          	liz.y>150 && liz.x<140 && liz.y<210 ||
          	//Obstaculo de arriba
           	liz.y<210 && liz.x>160 && liz.x<240)
        {
            liz.y += liz.velocidad;
        };
    }

    if(codigo == teclas.S){
        liz.y += liz.velocidad;
        	//borde del tablero
         if(liz.y>450 ||
         	//obstaculo de la parte de abajo
          	liz.y>300 && liz.x>110 && liz.y<360 ||
          	//Obstaculo del lado izquierdo
           	liz.y>150 && liz.x<140 && liz.y<210) 
        {
            liz.y -= liz.velocidad;
        }    
    }

    if(codigo == teclas.A){
        liz.x -= liz.velocidad;
        	//borde del tablero
        if (liz.x<-10 ||
        	//Obstaculo del lado izquierdo
         	liz.y>150 && liz.x<140 && liz.y<210 ||
          	//Obstaculo de arriba
          	liz.x>160 && liz.y<210 && liz.x<240) 
        {
            liz.x += liz.velocidad;
        };
    }

    if(codigo == teclas.D){
        liz.x += liz.velocidad;
        	//borde del tablero
         if(liz.x>460 ||
         	//obstaculo de abajo
        	liz.y>300 && liz.y<350 && liz.x>110 ||
        	//obstaculo de arriba
        	liz.x>160 && liz.y<210 && liz.x<240) 
        {
            liz.x -= liz.velocidad;
        }
    }
    direccion = codigo;
    dibujar();
}

function confirmarLiz ()
{
	liz.lizOK = true;
	dibujar();
}

function confirmarFondo ()
{
	
	fondo.imagenOK = true;
	dibujar();
}
function confirmarFrente ()
{
	tifis.frenteOK = true;
	dibujar();
}
function confirmarAtras ()
{
	tifis.atrasOK = true;
	dibujar();
}
function confirmarIzq ()
{
	tifis.izqOK = true;
	dibujar();
}
function confirmarDer ()
{
	tifis.derOK = true;
	dibujar();
}

function dibujar()
{
	//Capa 1: Fondo
	if(fondo.imagenOK == true)
	{
		//fondo.imagen = objeto de tipo Imagen que posee un src
		//las coordenadas son 0, 0
		tablero.drawImage(fondo.imagen, 0, 0);
	}

	//Capa 2: Liz
	// Como lizOK es booleana (verdadera o falsa), no necesito comparar
	if(liz.lizOK)
	{
		tablero.drawImage(liz.lizy, liz.x, liz.y);
	}

	//Capa 3: Tifis
	var tifiDibujo = tifis.frente;
	if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK)
	{
		if(direccion == teclas.UP)
		{
			tifiDibujo = tifis.atras;
		}
		if(direccion == teclas.DOWN)
		{
			tifiDibujo = tifis.frente;
		}
		if(direccion == teclas.LEFT)
		{
			tifiDibujo = tifis.izq;
		}
		if(direccion == teclas.RIGHT)
		{
			tifiDibujo = tifis.der;
		}
		tablero.drawImage(tifiDibujo, tifis.x, tifis.y);
	}
}




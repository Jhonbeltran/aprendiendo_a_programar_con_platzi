function inicio () {
	console.log("Voy a entender definitivamente como funcionan los ciclos :) ");
	var x=0;
	var y=0;
	for(var i=0; i<=10; i++){
		console.log("nuestras variables valen: "+x+" y "+y);
		x = x + 1;
		console.log("La X ahora vale : "+x);
		y=x+y;
		console.log("La Y ahora vale : "+y);
		y++;
		console.log("La Y ahora vale : "+y);
	}

	
}
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var random;
	random = 1 + parseInt(Math.random() * 10);
	//Genero el número RANDOM entre 1 y 10 
	if (random == 10) {
		alert("EXCELENTE tu nota ha sido " + random );
	}
	else if (random >3 && random <10)
	 {
	 	alert("Aprobado tu nota ha sido " + random ); 
	 }
	 else
	 {
	 	 alert("Vamos, la proxima se puede.. tu nota ha sido " + random);
	 }

}//FIN DE LA FUNCIÓN
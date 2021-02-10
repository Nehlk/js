/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var edad;
	var nombre;

	edad = document.getElementById("laEdad").value;
	nombre  = document.getElementById("elNombre").value;

	//("Su nombre es" + nombre + " y su edad es de " + edad + " años" );

     document.write("Su nombre es " + nombre + " y su edad es de " + edad + " años" );
}


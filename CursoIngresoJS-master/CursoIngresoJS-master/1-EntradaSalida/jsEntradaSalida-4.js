/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
     var dato;

     dato = prompt("Digite un dato");

     document.getElementById("elNombre").value = dato;   //Sobreescribe el valor del ID: "El Nombre"

     
}


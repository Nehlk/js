function mostrar()
{

var sexo;

do
 {
 	sexo = prompt("Ingrese f o m .");
 	 switch(sexo)
 	  {
        case 'f': document.getElementById("Sexo").value = "Es Femenino"; break;
        case 'm': document.getElementById("Sexo").value = "Es Masculino"; break;
         
         /* default: document.getElementById("Sexo").value = "No es un sexo"; 
                        break;  */
 	  }
 } while(sexo != 'm' && sexo != 'f');



}//FIN DE LA FUNCIÓN
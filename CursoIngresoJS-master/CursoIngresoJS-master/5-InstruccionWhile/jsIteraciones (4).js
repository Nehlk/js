function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
    
    do
      {
      	numero = prompt("ingrese un número entre 0 y 10.");

      	if (numero >=0 && numero <= 9)
      	  {
            document.getElementById("Numero").value = numero;
      	  }

      }while(numero < 0 || numero > 9);
    

    	
    }//FIN DE LA FUNCIÓN
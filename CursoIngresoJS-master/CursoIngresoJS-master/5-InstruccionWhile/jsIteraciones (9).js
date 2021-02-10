function mostrar()
{

	//var contador=0;
	// declarar variablesç

	var num;
	var respuesta = 'si';
	var numMax;
	var numMin;
	var flag = 0;

	while(respuesta =='si')
	{
		num = prompt("Ingrese un num: ");
        num = parseInt(num);
        
        if (flag == 0)  // FUncion q se cumple una sola vez para dar valor al Min y al Max.
          {
          	 numMax = num;
          	 numMin = num;
          	 flag = 1 ;
          }

        if (num > numMax) // Compara al numero con el maximo almacenado, si es mayor lo sustituye
         {
         	numMax = num ;
         }
       
        if (num < numMin) // compara al numero con el minimo almacenado, si es menor lo sustituye
          {
          	numMin = num ;
          }

          do
            {
            	respuesta = prompt("Continuar? Si/No");
            } while (respuesta != "si" && respuesta != "no");
	    
	}


  document.getElementById("maximo").value = numMax;
  document.getElementById("minimo").value = numMin;

}//FIN DE LA FUNCIÓN
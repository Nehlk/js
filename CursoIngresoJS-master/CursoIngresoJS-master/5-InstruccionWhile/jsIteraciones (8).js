function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var num;
	var respuesta='si';
	 
  
    while(respuesta == "si")
	{
		
       num = prompt("Ingrese un num: ");
       num = parseInt(num);
        if (num < 0)
          {
             negativo *= num;
          }
         else if (num >= 0)
          {
          	 positivo += num;
          } 
    
           do
             {
             	respuesta = prompt("Continuas? Si/No ");
             } while (respuesta != "si" && respuesta != "no");
       
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN



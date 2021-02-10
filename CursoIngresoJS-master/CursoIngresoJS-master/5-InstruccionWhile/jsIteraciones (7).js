function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta ="si";
    var num;
    

	while(respuesta == "si")
	{
		contador ++ ;
       num = prompt("Ingrese un num: ");
       num = parseInt(num);
       acumulador = acumulador + num;
        

        do
          {
           respuesta = prompt("Continuas? Si/No ");
          } while(respuesta != "si" && respuesta != "no");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
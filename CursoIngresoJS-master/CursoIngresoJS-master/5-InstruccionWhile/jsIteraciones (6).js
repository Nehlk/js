function mostrar()
{

	var contador=0;
	var acumulador=0;
    var num;


    while(contador < 5)
    {
    	contador ++ ;
       num = prompt("Ingrese un numero: ");
       num = parseInt(num);

       acumulador = acumulador + num;


    }


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN
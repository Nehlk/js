/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
   
    var result;

    importe = document.getElementById("importe").value;
    result = parseInt(importe) - ( parseInt(importe) * 0.25) ;

    document.getElementById("resultado").value = result;
}

/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueld;
    var resultado;

    sueld = document.getElementById("sueldo").value;
    resultado = parseInt(sueld) + (parseInt(sueld) * 0.10);

    document.getElementById("resultado").value = resultado;
	
}

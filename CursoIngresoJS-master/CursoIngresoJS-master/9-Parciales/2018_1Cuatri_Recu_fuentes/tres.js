function mostrar()
{
   
    var precio = parseInt(prompt("Ingrese el precio: "));
    var porcentDesc = parseInt(prompt("Ingrese el porcentaje de descuento: "));

    precioFinal = precio - (precio * (porcentDesc/100))

    document.getElementById("elPrecioFinal").value = precioFinal;
}

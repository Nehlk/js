function mostrar() {

   var ancho;
   var largo;
   var perimetroRect;

     ancho = prompt("Ingrese el Ancho del rectangulo");
     largo = prompt("Ingrese el Largo del rectangulo");
     
     perimetroRect = parseInt(ancho) * parseInt(largo);

     alert("El perimetro del rectangulo es: " + perimetroRect);
}
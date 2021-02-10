function mostrar()
{
//tomo la edad  
var edad;

   edad = document.getElementById("edad").value;
   edad = parseInt(edad);

   if (edad >= 13 && edad <= 17) 
   {
   
   	 alert("La persona es un/a ADOLESCENTE ");
   }
   else if (edad > 17) 
   {
   	 alert("La persona es MAYOR de edad ");
   }
   else
   {
   	 alert("La persona es un/a Niña/a ")
   }



}//FIN DE LA FUNCIÓN
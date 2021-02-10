/*
  Bienvenidos. 
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10),
 el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:

a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.

*/

function mostrar()
{
   var notas;
   var notaTotal;
   var notaMasBaja;
   var cantNotas;
   var promedioNotas;

   var flag;
   var sexo;
   var sexoMasBajo;
   var sexoHombre;

   var contadorAlumnos;

   sexoHombre = 0;
   notaTotal = 0;
   flag = 0;
 
   contadorAlumnos = 0;
   cantNotas = 0;
   
   while(contadorAlumnos < 5)
   {
            contadorAlumnos++ ;   //cuenta los alumnos comenzando en 0

               	notas = prompt("Ingrese la nota entre 0 y 10");
              	notas = parseInt(notas);

           
            while(notas < 0 || notas > 10)
             {
             	alert("La nota no es valida");
             	notas = prompt("Ingrese la nota entre 0 y 10");
             	notas = parseInt(notas);
             }

            
        
             sexo = prompt("Ingrese el f o m para indicar el sexo"); //Pide Sexo

            while(sexo != "f" && sexo != "m")
            {
            	alert("El sexo no es valido");
            	sexo  = prompt("Ingrese f o m para el sexo"); 
            }
        
            cantNotas++ ;                                   // suma en 1 la cantidad de notas introducidas
            
            notaTotal += notas;                            //Suma notas a notaTotal

        
 
        if (flag == 0)
         {
           notaMasBaja = notas ;
           flag ++ ;
         }

         if (notas < notaMasBaja)
          {
            notaMasBaja = notas;
            sexoMasBajo = sexo;
          }

          if (sexo == "m" && notas >= 6)
           {
              sexoHombre++ ;

           }

        promedioNotas = notaTotal / cantNotas ;
      
   } 

    
   

   alert("El promedio de las notas totales es de: " + promedioNotas + 
   	     " La nota mas Baja es de: " + notaMasBaja + " Y el sexo es: " + sexoMasBajo +
   	      " Y la cantidad de varones con nota mayor o igual a 6 es de: " +sexoHombre); 
}

/*
   Bienvenidos. 
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera 
e informar al terminar el ingreso por document.write: 
a) La cantidad de números pares. 
b) La cantidad de números impares. 
c) La cantidad de ceros. 
d) El promedio de todos los números positivos ingresados. 
e) La suma de todos los números negativos. 
f) El número y la letra del máximo y el mínimo.
*/


function mostrar()
{
     var letra;
     var numero;
     var respuesta;
   
     var cantCeros;
     var cantNumPares;
     var cantNumImpares;
     var resto; 

     var promedioPositivos;
     var sumaNegativos;

     var totalPositivos;
    
     var cantPositivos;
     
     var letraMasChico;
     var letraMasGrande;

     var numeroMenor;
     var numeroMayor;

     var flag;

     flag = 0;

     totalPositivos = 0;
     cantPositivos = 0;
     sumaNegativos = 0;
    

     cantCeros = 0;
     respuesta = "si";
     cantNumPares = 0;
     cantNumImpares = 0;
    


     while(respuesta == "si")
     {

     	     letra = prompt("Digite una letra");

     	     numero = prompt("Digite un numero entre -100 y 100 ");
     	     numero = parseInt(numero);

     	     while( numero < -100 || numero > 100 )  // validacion de Numero entre -100 y 100
     	     {
     	     	alert("El numero no es valido");
     	     	numero = prompt("Digite un numero entre -100 y 100 ");
     	        numero = parseInt(numero);
     	     } // Fin while
           
             resto = numero % 2 ; //Verificador del resto de 'numero' 

             if (resto == 0)     //Contador Numeros pares
              {
                 cantNumPares++ ;
              } else
                 {
    	          	 cantNumImpares++ ;
 	             } //fin if
 

              if (numero == 0)  //contador de ceros
               {
               	cantCeros++ ;
               } //fin if

              if (numero > 0) 
               {
                  totalPositivos += numero;
                  cantPositivos++ ;
               }
               else if (numero < 0)
                {
                	
                	sumaNegativos += numero ;
                    
                } // fin promedio positivos y suma negativos.



              if (flag == 0)
               {
               	  letraMasChico = letra ;
               	  letraMasGrande = letra;
               	  numeroMenor = numero;
               	  numeroMayor = numero;

               	  flag ++ ;
               }
                
               if (numero > numeroMayor)
                {
                	numeroMayor = num;
                	letraMasGrande = letra;
                } 

                if (numero < numeroMenor)
                 {
                 	numeroMenor = numero;
                 	letraMasChico = letra;
                 }


             do{ //Confirmacion de seguir introduciendo datos
             	respuesta = prompt("Continuar? Digite si / no");
             } while(respuesta != "no" && respuesta != "si");

     }

       
     promedioPositivos = totalPositivos / cantPositivos ;

     document.write(
                   "<br> La cantidad de Numeros pares es de: " + cantNumPares +  
     	           "<br> <br> La cantidad de numeros Impares es de:  " + cantNumImpares +
     	           "<br> La cantidad de ceros es de: " + cantCeros +
     	           "<br> El promedio de los positivos es de: " + promedioPositivos +
     	           "<br> La suma de los negativos es de: " + sumaNegativos +
     	           "<br> El numero mas pequeño es: " + numeroMenor + " Y su letra es: " + letraMasChico +
     	           "<br> El numero mayor es: " + numeroMayor + " Y su letra es: " + letraMasGrande);
}

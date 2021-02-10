/*
   Enunciado:
     - Necesitamos hacer la inscripcion de los corredores de una maraton 
     - Necesitamos saber la edad del mas viejo
     - Necesito saber cuantas mujeres y hombres hubo. (Edad sexo y nombre del mas joven y el nombre de la mujer mas vieja)
*/

/*
function mostrar()
{

 //  var nombreInscriptos;
     var edadInscripto;
     var flag;

     var mayorEdad;
     var menorEdad;

     var respuesta;
     var nombre;
    
     var edadMaxName;
     var edadMinName;

     var cantidadMujeres;
     var cantidadHombres;
     var sexo;

        flag = 0;
        respuesta = "si";
        
        cantidadHombres = 0;
        cantidadMujeres = 0;

        
 while(respuesta == "si") // hace tal cosa mientras ( la respuesta sea equivalente a "si" )
{
     	  
     	 
     	   nombre = prompt("Ingrese Nombre");
     	   edadInscripto =  prompt("Ingrese edad de la parte Inscripta");
     	   edadInscripto = parseInt(edadInscripto);
     	   sexo = prompt (" Ingrese F o M para indicar Sexo");
 
     	     if (flag == 0) //evalua si flag equivale a 0
     	     {
                mayorEdad = edadInscripto;  //asigna la edad actual del inscripto a mayor edad
                menorEdad = edadInscripto;
                edadMaxName = nombre;        // asigna el nombre actual a edad max 
                edadMinName = nombre;
                flag ++ ;

     	      }//Fin If(flag)

     	      if (edadInscripto > mayorEdad)
     	       {
     	        	mayorEdad = edadInscripto;
     	        	edadMaxName = nombre;
     	       }//Fin If()


             if (edadInscripto < menorEdad)
              {
                  menorEdad = edadInscripto;
                  edadMinName = nombre;
              }

             switch(sexo)
             {
             	case "f": cantidadMujeres ++; break;
             	case "m": cantidadHombres ++; break;
             }


     	      do{
     	      		 respuesta = prompt("Desea Continuar? Si/No ");
     	   	    } while(respuesta != "si" && respuesta != "no"); //fin Do While()

           } //Fin while()
   

      console.log("El nombre de la persona con mayor edad es: " + edadMaxName +
      	 " Y su edad es: " + mayorEdad);

      console.log("El nombre del mas joven es: " + edadMinName + " y su edad es de: " + menorEdad);
      console.log("La cantidad de Hombres es de: " + cantidadHombres + " y la cantidad de mujeres es de: " + cantidadMujeres);
}//Fin function
*/



/*
Bienvenidos. 
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar), 
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) La marca del producto más pesado 
c) La cantidad de productos que se conservan a menos de 0 grados. 
d) El promedio del peso de todos los productos. 
f) El peso máximo y el mínimo.
*/

function mostrar()
{
     var marca;
     var peso;
     var respuesta;
   
     var cantTempPares;
    
     var resto; 

    
     var promedioPeso;   
     var cantPeso;
     var productosMenorACero;
     var menosPesado;
     var masPesado;
     var pesoTotal;
     var flag;

     flag = 0;


     pesoTotal = 0;
     cantPeso = 0;
     promedioPeso = 0;
     productosMenorACero = 0;
     respuesta = "s";
     cantTempPares = 0;
     
    


     while(respuesta == "s")
     {

             marca = prompt("Digite una marca");

            
             peso = parseInt(prompt("Digite un peso entre 1 y 100 "));
            
             while( peso < 1 || peso > 100 || isNaN(peso) )  // validacion de Numero entre -100 y 100
             {
                peso = parseInt(prompt("Error. Digite un peso entre 1 y 100 "));
             } // Fin while
           
            

             temperatura = parseInt(prompt("Ingrese la temperatura del producto entre -30 y 30 grados"));
                       
             while( temperatura < -30 || temperatura > 30 || isNaN(temperatura))  // validacion de Numero entre -100 y 100
             {
                 temperatura = parseInt(prompt("Error.. Ingrese la temperatura del producto entre -30 y 30 grados"));
             } // Fin while
             

             pesoTotal += peso;   // suma total de todos los 'pesos' introducidos
             cantPeso++ ;         // contador de los 'pesos'
             /* ------------------------------------ */

             resto = temperatura % 2 ; //Verificador del resto de 'numero' 

             if (resto == 0)     //Contador Numeros pares
              {
                 cantTempPares++ ;
              }  //fin if
           
            /* ------------------------------------ */


              if (flag == 0)
               {
                  masPesado = peso;
                  marcaMasPesado = marca;
                  menosPesado = peso;

                  flag ++ ;
               }
           
            /* ----------------------------------- */

               if (peso > masPesado)
                {
                    masPesado = peso;
                    marcaMasPesado = marca;
                } 
               

               if (peso < menosPesado)
                 {
                    menosPesado = peso;
                 }
             /* ----------------------------------- */


             if (temperatura < 0) 
             {

               productosMenorACero++ ;
             }
                


             do{ //Confirmacion de seguir introduciendo datos
                respuesta = prompt("Continuar? Digite s / n");
             } while(respuesta != "n" && respuesta != "s");

     }

       
     promedioPeso = pesoTotal / cantPeso ;

     document.write(
                   "<br> La cantidad de temperaturas pares es de: " + cantTempPares +  
                   "<br> La marca del producto mas pesado es:  " + marcaMasPesado +
                   "<br> La cantidad de productos con Temp menor a 0 grados es de: " + productosMenorACero +
                   "<br> El promedio del total del peso es de: " + promedioPeso +
                   "<br> El peso del menos pesado es de: " + menosPesado +
                   "<br> El mas pesado es: " + masPesado );

    
}
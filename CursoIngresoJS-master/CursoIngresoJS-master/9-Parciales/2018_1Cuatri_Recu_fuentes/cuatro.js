/*
Bienvenidos. 
(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50".
*/

function mostrar()
{
  var num1 = parseInt(prompt(" ingrese el primer numero: "));
  var num2 = parseInt(prompt(" ingrese el segundo numero: "));
  var suma;

  // Si son iguales los muestro concatenados.
  if(num1 == num2)
  {
      num1 = num1.toString();
      num2 = num2.toString();

      alert(num1 + num2);
  }

  // Si el primero es mayor, los divido, 
  if(num1 > num2)
  {
      alert(num1 / num2)
  }
  else //de lo contrario los sumo.
  {
      suma = num1 + num2;

      // Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
     // "la suma es xxx y es menor a 50".
      if(suma < 50)
      {
        alert("la suma es " + suma + " y es menor a 50");
      }
      else{
          alert(suma);
      }
  }
}

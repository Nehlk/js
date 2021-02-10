/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	
	var precioBruto;  // cantidad de lamparas multiplicado por el precio ¨35¨
        
	var precioDescuent;

	var marca;  // la marca de la lampara
	    marca = document.getElementById("Marca").value;

 	var cantLamparas;
        cantLamparas = document.getElementById("Cantidad").value;
        cantLamparas = parseInt(cantLamparas);

        precioBruto = 35 * cantLamparas;
    var descuento;
   
   // A.  

   if (cantLamparas >= 6) 
     {
     	descuento = 50;
     }
   
   // B.

   else if (cantLamparas == 5 )
     {
     	 if (marca == "ArgentinaLuz")
     	 { 
     	  descuento = 40;
         }
         else
          {
           descuento = 30;
          }

     }

     // C.

    else if (cantLamparas == 4)
      {
         
         if (marca == "ArgentinaLuz" || marca == "FelipeLamparas") 
          {
          	descuento = 25;
          }
          else
          {
          	descuento = 20;
          }

      } 

    // D.

   else if (cantLamparas == 3)
       {
       	 
       	  if (marca == "ArgentinaLuz")
       	   {
       	   	descuento = 15;
       	   }

          else if (marca == "FelipeLamparas")
           {
           	descuento = 10;
           }

          else
          {
          	 descuento = 5;
          }

       }
    
      precioDescuent = precioBruto - (precioBruto * (descuento / 100) );
      document.getElementById("precioDescuento").value = precioDescuent; 

    // E.

     if (precioDescuent >= 120)
     {
       precioDescuent = precioDescuent + (precioDescuent * (10/100));
       alert("Usted pago " + precioDescuent + " de IIBB");
     }

   
  
}

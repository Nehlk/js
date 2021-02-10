function mostrar()
{
//tomo la edad  
var mesDelAnio = document.getElementById('mes').value;

//alert (mesDelAño);
	
	 switch(mesDelAnio)
 { 
 	case "Enero":      alert("Este mes tiene 31 dias.");  break;
 	case "Febrero":    alert("Este mes tiene 28 dias.");  break;
 	case "Marzo":      alert("Este mes tiene 31 dias.");  break;
 	case "Abril":      alert("Este mes tiene 30 dias.");  break;
    case "Mayo":       alert("Este mes tiene 31 dias.");  break;
 	case "Junio":      alert("Este mes tiene 30 dias.");  break;
 	case "Julio":      alert("Este mes tiene 31 dias.");  break;
 	case "Agosto":     alert("Este mes tiene 31 dias.");  break;
 	case "Septiembre": alert("Este mes tiene 30 dias.");  break;
 	case "Octubre":    alert("Este mes tiene 31 dias.");  break;
 	case "Noviembre":  alert("Este mes tiene 30 dias.");  break;
 	case "Diciembre":  alert("Este mes tiene 31 dias.");  break;
 }



}//FIN DE LA FUNCIÓN
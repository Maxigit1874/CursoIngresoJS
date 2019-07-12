function mostrar()
{
//tomo la edad
var laHora = document.getElementById('hora').value;
laHora = parseInt(laHora);
var rango;

//alert (laHora);

if (laHora > 20){
  rango = "Noche";

}else if (laHora >11){
  rango = "Tarde";

}else if (laHora >6){
  rango = "Mañana";

}else {
  rango = "Error";

}

alert(rango);

switch (rango){

  case "Noche" :
    alert ("Es de noche.");
    break;

  case "Tarde":
    alert ("Es de tarde.");
    break;

  case "Mañana" :
    alert ("Es de mañana");
    break;

  case "Error":
    alert("la hora no existe.");
    break;
}


}//FIN DE LA FUNCIÓN

function mostrar()
{
//tomo la edad

var rango;
var laHora = document.getElementById('hora').value;
laHora = parseInt(laHora);


//alert (laHora);

if (laHora > 19 && laHora < 25){
  rango = "Noche";

}else if (laHora >11 && laHora <20){
  rango = "Tarde";

}else if (laHora >6 && laHora <12){
  rango = "Mañana";

}else if (laHora >=0 && laHora <7){
  rango = "Noche";

}else {
  rango = "Error";

}

//alert(rango);

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

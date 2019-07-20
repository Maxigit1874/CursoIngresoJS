function mostrar()
{

var clave;
var cont = 0;
var resp;

/* CON WHILE

while (clave != "utn750"){

  var clave = prompt("ingrese la clave.");
  cont ++;
  if (cont >3){
    break;
  }
}

  alert ("Clave correcta.");
*/

/* CON DO WHILE

do {

  clave = prompt ("Ingrese la clave");
  cont ++;

  if (cont>2){
    break;
    resp = false;
  }

}while (clave != "utn750");

if (resp == false){

  alert ("Clave incorrecta!");

} else {

  alert ("Clave correcta.");

}
*/


// CON FOR


for (cont = 0 ; cont <3; cont ++){

  clave = prompt ("Ingrese su clave","clave ");

  if (clave == "utn750"){
  
    alert ("Clave correcta!");
    break;

  }else {
    alert ("Clave incorrecta!");
  }
    
}
    
if (cont == 3){

  alert ("Intentos agotados");

  }else {

  alert ("Bienvenido");
  }


}//FIN DE LA FUNCIÓN

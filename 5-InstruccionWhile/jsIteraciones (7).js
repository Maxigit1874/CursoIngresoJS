function mostrar()
{

  var acumulador=0;
  var contador=0;
  var num;
  var resp = true;
	//var respuesta="si";
  //while (respuesta == "si"){}


  while (resp){

    num = prompt("Ingrese numero ", "numero");
    num = parseInt (num);
    acumulador = acumulador + num;
    contador ++;

    resp = confirm ("Desea continuar?");

    /* if (resp == true){
        respuesta = "si";
      }else respuesta = "no";
    */

  }

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

/*

Otra variante:
- cuando se apreta cancel devuelve null -

if (num == null);
  break;                 //corta el while.

 */

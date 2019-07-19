function mostrar()
{

	var respuesta= true;
  var num;
  var min;
  var max;

  max = prompt ("Ingrese un numero", "numero");
  max = parseInt(max);

	do{

    num = prompt ("Ingrese otro numero", "numero");

    if (num > max){
      max = num;
      max = parseInt(max);
    }
    if (num < max && num < min){
      min = num;
      min = parseInt (min);
    }


    respuesta = confirm("Desea continuar?");


  }while(respuesta!=false)

  document.getElementById("maximo").value = max;
  document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN

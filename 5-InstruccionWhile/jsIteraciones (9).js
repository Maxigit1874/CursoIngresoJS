function mostrar()
{

	var respuesta= true;
  var num;
  var min=0;
  var max=0;

  num = prompt ("Ingrese un numero", "numero");
  num = parseInt (num);

	do{

    num = prompt("Ingrese un numero", "numero");
    num = parseInt(num);

    if (num > max){
      max = num;
      max = parseInt(max);
    }else if (num < min){
      min = num;
      min = parseInt (min);
    }

    respuesta = confirm("Desea continuar?");


  }while(respuesta!=false)

  document.getElementById("maximo").value = max;
  document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN

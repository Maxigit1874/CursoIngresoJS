function mostrar()
{

	var respuesta= true;
  var num;
  var min;
  var max;
  var contador = 0;

	do{

    num = prompt ("Ingrese un numero", "numero");
    num = parseInt(num);


    if (contador == 0){
      max = num;
      min = num;
      contador ++;
    }

    if (num > max){
      max = num;
      max = parseInt(max);

    } if (num < min){
      min = num;
      min = parseInt (min);
    }


    respuesta = confirm("Desea continuar?");


  }while(respuesta!=false)  // VALIDAR isNAN!!!!

  document.getElementById("maximo").value = max;
  document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN

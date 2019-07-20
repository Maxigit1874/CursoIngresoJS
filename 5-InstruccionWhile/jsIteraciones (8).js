function mostrar()
{

  var num;
	var positivo=0;
	var negativo=1;
	var resp = true;
	//var respuesta='si';

  while (resp){

    num = prompt ("Ingrese un numero","numero");
    num = parseInt(num);
    
    while (isNaN (num)){
    
      num = prompt ("Ingrese un numero", "numero");
      num = parseInt(num);
  
    }

    
    if (num >0){
      positivo += num;
    }else negativo *= num;

    resp = confirm ("Desea continuar?");

    /*if (resp == true){
      respuesta = "si";
    }else respuesta = "no";
    */
  }


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN

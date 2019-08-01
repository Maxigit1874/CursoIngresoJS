function mostrar()
{

  var cantPos=0;
  var cantNeg=0;
  var cantCeros=0;
  var cantPar = 0;
  var cantImp = 0;
  var neg=0;
  var pos=0;
  var num;
  var resp;
  var prompost;
  var promneg;

  do{
    /*
    num = prompt("Ingrese un numero" , "numero");
    num = parseInt(num);

    while (isNaN(num)){
      num = prompt("Ingrese un numero" , "numero");
      num = parseInt(num);
    */                //OTRO TIPO DE VALIDACION MAS ACOTADA.
    do{

    num = prompt("Ingrese un numero" , "numero");
    num = parseInt(num);

    }while (isNaN (num));


    if (num<0){
          cantNeg ++;
          neg += num;

      }else if (num >0){

         cantPos ++;
         pos += num;

      }else {

        cantCeros ++;

      }

      if (num % 2 == 0){   // (&& num != 0) << para que no tome los 0 como pares.

        cantPar ++ ;

      }else{

        cantImp ++;
      }


      resp = confirm ("Desea continuar?");

    }while (resp);

  //para evitar que el promedio sea cero (si no se ingreso ningun positivo)

  if (cantPos == 0){

    prompost == 0;
  }else {

    prompost = pos / cantPos;
  }


  if (cantNeg == 0){

    promneg== 0;
  }else {

    promneg = neg / cantNeg;
  }

  console.log ("Cantidad de positivos: " + cantPos);
  console.log ("Cantidad de negativos: " + cantNeg);
  console.log ("Cantidad de ceros: " + cantCeros);
  console.log ("Suma de positivos: " + pos);
  console.log ("Suma de negativos: " + neg);
  console.log ("Cantidad de pares : " + cantPar);
  console.log ("Cantidad de impares: " + cantImp);
  console.log ("Promedio positivos: " + prompost);
  console.log ("Promedio negativos: " + promneg);
  console.log ("Diferencia entre positivos y negativos: " + (pos - neg));


}//FIN DE LA FUNCIÓN

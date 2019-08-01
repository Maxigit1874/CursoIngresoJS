/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

var num;
var cantPar = 0;
var cantImp = 0;
var cant;

function ComenzarIngreso ()
{




}

function NumerosPares (){

  num = document.getElementById ("numero").value;
  num = parseInt (num);

  for ( num ; num >= 0 ; num --){


    if (num % 2 == 0){

      cantPar ++;
    }
  }

  console.log("La cantidad de numeros pares es: " + cantPar);
}


function NumerosImpares (){


  num = document.getElementById ("numero").value;
  num = parseInt (num);


  for ( num ; num >= 0 ; num --){

    if (num % 2 == 1){
      cantImp ++;

    }
  }

  console.log("La cantidad de numeros impares es: " + cantImp);
}


function NumerosDivisibles (){

  var cantDiv = 0;


  num = document.getElementById ("numero").value;
  num = parseInt (num);

  for (cant = 100 ; cant >= 1 ; cant --){


    if (num % cant == 0){
      //console.log (cant);
      cantDiv ++;
    }


  } console.log("La cantidad de divisores es " + cantDiv);

}


function VerificarPrimo (){


  num = document.getElementById ("numero").value;
  num = parseInt (num);


  for (cant = 2 ; cant <= num ; cant --){



  }





}





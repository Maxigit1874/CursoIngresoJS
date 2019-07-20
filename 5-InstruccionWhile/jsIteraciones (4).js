function mostrar()
{
/*
  var numero = prompt("ingrese un número entre 0 y 10.");

  while (numero <0 || numero >10 || isNaN(numero)){

    numero = prompt("ingrese un número entre 0 y 10.");
    numero = parseInt (numero);

  }

  document.getElementById("Numero").value = numero;
*/

/* CON DO WHILE
var numero;

do{

  numero = prompt ("Ingrese un numero entre 0 y 10.");
  numero = parseInt(numero );



} while (numero <0 || numero >10 || isNaN(numero));

document.getElementById("Numero").value = numero;
*/


//CON FOR

var num;

for ( ; isNaN (num) || num <0 || num >10 ; ){

  num = prompt ("Ingrese un numero entre 0 y 10.");
  num = parseInt(num);

  while (isNaN (num)){
    num = prompt ("Ingrese un numero entre 0 y 10.");
    num = parseInt(num);
  }

}

document.getElementById("Numero").value = num;

}//FIN DE LA FUNCIÓN

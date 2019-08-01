function mostrar()
{

var num;
var cantPar = 0;


num = prompt ("Ingrese un numero", "numero");   // VALIDAR!!!
num = parseInt (num);


for ( num ; num >=1 ; num --){


  if (num % 2 == 0 && num !=0){
  console.log (num);
  cantPar ++;
  }
}

console.log ("La cantidad de pares encontrados es " + cantPar);



}//FIN DE LA FUNCIÓN

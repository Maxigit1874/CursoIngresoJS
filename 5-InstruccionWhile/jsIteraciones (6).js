function mostrar()

/*
{

  var contador=0;
  var num;
  var acumulador=0;


while (contador <5) {

  num = prompt ("Ingrese numero ", "numero");
  num = parseInt (num);
  acumulador = acumulador + num;
  acumulador = parseInt (acumulador);

  // VALIDAR!!! (if/while).

  contador ++;
}
*/
{
var contador = 0;
var num;
var acumulador = 0;

do {

  num = prompt ("ingrese numero",  "numero");
  num = parseInt(num);

  while (isNaN (num)){
    
    num = prompt ("Ingrese un numero", "numero");
    num = parseInt(num);

  }


  acumulador += num;
  acumulador = parseInt (acumulador);

  contador ++;


}while (contador <5);    //VALIDAR CON isNaN (num);



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN

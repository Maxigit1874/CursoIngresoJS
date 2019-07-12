function mostrar()
{
  //Genero el número RANDOM entre 1 y 10

  var nota;

  nota = Math.floor(Math.random()*(11 - 1)) + 1;

  //alert (nota);

  if (nota >8){

    alert("Nota = " + nota + "." + " Excelente!");

  }else if (nota >=4){

    alert("Nota = " + nota + "." + " Aprobo!");

  }else {

    alert("Nota = " + nota + "." + " Vamos, la proxima se puede!");

  }


}//FIN DE LA FUNCIÓN

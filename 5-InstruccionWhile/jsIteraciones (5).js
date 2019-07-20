function mostrar()
{
/*
var sexo = prompt("ingrese f ó m .");


while (sexo != "f" && sexo != "m"){

  var sexo = prompt("ingrese f ó m .");

}


document.getElementById('Sexo').value=sexo;
*/



/*CON DO WHILE 

var sexo;

do {

  sexo = prompt("Ingrese f o m");


}while (sexo != "f" && sexo !="m");

document.getElementById('Sexo').value=sexo;
*/

var sexo;

for ( ; sexo != "f" && sexo != "m" ; ){

  sexo = prompt("Ingrese f o m");

}

document.getElementById("Sexo").value = sexo;


}//FIN DE LA FUNCIÓN

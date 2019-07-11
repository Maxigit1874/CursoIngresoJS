function mostrar()
{
//tomo la edad

var edad;

edad = document.getElementById("edad").value;
edad = parseInt(edad);

if (edad >= 18){

  alert("La persona es mayor de edad.");

}

if (edad >=13 && edad <=17){

  alert ("La persona es adolescente.");
}

if (edad <13){

  alert ("La persona es un niño.");

}



}//FIN DE LA FUNCIÓN

function mostrar()
{
//tomo la edad

var edad;

edad = document.getElementById("edad").value;
edad = parseInt(edad);

if (edad <=12 || edad >=18){

  alert("La persona no es adolescente.");

}


}//FIN DE LA FUNCIÓN

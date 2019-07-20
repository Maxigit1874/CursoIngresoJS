
function mostrar()
{
var ancho;
var largo;
var resultado;

ancho = prompt ("Ingrese el ancho" , "ancho");
ancho = parseInt (ancho);

while ( isNaN (ancho)){
    ancho = prompt ("Ingrese el ancho" , "ancho");
    ancho = parseInt (ancho);

}

largo = prompt ("Ingrese el largo", "largo");
largo = parseInt (largo);

while ( isNaN (largo)){
    largo = prompt ("Ingrese el largo" , "largo");
    largo = parseInt (largo);

}

resultado = ((ancho + largo)*2);

alert (resultado);


}


function mostrar()
{
var ancho;
var largo;
var perimetro;

ancho = prompt ("Ingrese el ancho.", "ancho");
largo = prompt ("Ingrese el largo.", "largo");

ancho = parseInt(ancho);
largo = parseInt(largo);

perimetro = (ancho + largo)*2;

alert(perimetro);

}

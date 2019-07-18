/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    var largo;
    var ancho;
    var resultado;

    largo = document.getElementById ("Largo").value;
    ancho = document.getElementById("Ancho").value;
    
    largo = parseFloat (largo);
    ancho = parseFloat (ancho);

    resultado = 3*(2*(largo + ancho));

    alert (resultado);

}
function Circulo () 
{

    var radio;
    var pi = 3.14159;
    var resultado;

    radio = document.getElementById("Radio").value;

    radio = parseInt(radio);

    resultado = ((radio *2)*pi)*3;

    alert (resultado);


	
}
function Materiales () 
{
    var largo;
    var ancho;
    var cemento;
    var cal;

    largo = document.getElementById ("Largo").value;
    ancho = document.getElementById("Ancho").value;
    
    largo = parseFloat (largo);
    ancho = parseFloat (ancho);

    cemento = largo + ancho;
    cal = ((largo + ancho) / 2) + cemento;

    

    alert (cemento);
    alert (cal);
    
    

    
	
}
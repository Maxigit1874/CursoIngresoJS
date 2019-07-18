/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var num1;
var num2;
var num3;
var iva;


function Sumar () 
{
    num1 = document.getElementById("PrecioUno").value;
    num2 = document.getElementById("PrecioDos").value;
    num3 = document.getElementById("PrecioTres").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    alert (num1 + num2 + num3);
	
}
function Promedio () 
{
    num1 = document.getElementById("PrecioUno").value;
    num2 = document.getElementById("PrecioDos").value;
    num3 = document.getElementById("PrecioTres").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);

    alert ((num1 + num2 + num3) / 3);


}
function PrecioFinal () 
{
    num1 = document.getElementById("PrecioUno").value;
    num2 = document.getElementById("PrecioDos").value;
    num3 = document.getElementById("PrecioTres").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);
    num3 = parseInt(num3);
    
    iva = (((num1 + num2 + num3)*21)/100);
    alert (num1 + num2 + num3 + iva);
}
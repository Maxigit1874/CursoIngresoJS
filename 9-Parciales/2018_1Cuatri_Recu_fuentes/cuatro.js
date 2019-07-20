function mostrar()
{

var num1;
var num2;
var resultado;

num1 = prompt ("Ingrese el primer numero" , "numero");
num1 = parseInt (num1);

while (isNaN (num1)){
    num1 = prompt ("Ingrese el primer numero" , "numero");
    num1 = parseInt (num1);
}

num2 = prompt ("Ingrese el segundo numero" , "numero");
num2 = parseInt(num2);

while (isNaN (num2)){

    num2 = prompt ("Ingrese el segundo numero" , "numero");
    num2 = parseInt(num2);
}

if (num1 == num2){

    alert (num1 + " , " + num2);

}else if (num1 > num2){

    alert (num1/num2);
    
}else {

    resultado = num1 + num2;
    
}

if (resultado <50){

    alert ("La suma es " + resultado + " y es menor a 50");
}




}

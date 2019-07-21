function mostrar()
{

var num;
var letra;
var contPos = 0;
var contador = 0;
var max;
var maxLetra;
var min;
var minLetra;
var suma = 0;
var totNeg = 0;
var pares = 0;
var impares = 0;
var ceros = 0;
var promedio;
var resp = true;

do{

num = prompt ("Ingrese un numero" , "numero");
num = parseInt (num);


while (isNaN (num) || num <-100 || num >100){
    num = prompt ("Ingrese un numero" , "numero");
    num = parseInt (num);
}

contador ++;
contador = parseInt (contador);

if (num % 2 != 0){

    impares ++;
    impares = parseInt (impares);

}else if (num != 0) {

    pares ++;
    pares = parseInt (pares);

} else {

    ceros ++;
    ceros = parseInt (ceros);
}

if (num >0){

    contPos ++;
    contPos = parseInt(contPos);
    suma += num;
    suma = parseInt (suma);
    alert (suma);
    alert (contPos);

}else {

    totNeg += num;
    totNeg = parseInt (totNeg);

}


letra = prompt ("Ingrese una letra" , "letra");


if (contador == 1){

    max = num;
    max = parseInt (max);
    maxLetra = letra;

    min = num;
    min = parseInt (min);
    minLetra = letra;
    
}

if (num > max){

    max = num;
    max = parseInt (max);
    maxLetra = letra;

}else if (num < min){

    min = num;
    min = num;
    min = parseInt (min);
    minLetra = letra;

}


resp = confirm ("Desea continuar?");

}while (resp);

promedio = suma / contPos;
promedio = parseInt (promedio);


alert (suma);
alert (contPos);
document.write ("La cantidad de numeros pares es: " + pares);
document.write ("<br>");
document.write ("La cantidad de numeros impares es: " + impares);
document.write ("<br>");
document.write ("La cantidad de ceros es: " + ceros);
document.write ("<br>");
document.write ("El promedio de todos los numeros positivos es: " + promedio);
document.write ("<br>");
document.write ("La suma de todos los negativos es: " + totNeg);
document.write ("<br>");
document.write ("El numero y la letra del maximo es: " + max + " " + maxLetra);
document.write ("<br>");
document.write ("El numero y la letra del minimo es: " + min + " " + minLetra);



}

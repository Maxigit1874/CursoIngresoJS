function mostrar()
{

var animal;
var peso;
var pesoMax;
var pesoMin0;
var pesoMax0;
var pesoTot = 0;
var nombrePesMax;
var temPesMax;
var promedio;
var temp;
var tempPares = 0;
var resp = true;
var cont = 0;
var contMen0 = 0;


do {

cont ++;
cont = parseInt (cont);


animal = prompt ("Ingrese el nombre del animal" , "animal");


peso = prompt ("Ingrese su peso" , "peso");
peso = parseInt (peso);

while (peso <1 || peso > 1000){

    alert ("Peso incorrecto!");
    peso = prompt ("Ingrese su peso" , "peso");
    peso = parseInt (peso);

}

pesoTot += peso;
pesoTot = parseInt (pesoTot);


temp = prompt ("Ingrese la temperatura de su habitat" , "temperatura");
temp = parseInt (temp);

while (temp < -30 || temp > 30){

    alert ("Temperatura incorrecta!");
    temp = prompt ("Ingrese la temperatura de su habitat" , "temperatura");
    temp = parseInt (temp);
}

if (temp <= -1){

    contMen0 ++;

}else if (contMen0 == 1){
    
    pesoMax0 =  peso;
    pesoMax0 = parseInt (pesoMax0);
    pesoMin0 = peso;
    pesoMin0 = parseInt (pesoMin0);
}


if (cont == 1){
    
    pesoMax = peso;
    pesoMax = parseInt (pesoMax);
    nombrePesMax = animal;
    temPesMax = temp;
    temPesMax = parseInt (temPesMax);
}

if (temp < 0 && peso > pesoMax0){

    pesoMax0 = peso;
    pesoMax0 = parseInt (pesoMax0)


}else if (temp < 0 && peso < pesoMin0){

    pesoMin0 = peso;
    pesoMin0 = parseInt (pesoMin0);

}


if (peso > pesoMax){

    pesoMax = peso;
    pesoMax = parseInt (pesoMax);
    nombrePesMax = animal;
    temPesMax = temp;
    temPesMax = parseInt (temPesMax);

}


if (temp % 2 == 0){

    tempPares ++;
    tempPares = parseInt (tempPares); 
}




resp = confirm ("Desea continuar?");


}while (resp);

promedio = pesoTot / cont;
promedio = parseInt (promedio);

document.write ("La cantidad de temperaturas pares es : " + tempPares);
document.write ("<br>");
document.write ("El animal mas pesado es: " + nombrePesMax + " y su temperatura de habitat es: " + temPesMax);
document.write ("<br>");
document.write ("La cantidad de animales que viven a menos de 0 grados es: " + contMen0);
document.write ("<br>");
document.write ("El promedio de peso de todos los animales es: " + promedio);
document.write ("<br>");
document.write ("El peso maximo de los animales que viven a -0 grados es: " + pesoMax0);
document.write ("<br>");
document.write ("El peso minimo de los animales que viven a -0 grados es: " + pesoMin0);





}

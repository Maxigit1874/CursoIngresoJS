function mostrar()
{

var nota;
var sexo;
var alum;
var acum = 0;
var alumF = 0;
var alumM = 0;
var M6 = 0;
var notMin = 10;
var sexoMin;

for (alum = 0 ; alum <5 ; alum ++){

nota = prompt ("Ingrese la nota" , "nota");
nota = parseInt (nota);

while (isNaN (nota)){
    
    nota = prompt ("Ingrese la nota" , "nota");
    nota = parseInt (nota);
}

acum += nota;
acum = parseInt (acum);

sexo = prompt ("Ingrese el sexo", "sexo");


while (sexo != "f" && sexo != "m"){

    sexo = prompt ("Ingrese el sexo", "sexo");
}

if (nota < notMin){

    notMin = nota;
    sexoMin = sexo;
}

if (nota >= 6 && sexo == "m"){

    M6 ++;
}


if (sexo == "f"){

    alumF ++;
    alumF = parseInt (alumF);

}else {

    alumM ++;
    alumM = parseInt (alumM);

}


}

document.write ( "Promedio de notas = " + acum/5) +".";
document.write ("<br>");
document.write ("Varones con notas mayor o igual a 6 = " + M6 + ".");
document.write ("<br>");
document.write ("La nota minima es " + notMin + " y el sexo de ese alumno es " + sexoMin + ".");
//alert (alumM);
//alert (alumF);

}

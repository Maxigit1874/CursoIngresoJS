function mostrar()
{

var nota;
var sexo;
var alum;
var acum = 0;
var alumF = 0;
var alumM = 0;
var M6 = 0;

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

if (nota >= 6 && sexo == "m"){

    M6 ++;
}


if (sexo == "f"){

    alumF ++;
    alumF =parseInt (alumF);

}else {

    alumM ++;
    alumM =parseInt (alumM);

}


}
alert (acum/5);
alert ("Varones con notas mayor o igual a 6 = " + M6);
//alert (alumM);
//alert (alumF);

}

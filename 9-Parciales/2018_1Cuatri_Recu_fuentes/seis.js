function mostrar()
{

var hora;
var rango;

hora = document.getElementById("laHora").value;


if (hora > 5 && hora < 12){

    rango = "mañana";

}else if (hora > 11 && hora <20){

    rango = "tarde";

}else if (hora > 19 && hora < 25){

    rango = "noche";

}else if (hora >=0 && hora <6){

    rango = "noche";
    
}else {

    alert ("hora invalida");
}




switch (rango){

    case "mañana":
        alert ("es de mañana");
        break;

    case "tarde":
        alert ("es de tarde");
        break;

    case "noche":
        alert ("es de noche");
        break;    
    }


if (rango == "noche" && hora <24 && hora >19){

    alert ("a dormir!");
}


}

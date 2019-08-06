
/*

function mostrar()
{

    var hora;
    var rango;

    hora = document.getElementById("laHora").value;

    //alert (hora);

    if (hora >5 && hora <12){
        rango = "mañana";

    }else if (hora >11 && hora <20) {
        rango = "tarde";

    }else if (hora >19 && hora <25){
        rango = "noche";

    }else if (hora >=0 && hora <6){
        rango = "noche";
    }else 
        rango = "error";

        //alert (rango);

    switch (rango){

        case "mañana":
            alert ("Es de mañana.");
            break;

        case "tarde":
            alert ("Es de tarde.");    
           break;

        case "noche":
            alert ("Es de noche.");
            break;

        case "error":
            alert ("Hora invalida.");
            
            
    }

    if (rango == "noche" && hora <24 && hora >19){

        alert ("A dormir!");
    }

}
*/

/////////
function mostrar()
{

var hora;
var rango;

hora = document.getElementById("laHora").value;
hora = parseInt(hora);

switch (hora){

    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        rango = "noche";
        if (rango = "noche"){
            alert ("es de noche");
        }
        break;

    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
        rango = "mañana";
        if (rango = "mañana"){
            alert ("es de mañana");
        }
        break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        rango = "tarde";
        if (rango = "tarde"){
            alert ("es de tarde");
        }
        break;
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
        rango = "noche";
        if (rango = "noche"){
            alert ("es de noche");
        }if (hora < 24){
            alert ("a dormir!");
        }
        break;
    default:
        alert ("La hora es incorrecta");

}


}
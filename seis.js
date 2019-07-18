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

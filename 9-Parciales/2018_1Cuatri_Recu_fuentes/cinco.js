function mostrar()
{

var dia;

dia = prompt ("Ingrese un dia de la semana" , "dia");

switch (dia){

    case "lunes":

    case "martes":

    case "miercoles":

    case "jueves":

    case "viernes":

       alert ("a trabajar!");
        break;

    case "sabado":

    case "domingo":
        alert ("buen fin de semana!");
        break;

    default:
        alert ("dia invalido!");

}


}

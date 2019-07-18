function mostrar()
{

    var num1;
    var num2;
    var resultado;

    num1 = prompt ("Ingrese el primer numero", "numero");
    num2 = prompt ("Ingrese el segundo numero", "numero");
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if (num1 == num2){

        alert(num1 + " - " + num2);

    }else {
        if (num1 > num2){
        
            resultado = num1 - num2;
            alert (resultado);

        }else{
            resultado = num1 + num2;

                alert (resultado);

                if (resultado > 10){
                     alert ("La suma es " + resultado + " y supero el 10");
                }
            }

    }

}

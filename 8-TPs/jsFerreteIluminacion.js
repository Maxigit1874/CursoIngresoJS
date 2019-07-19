/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     
    var precioLamp = 35;
    var cantLamp;
    var desc;
    var marca;
    var precioFinal;
    var iibb;

    cantLamp = document.getElementById("Cantidad").value;
    marca = document.getElementById("Marca").value;

    precioLamp = parseInt (precioLamp);
    cantLamp = parseInt (cantLamp);

    if (cantLamp > 5){

        desc = precioLamp / 2;

    }

    if (cantLamp == 5){

        if (marca == "ArgentinaLuz"){

            desc = (40 * precioLamp) / 100;

        }else desc = (30 * precioLamp) / 100;


    }

    if (cantLamp == 4){

        if (marca == "ArgentinaLuz" || marca == "FelipeLamparas"){

            desc = (25 * precioLamp) / 100;
        
        }else desc = (20 * precioLamp) / 100; 
    }

    if (cantLamp == 3){

        if (marca == "ArgentinaLuz"){

            desc = (15 * precioLamp) / 100;
        
        }else if ( marca == "FelipeLamparas"){

            desc = (10 * precioLamp) / 100;

        }else {

            desc = (5 * precioLamp) / 100;
        }

    }

    
    

    precioFinal = cantLamp * (precioLamp - desc);

    if (precioFinal > 120){
        iibb = (precioFinal * 10) / 100;
        precioFinal = precioFinal + iibb;
        document.getElementById("precioDescuento").value = precioFinal;
        alert ("IIBB Ud pago " + iibb);
    }else {

        document.getElementById("precioDescuento").value = precioFinal;
    }
   

    

    

    

   
    


}

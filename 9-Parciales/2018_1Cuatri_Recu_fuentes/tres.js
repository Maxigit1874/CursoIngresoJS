function mostrar()
{

var precio;
var descuento;
var precioFinal;

precio = prompt ("Ingrese el precio", "precio");
precio = parseInt (precio);

while (isNaN (precio)){
    precio = prompt ("Ingrese el precio", "precio");
    precio = parseInt (precio);
}

descuento = prompt ("Ingrese el % de descuento", "descuento");
descuento = parseInt (descuento);

while (isNaN (descuento)){
    descuento = prompt ("Ingrese el % de descuento", "descuento");
    descuento = parseInt (descuento);
}

precioFinal = precio - ((descuento * precio) / 100);
precioFinal = parseInt (precioFinal);

document.getElementById("elPrecioFinal").value = precioFinal;


}

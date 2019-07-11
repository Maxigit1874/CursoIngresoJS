function mostrar()
{
  var precio;
  var porcentaje;
  var resultado;
  var preciofinal;

  precio = prompt("Ingrese el precio: ", "precio");
  porcentaje = prompt("Ingrese porcentaje de descuento: ", "descuento");

  precio = parseInt(precio);
  porcentaje = parseInt(porcentaje);

  resultado = (porcentaje * precio) / 100;

  preciofinal = precio - resultado;

  document.getElementById("elPrecioFinal").value = preciofinal;


}

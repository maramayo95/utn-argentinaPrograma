
$(document).ready(function() {
    // Seleccionamos todas las filas de la tabla
    let filas = $("table tr");

    // Agregamos el evento clic a cada fila
    filas.click(function() {
      // Cambiamos el color de fondo de la fila clickeada
      $(this).toggleClass("seleccionada");
    });
  });
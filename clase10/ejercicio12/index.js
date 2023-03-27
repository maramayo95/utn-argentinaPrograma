
$(document).ready(function() {
  // Seleccionamos todos los elementos li de la lista
  let elementos = $("li");
  
  elementos.click(function() {
    // Ocultamos el elemento clickeado
    $(this).hide();
  });
})


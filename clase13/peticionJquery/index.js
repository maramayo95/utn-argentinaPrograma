

// Esperar a que se cargue el documento
$(document).ready(function() {

    $.get('https://random-data-api.com/api/v2/users', (data,status)=> {
        console.log(data)
        const datosHtml = `
            <p> Nombre : ${data.first_name} </p>
            <P> Apellido : ${data.last_name} </p>
            <p> Email : ${data.email} </p>
            <p> Gender : ${data.gender} </p>
            <p> Phone : ${data.phone_number} </p>
        `
         $("#imprimir").html(datosHtml)

    })
    
    // Asignar evento submit al formulario
 })
    
  

   
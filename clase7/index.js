// const cambiarFondo = document.getElementById("cambiarFondo")
// const box = document.getElementById("box")
// const colorHex = document.getElementById("colorHex")

// Ejercicios 1 y 2 en clase 

// cambiarFondo.addEventListener('click', () => {
//      const regex = /^#([0-9A-F]{3}){1,2}$/i
//      const test = regex.test(colorHex.value)
    
//     if(!test){
//         alert("El color ingresado no es valido")
//         return
//     }

    
//     box.style.backgroundColor =  colorHex.value

    
// })



// Ejercicio 3 en clase

// const nombre = document.getElementById("nombre")
// const apellido = document.getElementById("apellido")
// const saludar = document.getElementById("saludar")

// saludar.addEventListener("click", () => { 
//     const capturarNombre = nombre.value
//     const capturarApellido = apellido.value
//     alert(`Hola ${capturarNombre} ${capturarApellido}`)
// })



//Ejercicio formulario imprimir datos

// const nombre = document.getElementById("nombre")
// const apellido = document.getElementById("apellido")
// const genero = document.getElementById("genero")
// const telefono = document.getElementById("telefono")
// const enviarDatos = document.getElementById("enviarDatos")
// const imprimirDatos = document.getElementById("imprimirDatos")



// enviarDatos.addEventListener("click", (e) => {

//      e.preventDefault()
//     imprimirDatos.innerHTML = `
//         <h3>${nombre.value}</h3>
//         <h3>${apellido.value}</h3>
//         <p>${genero.options[genero.selectedIndex].value}</p>
//         <p>${telefono.value}</p>
//     `

// })

const pesos = document.getElementById("pesos")
const boton = document.getElementById("convertir")
const imprimirDatos = document.getElementById("imprimirDatos")


// boton.addEventListener('click', () => {
//     //Para hacer lo mismo de dolares a pesos hay que cambiar la operación aritmética 
//     const convertirDolares = parseFloat(pesos.value) / 300
//     imprimirDatos.innerHTML = `
//     <p> Este es el valor del dolar </p>
//     <h3>${convertirDolares}</h3>
//     `
// })


// const gradosCentigrados = document.getElementById("gradosCentigrados")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", () => {
//     const obtenerDatos = gradosCentigrados.value 
//     const regex = /^\d+\.\d{0,2}$/;
//     const onlyNumbers = regex.test(obtenerDatos)
    
//     if(obtenerDatos > 55){
//         alert("Esa temperatura es demasiado alta")
//         return
//     }


//     if(!onlyNumbers) {
//         alert("Debes ingresar solo numeros ")
//         return
//     }

//     const calcularFarenheit = ((9/5) * parseFloat(obtenerDatos)) + 32

//     alert(calcularFarenheit)

// })

// const nombre = document.getElementById("nombre")
// const dimensiones = document.getElementById("dimensiones")
// const comentarios = document.getElementById("comentarios")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", (e) => {
//     e.preventDefault()
//     alert(`${nombre.value} compro una caja de la dimensión : ${dimensiones.options[dimensiones.selectedIndex].value} y dejo el siguiente comentario ${comentarios.value}`)
// })



// Ejercicio 13 

// const numeroSecreto = parseInt(prompt("Ingrese un Numero"))

// const numeroUsuario = document.getElementById("numero")

// const btn = document.getElementById("btn")

// let intentos = 0;


// btn.addEventListener("click", () => {
//     intentos++

//     if(intentos >= 3) {
//         alert("Perdiste")
//         intentos = 0
//         return
//     }

//     if(numeroSecreto == numeroUsuario.value){
//         alert("Ganaste")
        
//     } else {
//         alert("No es el numero Indicado")
//     }
// })


// Ejercicio 14
// const nombre = document.getElementById("nombre")
// const enviar = document.getElementById("enviar")
// const lista = document.getElementById("lista")

// enviar.addEventListener("click", () => {
//     lista.innerHTML += `<li>${nombre.value}</li>`
// })
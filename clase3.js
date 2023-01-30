// Ejercicio 1 

function tipoDeDato(dato){
    console.log(typeof dato)
}
//tipoDeDato(true)


//Ejercicio 2 
function resta(num1, num2){
    const resultado = num1 - num2
     console.log(resultado)
}
//resta(4,3)

// Ejercicio 3

function ejercicioTres(val1,val2){
    let a = val1;
    let b = val2;


   
    console.log(a,b)
}

ejercicioTres(3,2)

// Ejercicio 3 
function swapValues(a, b) {
    [a, b] = [b, a];
    console.log("a: " + a + " b: " + b);
  }

// Ejercicio 4 

function cuadrado(lado){
    const perimetro = lado*4
    console.log(`Su perímetro es ${perimetro}`)

    const superficie = lado * lado
    console.log(`Su superficie es de ${superficie}`)

}

//cuadrado(5)

// Ejercicio 5 

function farenheitCelcius(gradoF){
    const formulaUno =(((gradoF -32)*5)/9)
    const formulaDos = formulaUno.toFixed(1)
    console.log(`${gradoF} son ${formulaDos}°C`)
}

farenheitCelcius(75)

//Ejercicio 6 

function factorial(num) {
    if (num > 10) {
      console.log("El número no puede ser mayor a 10.");
      return;
    }
  
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
  
    console.log("El factorial de " + num + " es " + result);
  }
  
  //let num = prompt("Ingrese un número (hasta 10) para calcular su factorial:");
  factorial(5);

  // Ejercicio 7
    
  const   esPalindromo = (texto) => {
    let normalized = texto.toLowerCase().match(/[a-z]/gi).reverse();
    const validar = normalized.join('') === normalized.reverse().join('');
    if(validar){
        console.log("Es Palindromo")
    } else {
        console.log("No es Palindromo ")
    }
  }
//  esPalindromo("Hola")

// Ejercicio 8 

function convertirString(texto){

    const mayuscula = texto.toUpperCase()
    const minuscula = texto.toLowerCase()

    console.log(mayuscula)
    console.log(minuscula)
}

convertirString("Hola")
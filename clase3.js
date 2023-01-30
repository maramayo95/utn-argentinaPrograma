// Ejercicio 1

function tipoDeDato(dato) {
  console.log(typeof dato);
}
//tipoDeDato(true)

//Ejercicio 2
function resta(num1, num2) {
  const resultado = num1 - num2;
  console.log(resultado);
}
//resta(4,3)

// Ejercicio 3

function ejercicioTres(val1, val2) {
  let a = val1;
  let b = val2;

  console.log(a, b);
}

//ejercicioTres(3,2)

// Ejercicio 3
function swapValues(a, b) {
  [a, b] = [b, a];
  console.log("a: " + a + " b: " + b);
}

// Ejercicio 4

function cuadrado(lado) {
  const perimetro = lado * 4;
  console.log(`Su perímetro es ${perimetro}`);

  const superficie = lado * lado;
  console.log(`Su superficie es de ${superficie}`);
}

//cuadrado(5)

// Ejercicio 5

function farenheitCelcius(gradoF) {
  const formulaUno = ((gradoF - 32) * 5) / 9;
  const formulaDos = formulaUno.toFixed(1);
  console.log(`${gradoF} son ${formulaDos}°C`);
}

//farenheitCelcius(75)

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

const esPalindromo = (texto) => {
  let normalized = texto.toLowerCase().match(/[a-z]/gi).reverse();
  const validar = normalized.join("") === normalized.reverse().join("");
  if (validar) {
    console.log("Es Palindromo");
  } else {
    console.log("No es Palindromo ");
  }
};
//  esPalindromo("Hola")

// Ejercicio 8

function convertirString(texto) {
  const mayuscula = texto.toUpperCase();
  const minuscula = texto.toLowerCase();

  console.log(mayuscula);
  console.log(minuscula);
}

//convertirString("Hola")

// Ejercicio 9
function evaluarNotaIf(nota) {
  if (nota > 10) {
    console.log("Ese tipo de nota no existe");
    return;
  }

  if (nota <= 3) {
    console.log("Muy Deficiente");
  } else if (nota == 4) {
    console.log("Insuficiente");
  } else if (nota >= 5 && nota <= 6) {
    console.log("Suficiente");
  } else if (nota == 7) {
    console.log("Bien");
  } else if (nota >= 8 && nota <= 9) {
    console.log("Notable");
  } else {
    console.log("Sobresaliente");
  }
}

// evaluarNotaIf(15)

// Ejercicio 9 
function ingresarMes(mes) {
  switch (mes) {
    case (mes = 1):
      console.log("Enero tiene 31 dias");
      break;
    case (mes = 2):
      console.log("Febrero tiene 28 días");
      break;
    case (mes = 3):
      console.log("Marzo tiene 31 días");
      break;
    case (mes = 4):
      console.log("Abril tiene 30 días");
      break;
    case (mes = 5):
      console.log("Mayo tiene 31 días ");
      break;
    case (mes = 6):
      console.log("Junio tiene 30 días");
      break;
    case (mes = 7):
      console.log("Julio tiene 31 días");
      break;
    case (mes = 8):
      console.log("Agosto tiene 31 días");
      break;
    case (mes = 9):
      console.log("Septiembre tiene 30 días");
      break;
    case (mes = 10):
      console.log("Octubre tiene 31 días");
      break;
    case (mes = 11):
      console.log("Noviembre tiene 30 días");
      break;
    case (mes = 12):
      console.log("Diciembre tiene 31 días");
      break;
    default:
      console.log("No reconozco ese numero como mes ");
  }
}

ingresarMes(5);

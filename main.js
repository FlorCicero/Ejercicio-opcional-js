//Ingresar 5 precios por prompt  mediante una funcion sumar los 5 productos
// y mostrar con un alert

let precio1 = parseInt(prompt("Ingrese el valor del precio 1"));
let precio2 = parseInt(prompt("Ingrese el valor del precio 2"));
let precio3 = parseInt(prompt("Ingrese el valor del precio 3"));
let precio4 = parseInt(prompt("Ingrese el valor del precio 4"));
let precio5 = parseInt(prompt("Ingrese el valor del precio 5"));

function suma(precios) {
  let resultado = 0;
  for (let i = 0; i < precios.length; i++) {
    resultado = precios[i] + resultado;
  }
  return resultado;
}

alert(suma([precio1, precio2, precio3, precio4, precio5]));

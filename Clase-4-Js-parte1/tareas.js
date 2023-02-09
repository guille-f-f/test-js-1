// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  // propiedad length
  // return array[array.length -1];
  // metodo at
  return array.at(-1);
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  const newArray = [];
  for(i=0; i<array.length; i++){
     newArray[i] = array[i] + array[i];
  }
  return newArray;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  return array.push(elemento);
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  return array.unshift(elemento);
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(" ");
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  return array.includes(elemento);
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

  let resultado = 0;

  //Posibles soluciones encontradas:
  //for
  // for(i=0; i<numeros.length; i++){
  //   resultado += numeros[i];
  // }
  
  //forEach (funcion flecha)
  // numeros.forEach((elemento) => {
  //   resultado += elemento;
  // });

  //forEach (funcion por expresion)
  // numeros.forEach(function(elemento){
    // resultado += elemento;
  // })

  //while
  // let i = 0;
  // while(i<numeros.length){
  //   resultado += numeros[i];
  //   i++;
  // }
  
  //for in
  for(numero in numeros){
    resultado += numeros[numero];
  }
  return resultado;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  for(suma=0, i=0; i<resultadosTest.length; i++){
    suma += resultadosTest[i];
  }
  let promedio = suma/resultadosTest.length;
  return promedio;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // Metodo .sort
  // let arregloOrdenado = numeros.sort((a, b) => a-b);
  // let ultimaPosicion =  arregloOrdenado[numeros.length -1];
  // return ultimaPosicion;
  // metodo Math.max
  return Math.max(...numeros);
}

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
  let arregloFiltrado = arreglo.filter((elemento) => elemento>19);
  return arregloFiltrado.length;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
  } else if(numeroDeDia > 1 && numeroDeDia < 7) {
    return "Es dia Laboral"
  } else {return 'Error!: El valor ingresado debe ser numerico, y encontrarse en el rango que va del numero 1, al numero 7';
  }
} 

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let valorAbsoluto = Math.abs(n);
  let comparativa = +valorAbsoluto.toString()[0] === 9;
  return comparativa;
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí:
  
  // bucle for
  // for(i=0; i<arreglo.length; i++){
  //   let comparacion = arreglo[i] === arreglo[0];
  //   if(comparacion === false){
  //     return false;
  //   }
  // }
  // return true;  

  // metodo .every()
  return arreglo.every(element => element === arreglo[0]);
} 

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let nuevoArray = array.filter(elemento => elemento.toLowerCase() === "enero" || elemento.toLowerCase() === "marzo" || elemento.toLowerCase() === "noviembre");

  let arrayComprobacion = nuevoArray.map(e => e.toLowerCase());

  if(arrayComprobacion.includes("enero") && arrayComprobacion.includes("marzo") && arrayComprobacion.includes("noviembre")){
    return nuevoArray;
  } else {return "No se encontraron los meses pedidos";}
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  if(array.filter(elemento => elemento > 200).length > 0){
    return "Error: El array contiene elementos fuera de parametro";
  }
  return nuevoArray = array.filter(elemento => elemento > 100);
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};

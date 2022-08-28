// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  let primerElemento = array[0];
  return primerElemento;
}
devolverPrimerElemento([])
console.log(devolverPrimerElemento([10, 10, 16, 12]))


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  let ultimo = array.length - 1;
  let elemento = array[ultimo]
  return elemento;
}
devolverUltimoElemento([])
console.log(devolverUltimoElemento([97, 100, 80, 55, 72, 94]))

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  let largo = array.length;
  return largo;
}
obtenerLargoDelArray([])
console.log(obtenerLargoDelArray(['hi', 'there', 'how', 'are', 'you', 'doing?']))


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let incrementado = [];
  for(let i = 0; i < array.length; i++)
    incrementado.push(array[i] + 1);
  return incrementado;
}
incrementarPorUno([])
console.log(incrementarPorUno([97, 100, 80, 55, 72, 94]))


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  return array;
}
agregarItemAlFinalDelArray([])
console.log(agregarItemAlFinalDelArray([10, 10, 16, 12], 10))



function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array
}
agregarItemAlComienzoDelArray([])
console.log(agregarItemAlComienzoDelArray([97, 100, 80, 55, 72, 94], "hola"))


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let frase;
  frase = palabras.join(" ");
  return frase;
}
console.log(dePalabrasAFrase(['Henry', 'JavaScript', 'Class']))

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(let i = 0; i < array.length; i++)
  if(array[i] === elemento) return true;
  if(array == null) return false;
  else return false;
}
arrayContiene([])
console.log(arrayContiene([], true))


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let resultado = 0;
  for(let i = 0; i < numeros.length; i++)
  resultado += numeros[i]
  return resultado;
}
agregarNumeros([])
console.log(agregarNumeros([97, 100]))

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let sumados = 0;
  for(let i = 0; i < resultadosTest.length; i++){
    sumados += resultadosTest[i];
  }
  return sumados / resultadosTest.length;
}
promedioResultadosTest([])
console.log(promedioResultadosTest([97, 100, 80, 55, 72, 94]))


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let indice = 0;
  for(let i = 0; i < numeros.length; i++)
  if(numeros[i] > indice)
  indice = numeros[i];
  return indice;
}
numeroMasGrande([])
console.log(numeroMasGrande([97, 100, 80, 55, 72, 94]))


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  let total;
  if(arguments.length === 0) return 0;
  else{
    total = arguments[0]
    for(let i = 1; i < arguments.length; i++){
    total *= arguments[i]
    }
  }
return total;
}
multiplicarArgumentos()
console.log(multiplicarArgumentos(3, 3, 3, 3))


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let elementosMayores = 0;
  for(let i = 0; i < arreglo.length; i++)
  if(arreglo[i] > 18){
    elementosMayores++
  }
  return elementosMayores;
}
cuentoElementos([])
console.log(cuentoElementos([97, 20, 90, 50, 7, 709]))


function diaDeLaSemana(numeroDeDia) {   //(1 domingo) (2 lunes) (3 martes) (4 miercoles) (5 jueves) (6 viernes) (7 sabado)
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia > 8 | numeroDeDia < 1) return false;
  if(numeroDeDia == 1 | numeroDeDia == 7) return "Es fin de semana";
  else return "Es dia Laboral";
}
diaDeLaSemana()
console.log(diaDeLaSemana(6)) 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numeroString = n.toString();
  if(numeroString[0] === "9"){
    return true;
  }else return false;
}
empiezaConNueve(98)
console.log(empiezaConNueve(98))


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let indice = arreglo[arreglo.length - 1];
  for(let i = 0; i < arreglo.length; i++)
    if(indice === arreglo[i]) return true;
    else return false;
} 
todosIguales([])
console.log(todosIguales([20, 20, 20, 20]))


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
 var nuevoArray = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      nuevoArray.push(array[i])
    }
  }
if(nuevoArray.length === 3) return nuevoArray;
else return "No se encontraron los meses pedidos";
}
mesesDelAño([])
console.log(mesesDelAño(["Marzo", "Diciembre", "Abril", "Junio", "Julio", "Noviembre", "Enero", "Mayo", "Febrero"]))


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let mayores = [];
  for(let i = 0; i < array.length; i++){
  if(array[i] > 100){
    mayores.push(array[i])
  }
}  
return mayores;
}
mayorACien([])
console.log(mayorACien([100, 4, 56, 78, 200, 120, 7, 160, 148, 22]))


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoValor = [];
  var suma = numero;
  for(let i = 0; i < 10; i++){
    suma = suma +2; 
    if(suma === i){
      break;
    }else{
      nuevoValor.push(suma)
    }
}
if(nuevoValor.length < 10){
  return "Se interrumpió la ejecución"
}else if(nuevoValor.length === 10){
  return nuevoValor;
}
}

breakStatement()
console.log(breakStatement(-4))

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoValor = [];
  for(let i = 0; i < 9; i++){
  numero = numero + 2
  nuevoValor.push(numero)
  }
  return nuevoValor;
}
continueStatement()
console.log(continueStatement(-4))

// No modificar nada debajo de esta línea
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
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};

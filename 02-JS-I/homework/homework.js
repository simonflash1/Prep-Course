// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "SimonFlash";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 10;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;
console.log(nuevoModulo)


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código: 
  return str
  
}
console.log(devolverString("Henry"))

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var resultado;
  resultado = x + y;
  return resultado;
}

console.log(suma(10, 5))


function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var resultado;
  resultado = x - y;
  return resultado;
}
console.log(resta(10, 5))


function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
resultadoMultiplicacion = x * y;
return resultadoMultiplicacion;
}
console.log(multiplica(2, 4))


function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  let resultadoDivision = x / y;
  return resultadoDivision;
  
}
console.log(divide(100, 2))

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if (x === y) return true;
  else return false
}
console.log(sonIguales(1, 1))


function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if(str1.length == str2.length) return true;
  else return false;
}
tienenMismaLongitud("hi", "there")
console.log(tienenMismaLongitud("hi", "there"))

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num < 90) return true;
  else return false;  
}
menosQueNoventa(80)
console.log(menosQueNoventa(91))

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num > 50) return true;
  else return false;  
}
mayorQueCincuenta(76)
console.log(mayorQueCincuenta(49))

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  resto = x % y;
  return resto;
}
obtenerResto()
console.log(obtenerResto(10, 2))

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 === 0) return true;
  else return false;  
}
esPar()
console.log(esPar(2))

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 != 0) return true;
  else return false;  
}
esImpar()
console.log(esImpar(1))

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  let cuadrado = num * num;
  return cuadrado;  
}
console.log(elevarAlCuadrado(10))

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  let cubo = num * num * num;
  return cubo;
}
elevarAlCubo()
console.log(elevarAlCubo(3))

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  let resultado = num ** exponent;
  return resultado;
}
elevar()
console.log(elevar(2,3))

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  num = Math.round(num);
  return num;
}
redondearNumero()
console.log(redondearNumero(3.4))


function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  num = Math.ceil(num)
  return num;
}
redondearHaciaArriba()
console.log(redondearHaciaArriba(5.1))

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random()
}
numeroRandom()
console.log(numeroRandom)



function esPositivo(num) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if (num === 0) return false;
  if(num >= 1) return "Es positivo";
  else return "Es negativo";
}
esPositivo()
console.log(esPositivo(1))

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  str = str + "!";
  return str
}
agregarSimboloExclamacion()
console.log(agregarSimboloExclamacion("eseteere"))

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  let combinado = nombre + " " + apellido;
  return combinado
}
combinarNombres()
console.log(combinarNombres("Simon", "Flash"))

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  let saludo = "Hola " + nombre + "!";
  return saludo;
}
obtenerSaludo()
console.log(obtenerSaludo("Tincho"))

function obtenerAreaRectangulo(base, altura) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return (base * altura)
}
obtenerAreaRectangulo()
console.log(obtenerAreaRectangulo(5, 3))

function retornarPerimetro(ladoCuadrado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  ladoCuadrado = ladoCuadrado + ladoCuadrado + ladoCuadrado + ladoCuadrado;
  return ladoCuadrado
}
retornarPerimetro()
console.log(retornarPerimetro(10))

function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  return base * altura / 2;
}
areaDelTriangulo()
console.log("El resultado del area del triangulo es " + areaDelTriangulo(5, 8))

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  let dolar = euro * 1.20;
  return dolar;
}
deEuroAdolar()
console.log(deEuroAdolar(10))



function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if(letra == "A" | letra == "E" | letra == "I" | letra == "O" | letra == "U" | letra == "a" | letra == "e" | letra == "i" | letra == "o" | letra == "u") return "Es vocal";
  else return "Dato incorrecto";
}
esVocal()
console.log(esVocal("e"))


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};

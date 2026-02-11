console.log("Hola mundo");
var variable = "hola";
console.log(variable);
var numero = 5;
console.log(numero);
const constante = 6;
console.log(constante);
numero = 8;
console.log(numero);
console.log("La respuesta es: " + variable);
//COMENTARIOS
/*


asdf

da*/

// Operadores aritmeticos
// Potencia
var numero1 = 2;
var numero2 = 3;
var respuesta = Math.pow(numero1, numero2);
respuesta = numero1 ** numero2;
console.log(respuesta);

var resultado = "capuchino";
function cafetera(ing1, ing2) {
  if (ing1 == "leche" && ing2 == "cafe") {
    return resultado;
  }
}
var tasa = cafetera("leche", "cafe");
console.log(tasa);

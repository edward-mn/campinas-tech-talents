console.log("Exemplos de utilização de arrow function");

/*
  Preciso multiplicar dos valores denominados x e y
*/

function multiplicar(x, y) {
  return x * y;
}

console.log(multiplicar(2, 3));

var arrowFunctionSemRetorno = (x, y) => x * y;
console.log(arrowFunctionSemRetorno(4, 3));

var arrowfunctionComRetorno = (x, y) => {
  if (y > x) {
    return x * y;
  } else {
    console.log(`O valor de ${y} é maior que ${x}`);
  }
};

console.log(arrowfunctionComRetorno(1, 5));
console.log(arrowfunctionComRetorno(5, 1));

var funcaoSplit = function (frase) {
  return frase.split(" ");
};

console.log(funcaoSplit("Olá, estamos no CTT"));

var funcaoQuebraFrase = (frase) => frase.split(" ");
console.log("----");
console.log(funcaoQuebraFrase("Olá, estamos no CTT"));

var funcaoSemParametros = function minhaFuncao() {
  console.log("Só saida normal");
};

console.log(funcaoSemParametros());

var funcaoSemParam = () => console.log("Só saida normal arrow");

console.log(funcaoSemParam());

console.log("Array");

const preencherArray = (n) => {
  const array = [];

  for (let i = 0; i < n; i++) {
    array.push(i);
  }

  return array;
};

console.log(preencherArray(10).length);

const arrayDeNumeros = preencherArray(30);
console.log("30", arrayDeNumeros);

const parOuImpar = (tipo) => {
  if (tipo == "par") {
    return arrayDeNumeros.filter((numero) => numero % 2 == 0);
  } else if (tipo == "impar") {
    return arrayDeNumeros.filter((numero) => numero % 2 == 1);
  } else {
    return [];
  }
};

console.log("par", parOuImpar("par"));
console.log("impar", parOuImpar("impar"));
console.log("nada", parOuImpar("asf"));

// Destroi conteudo do array e retorna apenas em uma linha
console.log(...parOuImpar("par"));

console.log("All inside");
const vemDeTudo = [];
const jogaTudoPraDentro = (eln) => vemDeTudo.push(eln);

jogaTudoPraDentro(1);
jogaTudoPraDentro(5);
jogaTudoPraDentro("Olá pessoal");
jogaTudoPraDentro({ Nome: "Edward Moreira" });
jogaTudoPraDentro(() => {
  console.log("minha função");
});

console.log(vemDeTudo);

const processamento = (dados) => {
  const inteiros = [];
  const funcoes = [];
  const strings = [];
  // Transformação de dados
  dados.map((item) => {
    if (typeof item == "number") {
      inteiros.push(item);
    } else if (typeof item == "function") {
      funcoes.push(item);
    } else if (typeof item == "string") {
      strings.push(item);
    }
  });

  return {
    inteiros: inteiros.reduce((total, item) => {
      return (total *= item);
    }, 1),
    funcoes: funcoes,
    strings: strings,
  };
};

console.log("All inside - Separete");
console.log(processamento(vemDeTudo));

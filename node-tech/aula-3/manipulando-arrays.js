console.log("Manipulando meus arrays");

const avengers = [
  {
    nome: "Capitão America",
    genero: "M",
    idade: 84,
    habilidades: ["honestidade", "escudo", "porrada"],
  },
  {
    nome: "Homen de ferro",
    genero: "M",
    idade: 30,
    habilidades: ["dinheiro", "inteligência", "porrada", "armadura"],
  },
  {
    nome: "Capitã Marvel",
    genero: "F",
    idade: 45,
    habilidades: [
      "porrada",
      "fogo",
      "super forte",
      "invencivel",
      "voar",
      "destreza",
    ],
  },
  {
    nome: "War machine",
    genero: "M",
    idade: 40,
    habilidades: ["exercito", "armadura", "honestidade", "porrada"],
  },
  {
    nome: "Gavião Arqueiro",
    genero: "M",
    idade: 32,
    habilidades: ["arco e flecha", "porrada"],
  },
];

console.log("-ALL-");
console.log(avengers);

// apenas homens

const masculino = avengers.filter((item) => item.genero == "M");

console.log("-M-");
console.log(masculino);

// apenas nomes

const nameAvengers = avengers.map((item) => item.nome);

console.log("-Name-");
console.log(nameAvengers);

const avengersNameGenderArray = avengers.map((item) => [
  item.nome,
  item.genero,
]);

console.log("-Name & Genero (Array)-");
console.log(avengersNameGenderArray);

const avengersNameGenderObj = avengers.map((item) => {
  return {
    nome: item.nome,
    genero: item.genero,
  };
});

console.log("-Name & Genero (OBJ)-");
console.log(avengersNameGenderObj);

const avengersTotalAge = avengers.reduce((total, item) => {
  return (total += item.idade);
}, 0); // 0 caso seja null;

console.log("-All age-");
console.log(avengersTotalAge);

const seniorAvenger = avengers.some((item) => item.idade > 100); // 0 caso seja null;

console.log("-Senior Avenger-");
console.log(seniorAvenger);

const allHavelPorradaSkill = avengers.every((item) =>
  item.habilidades.includes("porrada")
); // Buscando dentro do Obj e Array a habilidade Porrada

console.log("-Every-");
console.log(allHavelPorradaSkill);

const haveFemaleAvengers = avengers.find((item) => item.genero == "F"); // primeira ocorrencia and return

console.log("-Find-");
console.log(haveFemaleAvengers);

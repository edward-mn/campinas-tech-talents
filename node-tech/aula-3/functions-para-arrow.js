console.log("Relembrando arrow functions");
/*
 1- Criar uma função que permita listar um veículo
 2- Criar uma função que permita listar a placa de um veículo passando um ID
*/

const listarVeiculo = (callback) => {
  console.log("Chama Listar veículos");
  setTimeout(() => {
    return callback(null, {
      id: 1,
      nome: "Gol",
    });
  }, 3000);
};

const listarPlaca = (id, callback) => {
  console.log("Chama Listar placa");
  setTimeout(() => {
    return callback(null, {
      id: id,
      nome: "Gol placa do carro",
      placa: "XXX-YYY",
    });
  }, 2000);
};

listarVeiculo(
  (resolverVeiculo = (erro, veiculo) => {
    listarPlaca(veiculo.id, (erro, placa) => {
      console.log(veiculo);
      console.log(placa);
    });
  })
);

/*
const veiculo = listarVeiculo();
const placa = listarPlaca(1);

console.log(placa);
*/

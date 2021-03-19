console.log("Exemplos promisses");

/*
 1- Criar uma função que permita listar um veículo
 2- Criar uma função que permita listar a placa de um veículo passando um ID
*/

const listarVeiculo = (callback) => {
  return new Promise((resolve, reject) => {
    try {
      //return reject(new Error("Erro na listagem de veículo")); Testando reject
      console.log("Chama Listar veículos");
      setTimeout(() => {
        return resolve({
          id: 1,
          nome: "Gol",
        });
      }, 3000);
    } catch (erro) {
      return reject(new Error(erro));
    }
  });
};

const listarPlaca = (id) => {
  return new Promise((resolve, reject) => {
    try {
      console.log("Chama Listar placa");
      setTimeout(() => {
        return resolve({
          id: id,
          nome: "Gol placa do carro",
          placa: "XXX-YYY",
        });
      }, 2000);
    } catch (erro) {
      return reject(new Error(erro));
    }
  });
};

async function main() {
  try {
    const carro = await listarVeiculo();
    const placa = await listarPlaca(carro.id);
  } catch (erro) {
    console.log("Erro de operação", erro);
  }
}

main();
/*
const veiculo = listarVeiculo();
const placa = listarPlaca(1);

console.log(placa);
*/

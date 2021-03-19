const moment = require("moment");
const { v4: uuidv4 } = require("uuid"); //Gerando um id não sequencial através do package uuid

const carros = [];

// Quando quizer buscar valor por URL, necessário referenciar :nomde_parametro
// Filtrar URL através do req.params ou buscar pelo req.body -> corpo
app.get("/v1/carros/:id", (req, res) => {
  const { id } = req.params;

  const carro = carros.filter((carro) => carro.id == id); // Filtrando objeto pelo id respectivo

  /*
  const carros = [{
    ud: uuid,
    nome: "Gol",
    marca: "Volksvagen",
    tipo: "Hatch",
    placa: "III-7A52",
    cor: "Branco",
  }];
  */

  return res.status(200).json(...carro);
});

app.get("/v1/carros", function (req, res) {
  return res.status(200).json(carros);
});

app.post("/v1/carros", function (req, res) {
  console.log(req.body);

  const { nome, marca, tipo, placa, cor } = req.body;

  if (!nome.length) {
    res.status(422).json({
      mensagem: "Opa, faltou o nome do carro",
    });
  } else if (!marca.length) {
    res.status(422).json({
      mensagem: "Opa, faltou o nome do marca",
    });
  } else if (!tipo.length) {
    res.status(422).json({
      mensagem: "Opa, faltou o tipo do carro",
    });
  } else if (!placa.length) {
    res.status(422).json({
      mensagem: "Opa, faltou a placa do carro",
    });
  } else if (!cor.length) {
    res.status(422).json({
      mensagem: "Opa, faltou a cor do carro",
    });
  }

  const event = {
    id: uuidv4(),
    ...req.body,
    timestamp: moment().toISOString(),
  };

  carros.push(event);
  console.log("Executou o evento de registro - Carro");
  return res.status(201).json(event);
});

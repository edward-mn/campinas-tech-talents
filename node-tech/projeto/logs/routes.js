const moment = require("moment");
const { v4: uuidv4 } = require("uuid"); //Gerando um id não sequencial através do package uuid

const logs = [];

app.get("/v1/logs", function (req, res) {
  return res.status(200).json(logs);
});

app.post("/v1/logs", function (req, res) {
  console.log(req.body);

  const { servico, evento } = req.body;

  if (!servico.length) {
    res.status(422).json({
      mensagem: "Opa, faltou nome do serviço",
    });
  }
  if (!evento.length) {
    res.status(422).json({
      mensagem: "Opa, faltou nome do evento",
    });
  }
  const event = {
    id: uuidv4(),
    ...req.body,
    timestamp: moment().toISOString(),
  };

  logs.push(event);
  console.log("Executou o evento de registro - Logs");
  return res.status(201).json(event);
});

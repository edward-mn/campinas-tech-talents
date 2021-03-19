const dotenv = require("dotenv");
dotenv.config(); // Ativando variáveis em .env
const { SERVICO, PORTA } = process.env;

console.log(`[CARREGANDO...] serviço ${SERVICO}:${PORTA}`);

const express = require("express");
app = express(); // Escopo global - Routes tem acesso
app.use(express.json());

const axios = require("axios"); //midware

// Criando um midware global, sempres será executado ao logar
app.use((req, res, next) => {
  const logar = async () => {
    const { data } = await axios.post("http://localhost:3003/v1/logs", {
      servico: req.method,
      evento: req.url,
      data: {},
    });

    return data;
  };

  let data = logar();

  data.then((log) => {
    console.log(log);
  });

  next();
});

require("./routes");

app.listen(PORTA, () => {
  console.log(`[CARREGOU!] ${SERVICO}:${PORTA}`);
});

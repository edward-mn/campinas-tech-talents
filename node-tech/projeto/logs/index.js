const dotenv = require("dotenv");
dotenv.config(); // Ativando variáveis em .env
const { SERVICO, PORTA } = process.env;

console.log(`[CARREGANDO...] serviço ${SERVICO}:${PORTA}`);

const express = require("express");
app = express(); // Escopo global - Routes tem acesso
app.use(express.json());

require("./routes");

app.listen(PORTA, () => {
  console.log(`[CARREGOU!] ${SERVICO}:${PORTA}`);
});

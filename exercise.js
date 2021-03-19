var usuario = {
  nome: "",
  ano_nascimento: 0,
  mes_nascimento: 0,
  dia_nascimento: 0,
  set_nome: function () {
    do {
      nome_prompt = prompt("Qual é seu nome?");
    } while (!this.validacaoVazio(nome_prompt));
    this.nome = this.apenasLetras(nome_prompt);
  },
  set_ano_nascimento: function () {
    ano_prompt = prompt("Qual é o ano do seu nascimento?");
    if (this.validaAno(ano_prompt)) {
      this.ano_nascimento = ano_prompt;
    }
  },
  set_mes_nascimento: function () {
    mes_prompt = prompt("Qual é o mês do seu nascimento?");
    if (this.validaMes(mes_prompt)) {
      this.mes_nascimento = mes_prompt;
    }
  },
  set_dia_nascimento: function () {
    dia_prompt = prompt("Qual é o dia do seu nascimento?");
    // Validação do dia
    this.dia_nascimento = dia_prompt;
  },
  get_nome: function () {
    return this.nome;
  },
  get_ano_nascimento: function () {
    return this.ano_nascimento;
  },
  get_mes_nascimento: function () {
    return this.mes_nascimento;
  },
  get_dia_nascimento: function () {
    return this.dia_nascimento;
  }, //,
  // get_data_nascimento: function(){
  //	return
  //}

  validacaoVazio: function (palavra) {
    return palavra !== "" && palavra !== undefined && palavra !== null;
  },

  apenasLetras: function (palavra) {
    return palavra.replace(/[^a-zA-Z]+/g, "");
  },

  validacaoInteiro: function (ano) {
    return Number.isInteger(ano); //Number();
  },

  validaAno: function (ano) {
    let anoVigente = new Date().getFullYear();
    let anoMin = anoVigente - 100;
    let anoMax = anoVigente + 5;
    this.mes_nascimento = 0;
    return (
      this.validacaoVazio(ano) &&
      this.validacaoInteiro(ano) &&
      ano > anoMin &&
      ano < anoMax
    );
  },

  validaMes: function (mes) {
    return (
      this.validacaoVazio(mes) &&
      this.validacaoInteiro(mes) &&
      mes > 0 &&
      mes <= 12
    );
  },
};

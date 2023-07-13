window.addEventListener('DOMContentLoaded', (event) => {
  const tamanhoFonteSelecao = document.getElementById('tamanhoFonte');
  const familiaFonteSelecao = document.getElementById('familiaFonte');
  const corFundoSelecao = document.getElementById('corFundo');

  tamanhoFonteSelecao.addEventListener('change', (event) => {
    const valorSelecionado = event.target.value;
    localStorage.setItem('tamanhoFonte', valorSelecionado);
    guardarMudancas();
  });

  familiaFonteSelecao.addEventListener('change', (event) => {
    const valorSelecionado = event.target.value;
    localStorage.setItem('familiaFonte', valorSelecionado);
    guardarMudancas();
  });

  corFundoSelecao.addEventListener('change', (event) => {
    const valorSelecionado = event.target.value;
    localStorage.setItem('corFundo', valorSelecionado);
    guardarMudancas();
  });

  function guardarMudancas() {
    const tamanhoFonte = localStorage.getItem('tamanhoFonte');
    const familiaFonte = localStorage.getItem('familiaFonte');
    const corFundo = localStorage.getItem('corFundo');

    if (tamanhoFonte) {
      document.body.style.fontSize = tamanhoFonte;
    }
    if (familiaFonte) {
      document.body.style.fontFamily = familiaFonte;
    }
    if (corFundo) {
      document.body.style.backgroundColor = corFundo;
    }
  }

  guardarMudancas();

const perguntas = [
  {
      pergunta: "Qual é o nome científico do girassol?",
      respostas: ["Helianthus Annuus", "Girassolus Maximus", "Florus Solarius", "Helios Sunflowerus"],
      respostaCorreta: 0
  },
  {
      pergunta: "Qual é a origem geográfica dos girassóis?",
      respostas: ["America do norte", "Europa ocidental", "Africa central", "Asia oriental"],
      respostaCorreta: 0
  },
  {
      pergunta: "Quais são as cores típicas das pétalas de um girassol?",
      respostas: ["Vermelho e amarelo", "Azul e branco", "Rosa e roxo", "Amarelo e laranja"],
      respostaCorreta: 3
  },
  {
      pergunta: "Quais são as partes principais de um girassol?",
      respostas: ["Raiz, caule, folhas e flores", "Folhas, frutas, ramos e sementes", "Petalas, estames, pistilo e nectar", "Caule, folhas, flores e sementes"],
      respostaCorreta: 0
  },
  {
      pergunta: "Normalmente, se cultivado em campo, até qual altura o girassol alcança?",
      respostas: ["1-2 metros", "3-4 metros", "5-6 metros", "7-8 metros"],
      respostaCorreta: 1
  },
  {
      pergunta: "Para nós, qual é a função das sementes de girassol?",
      respostas: ["Produção de oleo comestivel", "Polinização de outras flores", "Reprodução assexuada", "Proteção contra predadores"],
      respostaCorreta: 0
  },
  {
      pergunta: "O girassol é uma planta perene, anual, bienal ou bianual?",
      respostas: ["Perene", "Anual", "Bienal", "Bianual"],
      respostaCorreta: 1
  },
  {
      pergunta: "Qual é a principal substância produzida pelos girassóis?",
      respostas: ["Clorofila", "Ácido ascórbico", "Óleo vegetal", "Amido"],
      respostaCorreta: 2
  },
  {
      pergunta: "Quanto tempo, em média, leva para um girassol crescer do plantio à floração?",
      respostas: ["1-2 semanas", "1-2 meses", "3-4 meses", "5-6 meses"],
      respostaCorreta: 2
  },
  {
      pergunta: "Quais são alguns dos usos comuns dos girassóis além de sua beleza ornamental?",
      respostas: ["Alimentação animal e produção de biocombustíveis", "Perfumaria e fabricação de tecidos", "Construção de abrigos naturais e artesanato", "Cura de doenças e criação de tintas"],
      respostaCorreta: 0
  },
  {
    pergunta: "Quais são as condições de luz ideais para o crescimento saudável de girassóis?",
    respostas: ["Sombra parcial", "Luz difusa", "Sol pleno", "Luz artificial"],
    respostaCorreta: 2
},
{
    pergunta: "Qual é a época do ano mais comum para o florescimento dos girassóis?",
    respostas: ["Primavera", "Verão", "Outono", "Inverno"],
    respostaCorreta: 1
},
{
    pergunta: "Qual é o nome da estrutura em forma de espiral encontrada no centro de um girassol?",
    respostas: ["Estame", "Pétala", "Bráctea", "Receptáculo floral"],
    respostaCorreta: 3
},
{
    pergunta: "Quais são os principais benefícios do óleo de girassol para a saúde?",
    respostas: ["Redução do colesterol e fortalecimento do sistema imunológico", "Melhora da digestão e regulação do sono", "Aumento da resistência física e prevenção do envelhecimento precoce", "Estimulação da memória e combate à ansiedade"],
    respostaCorreta: 0
},
{
    pergunta: "Qual é o significado simbólico mais comum associado aos girassóis?",
    respostas: ["Amor eterno", "Sorte e prosperidade", "Renovação e crescimento", "Amizade verdadeira"],
    respostaCorreta: 3
},
{
    pergunta: "Qual é o país que lidera a produção mundial de girassóis?",
    respostas: ["Estados Unidos", "Rússia", "Argentina", "Ucrânia"],
    respostaCorreta: 1
},
{
    pergunta: "Durante a sua juventude, qual é a característica especial dos girassóis em relação à direção do sol?",
    respostas: ["Eles seguem o sol durante o dia", "Eles sempre enfrentam o leste", "Eles têm a capacidade de girar suas flores", "Eles são imóveis e não reagem à luz solar"],
    respostaCorreta: 0
},
{
    pergunta: "Qual é a família botânica à qual os girassóis pertencem?",
    respostas: ["Asteraceae", "Solanaceae", "Fabaceae", "Rosaceae"],
    respostaCorreta: 0
},
{
    pergunta: "Qual é a duração média do ciclo de vida de um girassol, desde o plantio até a maturidade?",
    respostas: ["2-3 meses", "4-6 meses", "8-10 meses", "12-14 meses"],
    respostaCorreta: 1
},
{
    pergunta: "Quais são os principais polinizadores dos girassóis?",
    respostas: ["Abelhas", "Borboletas", "Pássaros", "Ventos"],
    respostaCorreta: 0
},
];

let perguntasExibidas = [];
let indicePergunta = 0;
let respostasUsuario = [];
let primeiraTentativa = true;
let acertosAnteriores = 0;

const perguntaContainer = document.getElementById("pergunta-container");
const respostaContainer = document.getElementById("resposta-container");
const proximaPerguntaBtn = document.getElementById("proxima-pergunta-btn");
const resultadoContainer = document.getElementById("resultado-container");
const reiniciarBtn = document.getElementById("reiniciar-btn");

proximaPerguntaBtn.addEventListener("click", exibirProximaPergunta);
reiniciarBtn.addEventListener("click", reiniciarQuiz);

function embaralharPerguntas() {
  perguntasExibidas = perguntas.sort(() => Math.random() - 0.5).slice(0, 5);
}

function exibirPergunta(indice) {
perguntaContainer.textContent = perguntasExibidas[indice].pergunta;
respostaContainer.innerHTML = "";

for (let i = 0; i < perguntasExibidas[indice].respostas.length; i++) {
  const resposta = perguntasExibidas[indice].respostas[i];

  const radioBtn = document.createElement("input");
  radioBtn.type = "radio";
  radioBtn.name = "resposta";
  radioBtn.value = i;

  const label = document.createElement("label");
  label.textContent = resposta;

  respostaContainer.appendChild(radioBtn);
  respostaContainer.appendChild(label);
  respostaContainer.appendChild(document.createElement("br"));
}
}

function exibirResultado() {
const totalPerguntas = perguntasExibidas.length;
let acertos = 0;

for (let i = 0; i < totalPerguntas; i++) {
  if (respostasUsuario[i] === perguntasExibidas[i].respostaCorreta) {
    acertos++;
  }
}

const percentualAcertos = (acertos / totalPerguntas) * 100;

if (primeiraTentativa) {
  resultadoContainer.textContent = `Na sua primeira tentativa, você acertou ${percentualAcertos}% das perguntas. Quer jogar novamente?`;
  reiniciarBtn.textContent = "Jogar Novamente";
  acertosAnteriores = acertos;
  primeiraTentativa = false;
} else {
  const comparacao = acertos - acertosAnteriores;
  let mensagemComparacao = "";

  if (comparacao > 0) {
    mensagemComparacao = `Você melhorou em relação à última vez, acertando ${comparacao} pergunta(s) a mais.`;
  } else if (comparacao < 0) {
    mensagemComparacao = `Você piorou em relação à última vez, acertando ${Math.abs(comparacao)} pergunta(s) a menos.`;
  } else {
    mensagemComparacao = "Você manteve o mesmo desempenho em relação à última vez.";
  }

  resultadoContainer.textContent = `Você acertou ${percentualAcertos}% das perguntas. ${mensagemComparacao} Quer jogar novamente?`;
  reiniciarBtn.textContent = "Jogar Novamente";
  acertosAnteriores = acertos;
}

resultadoContainer.style.display = "block";
reiniciarBtn.style.display = "block";
}

function exibirProximaPergunta() {
const respostaSelecionada = document.querySelector(
  'input[name="resposta"]:checked'
);

if (respostaSelecionada) {
  const resposta = parseInt(respostaSelecionada.value);
  respostasUsuario.push(resposta);
}

if (indicePergunta < perguntasExibidas.length - 1 && indicePergunta < 4) {
  indicePergunta++;
  exibirPergunta(indicePergunta);
} else {
  exibirResultado();
}
}

function reiniciarQuiz() {
  indicePergunta = 0;
  respostasUsuario = [];
  resultadoContainer.style.display = "none";
  reiniciarBtn.style.display = "none";
  embaralharPerguntas();
  exibirPergunta(indicePergunta);
}


// Inicialização do quiz
embaralharPerguntas();
exibirPergunta(indicePergunta);
});


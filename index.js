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
});

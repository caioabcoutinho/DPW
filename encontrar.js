function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      document.getElementById("resultado").innerHTML = "O seu navegador não suporta Geolocalização.";
    }
  }
  
  function showPosition(position) {
    const latitudeUsuario = position.coords.latitude;
    const longitudeUsuario = position.coords.longitude;
  
    const distancia = calcularDistanciaUsuario(latitudeUsuario, longitudeUsuario, "Km");
  
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `A distância é de ${distancia} Km`;
  }
  
  function calcularDistanciaUsuario(latitudeUsuario, longitudeUsuario, unidade) {
    const latitudePontoFixo = -22.48313641646905;
    const longitudePontoFixo = -43.62571903493797;
  
    const R = 6371;
  
    const dLat = (latitudePontoFixo - latitudeUsuario) * (Math.PI / 180);
    const dLon = (longitudePontoFixo - longitudeUsuario) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(latitudeUsuario * (Math.PI / 180)) *
        Math.cos(latitudePontoFixo * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = R * c;
  
    if (unidade === "Mi") {
      distance *= 0.621371;
    }
  
    return distance.toFixed(2);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const tamanhoFonteSelecao = document.getElementById("tamanhoFonte");
    const familiaFonteSelecao = document.getElementById("familiaFonte");
    const corFundoSelecao = document.getElementById("corFundo");
  
    tamanhoFonteSelecao.addEventListener("change", function (event) {
      const valorSelecionado = event.target.value;
      localStorage.setItem("tamanhoFonte", valorSelecionado);
      guardarMudancas();
    });
  
    familiaFonteSelecao.addEventListener("change", function (event) {
      const valorSelecionado = event.target.value;
      localStorage.setItem("familiaFonte", valorSelecionado);
      guardarMudancas();
    });
  
    corFundoSelecao.addEventListener("change", function (event) {
      const valorSelecionado = event.target.value;
      localStorage.setItem("corFundo", valorSelecionado);
      guardarMudancas();
    });
  
    function guardarMudancas() {
      const tamanhoFonte = localStorage.getItem("tamanhoFonte");
      const familiaFonte = localStorage.getItem("familiaFonte");
      const corFundo = localStorage.getItem("corFundo");
  
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
  

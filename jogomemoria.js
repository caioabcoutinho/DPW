    var maximo = 16;
    var largura = 120;
    var altura = 200;
    var margem = 20;
    var viradas = 0;
    var ctx;
    var ordem = [];
    var imagens = [
      "imagens/carta1a.jpg", "imagens/carta1a.jpg",
      "imagens/carta2a.jpg", "imagens/carta2a.jpg",
      "imagens/carta3a.jpg", "imagens/carta3a.jpg",
      "imagens/carta4a.jpg", "imagens/carta4a.jpg",
      "imagens/carta5a.jpg", "imagens/carta5a.jpg",
      "imagens/carta6a.jpg", "imagens/carta6a.jpg",
      "imagens/carta7a.jpg", "imagens/carta7a.jpg",
      "imagens/carta8a.jpg", "imagens/carta8a.jpg"
    ];
    var cartasViradas = [];
    var paresEncontrados = 0;
    var totalPares = 8;

    function embaralhaCartas() {

      var i, verso = [];
      for (i = 0; i < maximo; i++) {
        ordem[i] = i;
      }

      var n, tmp;
      for (i = ordem.length; i;) {
        n = Math.random() * i-- | 0;
        tmp = ordem[n];
        ordem[n] = ordem[i];
        ordem[i] = tmp;
      }
    }

    var primeiraCartaVirada = false;
    var indicePrimeiraCarta;

    function viraCarta(canvas, event) {
      if (cartasViradas.length < 2) {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        nx = Math.floor(x / (largura + margem));
        x_inf = (nx + 1) * margem + nx * largura;
        x_sup = x_inf + largura;


        if (y > altura + margem) {
          nx += 8;
          y_inf = altura + margem;
          y_sup = y_inf + altura;
        } else {
          y_inf = 0;
          y_sup = altura;
        }

        if ((x >= x_inf && x <= x_sup) &&
          (y >= y_inf && y <= y_sup)) {


          if (!primeiraCartaVirada) {
            primeiraCartaVirada = true;
            indicePrimeiraCarta = nx;
          } else {

            if (indicePrimeiraCarta === nx) {
              return;
            }
            primeiraCartaVirada = false;
          }

          var ctx = document.getElementById('canvas').getContext('2d');
          var img = new Image();
          img.src = imagens[ordem[nx]];
          img.onload = function() {
            ctx.drawImage(img, x_inf, y_inf, largura, altura);
          }


          cartasViradas.push({
            src: imagens[ordem[nx]],
            imagem: img,
            x_inf: x_inf,
            y_inf: y_inf
          });


          if (cartasViradas.length === 2) {

            canvas.removeEventListener('mousedown', viraCarta);

            var carta1 = cartasViradas[0];
            var carta2 = cartasViradas[1];
            if (carta1.src !== carta2.src) {

              setTimeout(function() {
                limpaCartasViradas();
                cartasViradas = [];

                setTimeout(function() {
                  canvas.addEventListener('mousedown', viraCarta);
                }, 1000);
              }, 1000);
            } else {

              cartasViradas = [];
              paresEncontrados++;

              if (paresEncontrados === totalPares) {
                setTimeout(function() {
                  mostrarMensagemVitoria();
                }, 500);
              }


              setTimeout(function() {
                canvas.addEventListener('mousedown', viraCarta);
              }, 1000);
            }
          }
        }
      }
    }

    function limpaCartasViradas() {
      var ctx = document.getElementById('canvas').getContext('2d');
      for (var i = 0; i < cartasViradas.length; i++) {
        var carta = cartasViradas[i];
        ctx.clearRect(carta.x_inf, carta.y_inf, largura, altura);
        criaImagem(carta.indice, carta.x_inf, carta.y_inf);
      }
    }

    function criaImagem(i, x, y) {
      var ctx = document.getElementById('canvas');
      if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var img = new Image();
        img.src = "imagens/geral.jpg";
        img.onload = function() {
          ctx.drawImage(img, x, y, largura, altura);
        }
      }
    }

    function montaPainel() {
      var x = margem;
      var y = 0;
      for (var i = 0; i < maximo; i++) {
        criaImagem(i, x, y);
        x += largura + margem;
        if (i > (maximo / 2) - 2 && y == 0) {
          x = margem;
          y += altura + margem;
        }
      }
    }

    function iniciarJogo() {
      var botaoIniciar = document.getElementById('botao-iniciar');
      var botaoReiniciar = document.getElementById('botao-reiniciar');
      botaoIniciar.style.display = "none";
      botaoReiniciar.style.display = "none";

      var canvas = document.getElementById('canvas');
      canvas.addEventListener('mousedown', function(e) {
        viraCarta(canvas, e);
      });

      embaralhaCartas();
      montaPainel();
    }

    function reiniciarJogo() {
      var botaoIniciar = document.getElementById('botao-iniciar');
      var botaoReiniciar = document.getElementById('botao-reiniciar');
      botaoIniciar.style.display = "none";
      botaoReiniciar.style.display = "none";

      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      cartasViradas = [];
      paresEncontrados = 0;

      setTimeout(function() {
        iniciarJogo();
      }, 500);
    }

    function mostrarMensagemVitoria() {
      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = "bold 40px sans-serif";
      ctx.fillStyle = "yellow";
      ctx.textAlign = "center";
      ctx.fillText("Você ganhou!", canvas.width / 2, canvas.height / 2);

      var botaoReiniciar = document.getElementById('botao-reiniciar');
      botaoReiniciar.style.display = "block";
    }
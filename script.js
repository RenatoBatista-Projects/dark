window.onload = function () {
    // Pré-carregamento da imagem de fundo
    const bgImage = new Image();
    bgImage.src = "https://i.imgur.com/YLRgVQO.png";
  
    bgImage.onload = function () {
      // Aplica a imagem de fundo
      document.body.style.background = `url('${bgImage.src}') no-repeat center center fixed`;
      document.body.style.backgroundSize = 'cover';
  
      // Mostra o conteúdo e esconde o preloader
      document.getElementById("preloader").style.display = "none";
      document.getElementById("container").style.display = "block";
  
      // Inicia a contagem regressiva
      iniciarContagem();
    };
  
    function iniciarContagem() {
      const anoAtual = new Date().getFullYear();
     const targetDate = new Date(anoAtual, 3, 24, 0, 0, 0);

  
      function updateCountdown() {
        const now = new Date();
        let diff = targetDate - now;
  
        if (diff <= 0) {
          document.getElementById("countdown").innerHTML = "<span>0d 0h 0m 0s</span>";
          return;
        }
  
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
  
        document.getElementById("countdown").innerHTML = `<span>${days}d ${hours}h ${minutes}m ${seconds}s</span>`;
      }
  
      setInterval(updateCountdown, 1000);
      updateCountdown();
    }
  };
  

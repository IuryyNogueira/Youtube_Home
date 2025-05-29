const botaoMicrofone = document.getElementById("botao-microfone");
const modal = document.getElementById("modal-voz");
const fecharModal = document.getElementById("fechar-modal");
const conteudoModal = document.querySelector(".conteudo-modal");
const inputPesquisa = document.getElementById("campoPesquisa");
const botaoLimpar = document.getElementById("limparPesquisa");

//Histórico de pesquisas (localStorage)
const sugestoesPesquisa = document.getElementById("sugestoes-pesquisa");
let historico = JSON.parse(localStorage.getItem("historicoPesquisa")) || [];

let recognition;

botaoMicrofone.addEventListener("click", () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Seu navegador não suporta reconhecimento de voz.");
    return;
  }

  recognition = new SpeechRecognition();
  recognition.lang = "pt-BR";
  recognition.interimResults = false;

  recognition.onstart = () => {
    modal.classList.remove("oculto"); //mostra modal quando começar a escutar
  };

  recognition.onresult = (event) => {
    const resultado = event.results[0][0].transcript;
    console.log("Você disse:", resultado);
    inputPesquisa.value = resultado;

    if (inputPesquisa.value.length > 0) {
      botaoLimpar.classList.remove("oculto");
    } else {
      botaoLimpar.classList.add("oculto");
    }
  };

  recognition.onerror = (event) => {
    alert("Erro no reconhecimento de voz: " + event.error);
    modal.classList.add("oculto"); //fecha modal se der erro
  };

  recognition.onend = () => {
    modal.classList.add("oculto"); //fecha modal quando acabar
  };

  recognition.start(); //começa a escutar
});

// Fecha o modal ao clicar no botão de fechar
fecharModal.addEventListener("click", () => {
  modal.classList.add("oculto");
  if (recognition) recognition.stop();
});

modal.addEventListener("click", (event) => {
  // Fecha o modal se clicar fora do conteúdo
  if (!conteudoModal.contains(event.target)) {
    modal.classList.add("oculto");
    if (recognition) recognition.stop();
  }
});

inputPesquisa.addEventListener("input", (e) => {
  if (e.target.value.length > 0) {
    botaoLimpar.classList.remove("oculto");
  } else {
    botaoLimpar.classList.add("oculto");
  }
});

botaoLimpar.addEventListener("click", () => {
  inputPesquisa.value = "";
  botaoLimpar.classList.add("oculto");
});
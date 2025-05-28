const botaoMicrofone = document.getElementById("botao-microfone");
const modal = document.getElementById("modal-voz");
const fecharModal = document.getElementById("fechar-modal");
const conteudoModal = document.querySelector(".conteudo-modal");
const inputPesquisa = document.getElementById("campoPesquisa");

let recognition;

botaoMicrofone.addEventListener("click", () => {
  
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

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
  };

  recognition.onerror = (event) => {
    alert("Erro no reconhecimento de voz: " + event.error);
    modal.classList.add("oculto"); // fecha modal se der erro
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
  if (!conteudoModal.contains(event.target)) {// verifica se o clique foi fora do conteúdo
    modal.classList.add("oculto");
    if (recognition) recognition.stop();
  }
});

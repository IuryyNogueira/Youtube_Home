const botaoMicrofone = document.getElementById("botao-microfone");
const modal = document.getElementById("modal-voz");
const fecharModal = document.getElementById("fechar-modal");
const conteudoModal = document.querySelector(".conteudo-modal");

const botaoPesquisa = document.getElementById("botao-pesquisar");
const inputPesquisa = document.getElementById("campoPesquisa");
const botaoLimpar = document.getElementById("limparPesquisa");
const sugestoesPesquisa = document.getElementById("sugestoes-pesquisa");

// para salvar o histórico de pesquisa
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










// X limpar input

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


















function adicionarAoHistoricoEPesquisar() {
  const pesquisa = inputPesquisa.value.trim();

  if (pesquisa) {
    historico.push(pesquisa);
    localStorage.setItem("historicoPesquisa", JSON.stringify(historico));

    //se eu quisesse realmente pesquisar, poderia chamar uma função aqui
    // pesquisar(pesquisa);
    inputPesquisa.value = "";
    botaoLimpar.classList.add("oculto");
    mostrarSugestoes();
  }
}

// adicionar input ao historico clicar LUPA
botaoPesquisa.addEventListener("click", adicionarAoHistoricoEPesquisar);

inputPesquisa.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Evita o envio do formulário
    adicionarAoHistoricoEPesquisar();
  }
});
















function mostrarSugestoes() {
  
  sugestoesPesquisa.innerHTML = ""; // reseta

  // Se não houver histórico, esconde a lista
  if (!historico.length) {
    sugestoesPesquisa.classList.add("oculto");
    return;
  }

  sugestoesPesquisa.classList.remove("oculto");

  // Adiciona cada item do histórico como sugestão (mais recente primeiro)
  const termo = inputPesquisa.value.trim().toLowerCase();

  historico 
    .slice()  // cópia 
    .reverse() // inverte a ordem estou guardando com ( push )

    .filter((item) => !termo || item.toLowerCase().includes(termo))

    .forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      li.className = "sugestao-item";
      li.tabIndex = 0;
      li.addEventListener("click", () => {
        inputPesquisa.value = item;
        sugestoesPesquisa.classList.add("oculto");
        botaoLimpar.classList.remove("oculto");
      });
      sugestoesPesquisa.appendChild(li); 
    });

  // Se não houver sugestões após o filtro, esconde
  if (!sugestoesPesquisa.hasChildNodes()) {
    sugestoesPesquisa.classList.add("oculto");
  }
}


// Quando estive selecinando o campo de pesquisa
inputPesquisa.addEventListener("focus", () => {
  mostrarSugestoes();
  sugestoesPesquisa.style.zIndex = 2000;
});

//Quando estiver digitando no campo de pesquisa
inputPesquisa.addEventListener("input", mostrarSugestoes);


// Esconde sugestões ao clicar fora
window.addEventListener("mousedown", (e) => {
  if (!sugestoesPesquisa.contains(e.target) && e.target !== inputPesquisa) {
    sugestoesPesquisa.classList.add("oculto");
  }
});

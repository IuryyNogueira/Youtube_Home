const categorias = document.getElementById("categorias");

// const modalApi = document.querySelector(".pegar-api");
// const inputApi = document.querySelector("#input-api");
// const btnSalvar = document.querySelector("#btn-api-key");

// let apikey;

// window.addEventListener("load", () => modalApi.showModal());

// btnSalvar.addEventListener("click", () => {
//   apiKey = inputApi.value;

//   if (apiKey !== "") { 
//     modalApi.close();
//     console.log("Chave salva:", apiKey);
    
//   } else {
//     alert("Por favor, insira uma chave válida.");

//   }
// });

async function pegarImagensVideos(categoria) {
  const parametros = {
    method: "GET",
    headers: {
      Authorization: "SUA-CHAVE-PEXELS-AQUI",
    },
  };

  const videos = await fetch(
    `https://api.pexels.com/v1/search?query=${categoria}&per_page=10`,
    parametros
  );
  const videosJson = await videos.json();

  console.log(videosJson);

  return videosJson.photos;
}

function temporizador(tipo) {
  if (tipo === "menor") {
    const minutos = Math.floor(Math.random() * 100); 
    const segundos = Math.floor(Math.random() * 60); 

    const minStr = minutos.toString().padStart(2, '0');
    const segStr = segundos.toString().padStart(2, '0');
    return `${minStr}:${segStr}`;
  } else {
    const n = Math.random();
    let visualizacoes;
    if (n < 0.3) {
    
      visualizacoes = `${Math.floor(Math.random() * 990) + 10} visualizações`;
    } else if (n < 0.6) {
      visualizacoes = `${Math.floor(Math.random() * 999) + 1} mil visualizações`;
    } else {
      const mi = (Math.random() * 8.9 + 1).toFixed(1);
      visualizacoes = `${mi} mi visualizações`;
    }
    return visualizacoes;
  }
}

async function renderVideos(categoria) {
  const grid = document.getElementById("videos-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const videos = await pegarImagensVideos(categoria);

  videos.forEach((video) => {
    grid.innerHTML += `
      <div class="video-card">
        <div class="thumbnail">
          <img src="${video.src.medium}" alt="Thumbnail">
          <span class="tempo-pequeno">${temporizador('menor')}</span>
        </div>
        <div class="video-info">
          <img src="${
            video.src.tiny
          }" alt="Canal" class="channel-icon">
          <div class="text-info">
            <h4>${video.photographer}</h4>
            <p>${temporizador()}</p>
          </div>
          <div class="menu-video">⋮</div>
        </div>
      </div>
    `;
  });
}


async function traduzirCategoria(texto) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(texto)}`;
  const res = await fetch(url);
  const data = await res.json();
  return data[0][0][0]; 
}

window.addEventListener("load", async () => {
  const categoria = "All";
  await renderVideos(categoria);
});

categorias.addEventListener("click", async (event) => {
  const botaoClicado = event.target.closest(".botao-categorias");
  if (!botaoClicado) return;
  const categoriaParaVideos = botaoClicado.innerText.trim();

  const categoriaEmIngles = await traduzirCategoria(categoriaParaVideos);
  await renderVideos(categoriaEmIngles);
});


const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");
const categorias = document.getElementById("categorias");

function visibilidadeArrows() {
  const scrollEnd = categorias.scrollLeft + categorias.clientWidth;
  const maxScroll = categorias.scrollWidth;

  // seta esquerda
  if (categorias.scrollLeft <= 0) {
    leftArrow.style.visibility = "hidden";
  } else {
    leftArrow.style.visibility = "visible";
  }

  // seta direita
  if (scrollEnd >= maxScroll - 1) {
    rightArrow.style.visibility = "hidden";
  } else {
    rightArrow.style.visibility = "visible";
  }
}


categorias.addEventListener("scroll", visibilidadeArrows);
window.addEventListener("load", visibilidadeArrows);

leftArrow.addEventListener("click", () => {
  categorias.scrollBy({
    left: -200,
    behavior: "smooth",
  });
});

rightArrow.addEventListener("click", () => {
  categorias.scrollBy({
    left: 200,
    behavior: "smooth",
  });
});


// Seleção de categoria - node list botões
let botaoSelecionado = categorias.querySelector(".botao-categorias.selecionado");

categorias.addEventListener("click", (event) => {
  const botaoClicado = event.target.closest(".botao-categorias");

  if (!botaoClicado || botaoClicado === botaoSelecionado) return;

  if (botaoSelecionado) {
    botaoSelecionado.classList.remove("selecionado");
  }

  botaoClicado.classList.add("selecionado");
  botaoSelecionado = botaoClicado;
});


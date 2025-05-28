const button = document.getElementById("toggle-barra-btn");
const barraGrande = document.getElementById("barra-lateral-grande");
const barraReduzida = document.getElementById("barra-lateral-reduzida");

const containerCategorias = document.getElementById("scroll-horizontal-categorias");
const containerVideos = document.getElementById("conteudo-principal");

let reduzidaVisivel = false;

button.addEventListener("click", function () {
  
  reduzidaVisivel = !reduzidaVisivel;
  if (reduzidaVisivel) {
    
    barraGrande.style.display = "none";
    barraReduzida.style.display = "block";
    
    //Ajusta largura
    containerCategorias.style.width = "calc(97.5% - 72px)";
    containerCategorias.style.left = "91px";
    containerVideos.style.marginLeft = "72px";
    containerVideos.style.width = "calc(100% - 72px)";
  } 
  else {
    barraGrande.style.display = "block";
    barraReduzida.style.display = "none";
    
    // Restaura largura e margem padrão
    containerCategorias.style.width = "calc(97.5% - 240px)";
    containerCategorias.style.left = "259px";
    containerVideos.style.marginLeft = "240px";
    containerVideos.style.width = "calc(100% - 240px)";
  }
});

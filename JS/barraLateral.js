
const button = document.getElementById('toggle-barra-btn');
const barraGrande = document.getElementById('barra-lateral-grande');
const barraReduzida = document.getElementById('barra-lateral-reduzida');

let reduzidaVisivel = false;

button.addEventListener('click', function() {
    reduzidaVisivel = !reduzidaVisivel;
    if (reduzidaVisivel) {
        barraGrande.style.display = 'none';
        barraReduzida.style.display = 'block';
    } else {
        barraGrande.style.display = 'block';
        barraReduzida.style.display = 'none';
    }
}); 


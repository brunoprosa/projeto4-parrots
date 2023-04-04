let numCards = 0;
let cards = document.querySelector(".cards");
const gifs = [bobrossparrot, explodyparrot, fiestaparrot, metalparrot, revertitparrot, tripletsparrot, unicornparrot]
window.onload = numberCards();
function numberCards(){
    numCards = Number(prompt("quantidade de cartas para jogar"));
    while (numCards % 2 !== 0 || numCards < 4 || numCards > 14){
        numCards = Number(prompt("quantidade de cartas para jogar"));
    }
    for(let i = 0; i < numCards; i++){
        cards.innerHTML += `<div class ="card" onclick ="virarCarta(this)"><img src="/images/back.png"></div>`
    }
}
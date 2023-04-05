let numCards = 0;
let cards = document.querySelector(".cards");
let gifs = ["/images/bobrossparrot.gif", "/images/explodyparrot.gif", "/images/fiestaparrot.gif", "/images/metalparrot.gif", "/images/revertitparrot.gif", "/images/tripletsparrot.gif", "/images/unicornparrot.gif"];
let gifsAleatorio = [];
window.onload = numberCards();
function numberCards(){
    numCards = Number(prompt("quantidade de cartas para jogar"));
    while (numCards % 2 !== 0 || numCards < 4 || numCards > 14){
        numCards = Number(prompt("quantidade de cartas para jogar"));
    }
    distribuirCartas();
}
function distribuirCartas(){
    gifs.sort(randomizar);
    for(let j = 0; j < numCards/2; j++){
        gifsAleatorio.push(gifs[j]);
        gifsAleatorio.push(gifs[j]);
    }
    gifsAleatorio.sort(randomizar);
    for(let i = 0; i < numCards; i++){
        cards.innerHTML += `<div class="card"><div class ="front-face face" onclick ="virarCarta(this)"><img src="/images/back.png"></div><div class ="back-face face"><img src=${gifsAleatorio[i]}></div></div>`;
    }
}
function randomizar(){
    return Math.random() - 0.5;
}
//function virarCarta(card){}
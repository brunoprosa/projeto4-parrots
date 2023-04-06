let numCards = 0;
let cards = document.querySelector(".cards");
let gifs = ["/images/bobrossparrot.gif", "/images/explodyparrot.gif", "/images/fiestaparrot.gif", "/images/metalparrot.gif", "/images/revertitparrot.gif", "/images/tripletsparrot.gif", "/images/unicornparrot.gif"];
let gifsAleatorio = [];
let jogadas = 0;
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
        cards.innerHTML += `<div class="card semPar" onclick ="virarCarta(this)"><div class ="front-face face"><img src="/images/back.png"></div><div class ="back-face face"><img src=${gifsAleatorio[i]}></div></div>`;
    }
}
function randomizar(){
    return Math.random() - 0.5;
}
function virarCarta(carta) {
    let cartaSelecionadaAnt = document.querySelector(".selecionado");

    const frente = carta.querySelector(".front-face");
    frente.classList.toggle("front");

    const tras = carta.querySelector(".back-face");
    tras.classList.toggle("back");

    carta.classList.add("selecionado");
    jogadas++;

    if (cartaSelecionadaAnt !== null){
        if (cartaSelecionadaAnt.innerHTML !== carta.innerHTML){
            setTimeout(desvirarCartas, 1000);
        }else{
            carta.classList.remove("selecionado");
            cartaSelecionadaAnt.classList.remove("selecionado");
            carta.classList.remove("semPar");
            cartaSelecionadaAnt.classList.remove("semPar");
            if (document.querySelector(".semPar") === null){
                setTimeout(fimDoJogo,50);
            }
        }
    }
    console.log(document.querySelector(".semPar"));
    
}
function desvirarCartas(){
    document.querySelector(".selecionado .front-face").classList.toggle("front");
    document.querySelector(".selecionado .back-face").classList.toggle("back");
    document.querySelector(".selecionado").classList.remove("selecionado");

    document.querySelector(".selecionado .front-face").classList.toggle("front");
    document.querySelector(".selecionado .back-face").classList.toggle("back");
    document.querySelector(".selecionado").classList.remove("selecionado");
}
function fimDoJogo(){
    alert(`Você ganhou em ${jogadas} jogadas!`);
}
let numCards = 0;
let cards = document.querySelector(".cards");
let gifs = ["/images/bobrossparrot.gif", "/images/explodyparrot.gif", "/images/fiestaparrot.gif", "/images/metalparrot.gif", "/images/revertitparrot.gif", "/images/tripletsparrot.gif", "/images/unicornparrot.gif"];
let gifsAleatorio = [];
let jogadas = 0;
let tempo = 0;
let pararIntervalo = 0;
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
        cards.innerHTML += `<div class="card semPar" data-test="card" onclick ="virarCarta(this)"><div class ="front-face face"><img data-test="face-down-image" src="/images/back.png"></div><div class ="back-face face"><img data-test="face-up-image" src=${gifsAleatorio[i]}></div></div>`;
    }
    pararIntervalo = setInterval(cronometro,1000);
}
function randomizar(){
    return Math.random() - 0.5;
}
function virarCarta(carta) {
    if (carta.classList.contains("selecionado") || !(carta.classList.contains("semPar"))){
        return
    }
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
    clearInterval(pararIntervalo);
    alert(`Você ganhou em ${jogadas} jogadas! A duração do jogo foi de ${tempo} segundos!`);
    let reiniciar = prompt("Você gostaria de reiniciar a partida? (sim ou não)");
    while (reiniciar !== 'sim' && reiniciar !== 'não'){
        reiniciar = prompt("Você gostaria de reiniciar a partida? (sim ou não)");
    }
    if (reiniciar === 'sim'){
        reset();
    }
}
function cronometro(){
    tempo++;
    document.querySelector(".cronometro").innerHTML = tempo;
}
function reset(){
    tempo = 0;
    jogadas = 0;
    cards.innerHTML = '';
    gifsAleatorio = [];
    numberCards();
}
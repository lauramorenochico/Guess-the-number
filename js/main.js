'use strict';

console.log ('holisss'); //bien enlazadado

//constantes.
const secNumber = document.querySelector ('.js-section-number');
const btn = document.querySelector ('.js-section-btn');
const clueNumber = document.querySelector ('.js-clue');
const counter = document.querySelector ('js-counter');

// cuando hacemos click en botón , se genera un número aleatorio que compararemos con el dado por la jugadora

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function pcRandomNumber () {
    const randomNumber = getRandomNumber(100);
    let playerNumber = secNumber.value;
    //console.log(numeroAdivinar);
    //let varía, hay que ponerla dentro de la función.
    if (randomNumber < playerNumber) {
        clueNumber.innerHTML= "Demasiado bajo"

    } else if (randomNumber > playerNumber) {
        clueNumber.innerHTML= "Demasiado alto"
    } else {
        clueNumber.innerHTML= "¡enhorabuena campeona!"
    }
}
//getramdonnumber no puede ir dentro de pcramdomnumber


//actualizar el contador 
function countMoves (){
let counterMoves  = 0;
const totalMoves = parseInt(counter.value);
const totalMoves = counterMoves++;
counter.innerHTML = `Número de intentos: ${totalMoves}`;
} 


//función principal
function handleClick (e){
e.preventDefault(); 
pcRandomNumber ();
countMoves ();
}


//evento del botón. 
btn.addEventListener('click', handleClick);
//función ( acceder al input y mostarlo en la consola)
// función (comparar números y dar pistas)


/*function comparisonNumber(){
    const userNumber = parseInt(inputNumber.value);

    if (userNumber < 1 || userNumber > 100){
        clue.innerHTML = 'El número debe estar entre 1 y 100'
    } else if(userNumber > randomNumber){
        clue.innerHTML = 'Demasiado alto';
    } else if (userNumber < randomNumber){
       clue.innerHTML = 'Demasiado bajo' 
    } else if (userNumber === randomNumber){
        clue.innerHTML = 'Has ganado campeona!!!'


        function updateCounter(){
    counterNumber++;
    attemptCounter.innerHTML = `Número de intentos: ${counterNumber}`;
}*/
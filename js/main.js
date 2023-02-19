"use strict";

//constantes.
const secNumber = document.querySelector(".js-section-number");
const btn = document.querySelector(".js-section-btn");
const clueNumber = document.querySelector(".js-clue");
const counter = document.querySelector(".js-counter");
let counterMoves = 0; //se deja fuera porque no queremos que se ejecute cada vez que hacemos click
const randomNumber = getRandomNumber(100); //se deja fuera porque no queremos que se ejecute cada vez que hacemos click

// cuando hacemos click en botón , se genera un número aleatorio que compararemos con el dado por la jugadora

//function removeStartMessageClass () => {secNumber.classList.remove('warningMessage')}


//agrupar todos los innerHTML para usar la función creada y no repetir sentencias.
function showMessage (message) {
  clueNumber.innerHTML = message
}

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(randomNumber);

function pcRandomNumber() {
  let playerNumber = parseInt (secNumber.value);
  if (playerNumber < 1 || playerNumber > 100) {
    showMessage ('El número debe estar entre 1 y 100')
  }else if (randomNumber > playerNumber) {
    showMessage ("Demasiado bajo");
  } else if (randomNumber < playerNumber) {
    showMessage ("Demasiado alto");
  } else {
    showMessage ("¡Has ganado campeona!");
  }
}

//actualizar el contador

function countMoves() {
  const totalMoves = counterMoves++;
  counter.innerHTML = `Número de intentos: ${totalMoves}`;
}

//función principal
function handleClick(e) {
  e.preventDefault();
  pcRandomNumber();
  countMoves();
}

//evento del botón.
btn.addEventListener("click", handleClick);




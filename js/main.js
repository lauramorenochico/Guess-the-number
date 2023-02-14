"use strict";

//constantes.
const secNumber = document.querySelector(".js-section-number");
const btn = document.querySelector(".js-section-btn");
const clueNumber = document.querySelector(".js-clue");
const counter = document.querySelector(".js-counter");
let counterMoves = 0; //se deja fuera porque no queremos que se ejecute cada vez que hacemos click
const randomNumber = getRandomNumber(100); //se deja fuera porque no queremos que se ejecute cada vez que hacemos click

// cuando hacemos click en botón , se genera un número aleatorio que compararemos con el dado por la jugadora

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

console.log(randomNumber);

function pcRandomNumber() {
  let playerNumber = secNumber.value;
  if (playerNumber < 1 || playerNumber > 100) {
    clueNumber.innerHTML = 'El número debe estar entre 1 y 100'
  }else if (randomNumber > playerNumber) {
    clueNumber.innerHTML = "Demasiado bajo";
  } else if (randomNumber < playerNumber) {
    clueNumber.innerHTML = "Demasiado alto";
  } else {
    clueNumber.innerHTML = "¡Has ganado campeona!";
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




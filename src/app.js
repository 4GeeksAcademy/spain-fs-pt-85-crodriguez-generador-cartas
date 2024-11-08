/* eslint-disable */
import "bootstrap";
import "./style.css";

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const palos = ["♦", "♥", "♠", "♣"];

window.onload = function() {
  let randomNumber = Math.floor(Math.random() * numbers.length);
  document.getElementsByClassName("number")[0].innerHTML =
    numbers[randomNumber];
  let randomPalo = Math.floor(Math.random() * palos.length);
  const paloAleatorio = palos[randomPalo];
  const elementosPalo = document.getElementsByClassName("palo");
  for (let i = 0; i < elementosPalo.length; i++) {
    elementosPalo[i].textContent = paloAleatorio;
  }
};

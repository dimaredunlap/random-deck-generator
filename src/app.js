/* eslint-disable */

import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  setInterval(randomCard, 10000);
};

function randomCard() {
  let numbers = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "A",
    "Q",
    "K",
    "J"
  ];
  let suits = ["♦", "♥", "♠", "♣"];
  let randNumber = Math.floor(Math.random() * numbers.length);
  document.querySelector(".numbers").innerText = numbers[randNumber];
  let randSuit = Math.floor(Math.random() * suits.length);
  document.querySelector(".top-suit").innerText = suits[randSuit];
  document.querySelector(".bottom-suit").innerText = suits[randSuit];
  if (suits[randSuit] == "♥" || suits[randSuit] == "♦") {
    document.querySelector(".top-suit").classList.add("red");
    document.querySelector(".bottom-suit").classList.add("red");
    document.querySelector(".numbers").classList.add("red");
  } else {
    document.querySelector(".top-suit").classList.remove("red");
    document.querySelector(".bottom-suit").classList.remove("red");
    document.querySelector(".numbers").classList.remove("red");
  }
}

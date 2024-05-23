import { addToListButton } from "./addToListButton.js";

const form = document.querySelector("form");
const displayCards = document.getElementById("show-cards");
var cardId = localStorage.getItem("cardId")
  ? localStorage.getItem("cardId")
  : 1;

document.addEventListener("DOMContentLoaded", function () {
  if (Object.keys(localStorage).length != 0) {
    Object.keys(localStorage).forEach((e) => {
      if (e == "loglevel" || e == "cardId") {
      } else {
        addToListButton(displayCards, e);
      }
    });
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  addToListButton(displayCards, cardId).then((cardDetails) => {
    localStorage.setItem(
      cardDetails.cardId,
      JSON.stringify({
        desc: cardDetails.description,
        loc: cardDetails.location,
        dest: cardDetails.destination,
        photo: cardDetails.photo,
      })
    );
  });
  cardId++
});

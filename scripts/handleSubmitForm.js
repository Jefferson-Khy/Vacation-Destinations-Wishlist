import { addToListButton } from "./addToListButton.js";

const form = document.querySelector("form");
const displayCards = document.getElementById("show-cards");
let cardId = 1;

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem(cardId)) {
    Object.keys(localStorage).forEach((e) => {
      if (e == "loglevel") {
      } else {
        addToListButton(displayCards, e);
      }
    });
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const cardDetails = addToListButton(displayCards, cardId);
  localStorage.setItem(
    cardDetails.cardId,
    JSON.stringify({
      desc: cardDetails.description,
      loc: cardDetails.location,
      dest: cardDetails.destination,
      photo: cardDetails.photo,
    })
  );

  cardId++;
});

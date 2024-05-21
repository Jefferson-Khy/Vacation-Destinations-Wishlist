import { createCard } from "./createCard.js";

export function addToListButton(displayCards, cardId) {
  var destination = "";
  var location = "";
  var photo = "";
  var description = "";

  if (localStorage.getItem(cardId)) {
    const cardInfo = JSON.parse(localStorage.getItem(cardId));
    destination = cardInfo.dest;
    location = cardInfo.loc;
    photo = cardInfo.photo;
    description = cardInfo.desc;
  } else {
    //grab values from form
    destination = document.getElementById("destinationName").value;
    location = document.getElementById("location").value;
    photo =
      document.getElementById("photo").value ||
      "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
    description = document.getElementById("description").value;
  }

  //send user input to create card function
  const { cardElement, cardDetails } = createCard(
    destination,
    location,
    photo,
    description,
    cardId
  );

  //add card html to display card container
  displayCards.appendChild(cardElement);

  //reset form input fields
  document.querySelector("form").reset();
  //increment cardId for new card
  cardId++;
  return cardDetails;
}

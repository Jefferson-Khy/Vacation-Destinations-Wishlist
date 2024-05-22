import { createCard } from "./createCard.js";
import { getPhoto } from "./getPhotoAPI.js";

export function addToListButton(displayCards, cardId) {
  var destination = "";
  var location = "";
  var photo = "";
  var description = "";

  return new Promise((resolve, reject) => {
    if (localStorage.getItem(cardId)) {
      const cardInfo = JSON.parse(localStorage.getItem(cardId));
      destination = cardInfo.dest;
      location = cardInfo.loc;
      photo = cardInfo.photo;
      description = cardInfo.desc;

      // Send user input to create card function
      const { cardElement, cardDetails } = createCard(
        destination,
        location,
        photo,
        description,
        cardId
      );

      // Add card HTML to display card container
      displayCards.appendChild(cardElement);

      // Reset form input fields
      document.querySelector("form").reset();

      resolve(cardDetails);
    } else {
      // Grab values from form
      destination = document.getElementById("destinationName").value;
      location = document.getElementById("location").value;

      getPhoto(destination)
        .then((firstPic) => {
          photo =
            firstPic ||
            "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
          description = document.getElementById("description").value;

          // Send user input to create card function
          const { cardElement, cardDetails } = createCard(
            destination,
            location,
            photo,
            description,
            cardId
          );

          // Add card HTML to display card container
          displayCards.appendChild(cardElement);

          // Reset form input fields
          document.querySelector("form").reset();

          // Increment cardId for new card
          let updateCardId = parseInt(cardId);
          updateCardId += 1;
          updateCardId.toString();
          localStorage.setItem("cardId", updateCardId);
          resolve(cardDetails);
        })
        .catch((error) => {
          console.error("Error fetching photo:", error);
          photo =
            "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
          description = document.getElementById("description").value;

          // Send user input to create card function
          const { cardElement, cardDetails } = createCard(
            destination,
            location,
            photo,
            description,
            cardId
          );

          // Add card HTML to display card container
          displayCards.appendChild(cardElement);

          // Reset form input fields
          document.querySelector("form").reset();

          // Increment cardId for new card
          let updateCardId = parseInt(cardId);
          updateCardId += 1;
          updateCardId.toString();
          localStorage.setItem("cardId", updateCardId);
          resolve(cardDetails);
        });
    }
  });
}

import { createCard } from "./createCard.js";

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

      // Increment cardId for new card
      cardId++;
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
          cardId++;
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
          cardId++;
          resolve(cardDetails);
        });
    }
  });
}

function getPhoto(destination) {
  return fetch(`https://api.unsplash.com/search/photos?query=${destination}`, {
    method: "GET",
    headers: {
      Authorization: `Client-ID UcL_oDqsa7rrfCC7Yy2Nl0_2gv4wBCr8N7ceCRczS1Y`,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const firstPic = data.results[0]?.urls?.regular || null;
      return firstPic;
    });
}

import { editCard, removeCard } from "./manipulateCard.js";

export function createCard(destination, location, photo, description, cardId) {
  const card = document.createElement("div");
  card.innerHTML = `<div class="card" id="${cardId}">
      <img src="${photo}" class="card-img-top" alt="default picture">
      <div class="card-body">
        <h5 class="card-title">${destination}</h5>
        <h6 class="card-subTitle">${location}</h6>
        <p class="card-text">${description}</p>
        <div class="card-buttons">
          <button class="btn btn-warning edit-btn">Edit</button>
          <button class="btn btn-danger remove-btn">Remove</button>
        </div>
      </div>
    </div>`;

  const editBtn = card.querySelector(".edit-btn");
  const removeBtn = card.querySelector(".remove-btn");

  editBtn.addEventListener("click", () => editCard(`${cardId}`));
  removeBtn.addEventListener("click", () => removeCard(`${cardId}`));

  return {
    cardElement: card,
    cardDetails: {
      cardId: cardId,
      destination: destination,
      location: location,
      photo: photo,
      description: description,
    },
  };
}

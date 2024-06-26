import { getPhoto } from "./getPhotoAPI.js";

export function editCard(cardId) {
  const card = document.getElementById(cardId);

  const photo = card.querySelector(".card-img-top");
  const destination = card.querySelector(".card-title");
  const location = card.querySelector(".card-subTitle");
  const description = card.querySelector(".card-text");

  const newTitle = prompt("Enter new destination");
  const newSubtitle = prompt("Enter new location");
  const newDesc = prompt("Enter description");

  getPhoto(newTitle)
    .then((firstPic) => {
      const newPhoto =
        firstPic ||
        "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";

      // Update the card details
      if (newTitle) destination.textContent = newTitle;
      if (newSubtitle) location.textContent = newSubtitle;
      if (newPhoto) photo.src = newPhoto;
      if (newDesc) description.textContent = newDesc;

      // Update local storage
      const updateStorage = JSON.parse(localStorage.getItem(cardId));
      console.log(cardId);
      updateStorage.dest = newTitle;
      updateStorage.desc = newDesc;
      updateStorage.photo = newPhoto;
      updateStorage.loc = newSubtitle;
      localStorage.setItem(cardId, JSON.stringify(updateStorage));
    })
    .catch((error) => {
      console.error("Error fetching photo:", error);
      const newPhoto =
        "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";

      // Update the card details
      if (newTitle) destination.textContent = newTitle;
      if (newSubtitle) location.textContent = newSubtitle;
      if (newPhoto) photo.src = newPhoto;
      if (newDesc) description.textContent = newDesc;

      // Update local storage
      const updateStorage = JSON.parse(localStorage.getItem(cardId));
      console.log(cardId);
      updateStorage.dest = newTitle;
      updateStorage.desc = newDesc;
      updateStorage.photo = newPhoto;
      updateStorage.loc = newSubtitle;
      localStorage.setItem(cardId, JSON.stringify(updateStorage));
    });
}

export function removeCard(cardId) {
  const card = document.getElementById(cardId);
  if (card) card.remove();
  localStorage.removeItem(cardId);
}
